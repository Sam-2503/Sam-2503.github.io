import re
import os
import urllib.request
import urllib.parse
from urllib.error import HTTPError
import glob

os.makedirs('public/static', exist_ok=True)

url_pattern = re.compile(r'(https://cdn\.prod\.website-files\.com/[^\s"\'>]+)')

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    urls = url_pattern.findall(content)
    
    for url in urls:
        # Get filename
        filename = url.split('/')[-1]
        filename = urllib.parse.unquote(filename)
        
        # Replace spaces or weird chars to make it clean
        clean_filename = re.sub(r'[^a-zA-Z0-9_\-\.]', '_', filename)
        
        local_path = f'public/static/{clean_filename}'
        
        if not os.path.exists(local_path):
            try:
                # Add headers to avoid 403 Forbidden
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
                    out_file.write(response.read())
            except Exception as e:
                print(f"Failed to download {url}: {e}")
                continue
                
        # Replace in content
        content = content.replace(url, f'/static/{clean_filename}')

    with open(filepath, 'w') as f:
        f.write(content)

for filepath in glob.glob('app/components/*.js'):
    process_file(filepath)

process_file('app/layout.js')

print("Media downloaded and links updated.")
