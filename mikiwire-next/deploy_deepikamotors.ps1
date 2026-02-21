$targetDir = "C:\Users\hitesh\Desktop\projects\WebV1\deepikamotors"
$sourceDir = "C:\Users\hitesh\Desktop\projects\WebV1\deepikamotors\mikiwire-next\out"

# We don't want to delete everything in the target, since mikiwire-next lives there.
# We will just copy the out directory to the root, overwriting matching files.
Copy-Item -Path "$sourceDir\*" -Destination $targetDir -Recurse -Force

Set-Location $targetDir
git add .
git commit -m "Deploy apex code to root via Next.js static build"
git push origin main
