@echo off
echo ========================================================
echo   MIKI WIRE WORKS - NEXT GEN DEVELOPMENT SERVER
echo ========================================================
echo.

:: 1. Navigate to the project directory
echo [INFO] Navigating to project folder...
cd mikiwire-next
if %errorlevel% neq 0 (
    echo [ERROR] Could not find 'mikiwire-next' folder!
    echo         Make sure this file is in the root 'deepikamotors' folder.
    pause
    exit /b
)

:: 2. Check for node_modules and install if missing
if not exist "node_modules\" (
    echo [INFO] First time setup detected. Installing dependencies...
    echo         (This may take a few minutes)
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install failed!
        pause
        exit /b
    )
)

:: 3. Start the Development Server
echo.
echo [INFO] Starting Next.js Dev Server...
echo [INFO] Opening browser at http://localhost:3000
echo.
call npm run dev

echo.
echo [STOPPED] Server has stopped.
pause
