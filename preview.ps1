# VibePulse — local preview server (Windows, no installs needed)
#
# How to use:
#   1. Right-click this file and choose "Run with PowerShell"
#   2. Your browser opens http://localhost:8080 automatically
#   3. Keep the black window open while you test. Press Ctrl+C (or close it) to stop.
#
# This file is only for testing on your own computer. Vercel never runs it.

$ErrorActionPreference = 'Stop'
$port  = 8080
$root  = Split-Path -Parent $MyInvocation.MyCommand.Path
$types = @{
  '.html' = 'text/html; charset=utf-8'; '.css' = 'text/css; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'; '.txt' = 'text/plain; charset=utf-8'; '.md' = 'text/plain; charset=utf-8'
  '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.png' = 'image/png'; '.webp' = 'image/webp'; '.gif' = 'image/gif'
  '.svg' = 'image/svg+xml'; '.ico' = 'image/x-icon'
  '.mp3' = 'audio/mpeg'; '.m4a' = 'audio/mp4'; '.aac' = 'audio/aac'; '.ogg' = 'audio/ogg'; '.wav' = 'audio/wav'; '.flac' = 'audio/flac'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
  $listener.Start()
} catch {
  Write-Host ""
  Write-Host "Port $port is busy. Close the other preview window, or change `$port at the top of this file." -ForegroundColor Yellow
  Write-Host ""
  Read-Host "Press Enter to close"
  exit 1
}

Write-Host "VibePulse is running at http://localhost:$port  -  press Ctrl+C to stop" -ForegroundColor Green
Write-Host "Serving files from: $root" -ForegroundColor DarkGray
Start-Process "http://localhost:$port/"

$rootFull = (Get-Item -LiteralPath $root).FullName.TrimEnd('\')

try {
  while ($listener.IsListening) {
    $ctx  = $listener.GetContext()
    $req  = $ctx.Request
    $res  = $ctx.Response

    $rel    = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath).TrimStart('/')
    if ($rel -eq '') { $rel = 'index.html' }
    try { $target = [System.IO.Path]::GetFullPath((Join-Path $root $rel)) } catch { $target = $rootFull }

    if (-not $target.StartsWith($rootFull, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $target -PathType Leaf)) {
      $res.StatusCode = 404
      if ($req.HttpMethod -ne 'HEAD') {
        $body = [Text.Encoding]::UTF8.GetBytes('404 - not found: ' + $rel)
        $res.OutputStream.Write($body, 0, $body.Length)
      }
      $res.Close()
      continue
    }

    $ext  = [System.IO.Path]::GetExtension($target).ToLower()
    $type = if ($types.ContainsKey($ext)) { $types[$ext] } else { 'application/octet-stream' }
    $size = (New-Object System.IO.FileInfo $target).Length
    $res.ContentType   = $type
    $res.Headers.Add('Accept-Ranges', 'bytes')
    $res.Headers.Add('Cache-Control', 'no-store')

    $range = $req.Headers['Range']
    $start = 0; $end = $size - 1; $partial = $false
    if ($range -match 'bytes=(\d*)-(\d*)') {
      $partial = $true
      if ($Matches[1] -ne '') { $start = [long]$Matches[1] }
      if ($Matches[2] -ne '') { $end = [long]$Matches[2] }
      if ($end -ge $size) { $end = $size - 1 }
      if ($start -gt $end) { $res.StatusCode = 416; $res.Close(); continue }
      $res.StatusCode   = 206
      $res.Headers.Add('Content-Range', "bytes $start-$end/$size")
    } else {
      $res.StatusCode = 200
    }

    $len = $end - $start + 1
    $res.ContentLength64 = $len

    if ($req.HttpMethod -eq 'HEAD') { $res.Close(); continue }

    $fs = [System.IO.File]::OpenRead($target)
    try {
      $fs.Seek($start, 'Begin') | Out-Null
      $buffer = New-Object byte[] 65536
      $left = $len
      while ($left -gt 0) {
        $want = [Math]::Min([int]$left, $buffer.Length)
        $got  = $fs.Read($buffer, 0, $want)
        if ($got -le 0) { break }
        $res.OutputStream.Write($buffer, 0, $got)
        $left -= $got
      }
    } catch {
      Write-Host ("  skipped one request: " + $_.Exception.Message) -ForegroundColor DarkGray
    } finally {
      $fs.Close()
      try { $res.Close() } catch {}
    }
    continue
  }
} catch {
  Write-Host $_.Exception.Message -ForegroundColor Red
} finally {
  $listener.Stop()
  $listener.Close()
}
