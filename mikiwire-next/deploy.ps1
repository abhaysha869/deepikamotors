$targetDir = "C:\Users\hitesh\Desktop\projects\mikiwire"
$sourceDir = "C:\Users\hitesh\Desktop\projects\WebV1\deepikamotors\mikiwire-next\out"

# Delete all files in target except .git
Get-ChildItem -Path $targetDir -Force | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force

# Copy out contents to target
Copy-Item -Path "$sourceDir\*" -Destination $targetDir -Recurse -Force

# Git operations
git --git-dir="$targetDir\.git" --work-tree="$targetDir" add .
git --git-dir="$targetDir\.git" --work-tree="$targetDir" commit -m "Deploy epic Next.js 3D update"
git --git-dir="$targetDir\.git" --work-tree="$targetDir" push origin main
