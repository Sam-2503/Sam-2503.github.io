import re
import glob

replacements = {
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'clip-rule': 'clipRule',
    'fill-rule': 'fillRule',
    'stroke-miterlimit': 'strokeMiterlimit',
    'clip-path': 'clipPath'
}

for filepath in glob.glob('app/components/*.js'):
    with open(filepath, 'r') as f:
        content = f.read()

    for kebab, camel in replacements.items():
        content = re.sub(rf'{kebab}="', f'{camel}="', content)

    with open(filepath, 'w') as f:
        f.write(content)

print("SVG attributes fixed.")
