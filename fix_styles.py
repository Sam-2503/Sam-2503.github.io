import re
import glob

for filepath in glob.glob('app/components/*.js'):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find all <style>...</style> blocks and replace with dangerouslySetInnerHTML
    def style_replacer(match):
        css_content = match.group(1)
        # Using json to escape the string properly or just template literals
        # Using dangerouslySetInnerHTML is safer
        # We need to escape backticks and ${}
        css_content = css_content.replace('`', '\\`').replace('${', '\\${')
        return f'<style dangerouslySetInnerHTML={{{{ __html: `{css_content}` }}}} />'

    content = re.sub(r'<style>(.*?)</style>', style_replacer, content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(content)

print("Styles fixed.")
