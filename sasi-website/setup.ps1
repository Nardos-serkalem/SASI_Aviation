Write-Host "SASI website setup" -ForegroundColor Cyan
Write-Host "1. Frontend dependencies"
Set-Location "$PSScriptRoot\frontend"
npm install
Write-Host "2. Backend virtual environment"
Set-Location "$PSScriptRoot\backend"
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
Write-Host "Setup complete. Run start-dev.ps1 next."
