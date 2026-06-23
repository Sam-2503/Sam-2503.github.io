import re
import glob

for filepath in glob.glob('app/components/*.js'):
    with open(filepath, 'r') as f:
        content = f.read()

    # Fix autoplay="autoplay" or autoplay=""
    content = re.sub(r'autoplay(="[^"]*")?', 'autoPlay', content)
    # Fix loop="" -> loop
    content = re.sub(r'loop(="[^"]*")?', 'loop', content)
    # Fix muted="" -> muted
    content = re.sub(r'muted(="[^"]*")?', 'muted', content)
    # Fix webkit-playsInline="" -> webkit-playsinline="true" OR just remove it since playsInline handles it in React
    content = re.sub(r'webkit-playsInline(="[^"]*")?', '', content)
    content = re.sub(r'webkit-playsinline(="[^"]*")?', '', content)
    # Fix playsinline="" -> playsInline
    content = re.sub(r'playsinline(="[^"]*")?', 'playsInline', content)
    # Fix vector-effect="" -> vectorEffect=""
    content = re.sub(r'vector-effect=', 'vectorEffect=', content)

    with open(filepath, 'w') as f:
        f.write(content)

print("Video props fixed.")
