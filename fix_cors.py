import re
import glob

for filepath in glob.glob('app/components/*.js'):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find all <img ... data-gl-img="true" ... > and ensure they have crossOrigin="anonymous"
    def img_replacer(match):
        img_tag = match.group(0)
        if 'crossOrigin' not in img_tag:
            img_tag = img_tag.replace('<img ', '<img crossOrigin="anonymous" ')
        return img_tag

    content = re.sub(r'<img[^>]*data-gl-img="true"[^>]*>', img_replacer, content)

    with open(filepath, 'w') as f:
        f.write(content)

print("CORS added.")
