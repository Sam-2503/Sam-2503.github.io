import re

def html_to_jsx(html):
    # Basic replacements
    html = html.replace('class="', 'className="')
    html = html.replace('for="', 'htmlFor="')
    html = html.replace('srcset="', 'srcSet="')
    html = html.replace('sizes="', 'sizes="')
    html = html.replace('tabindex="', 'tabIndex="')
    html = html.replace('autocomplete="', 'autoComplete="')
    html = html.replace('readonly="', 'readOnly="')
    html = html.replace('maxlength="', 'maxLength="')
    html = html.replace('autofocus="', 'autoFocus="')
    html = html.replace('playsinline', 'playsInline')
    html = html.replace('playsInline="', 'playsInline="')
    html = html.replace('crossorigin="', 'crossOrigin="')
    
    # SVG attributes (camelCase)
    svg_attrs = ['viewBox', 'fillRule', 'clipRule', 'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'strokeDasharray', 'strokeDashoffset']
    for attr in svg_attrs:
        html = html.replace(attr.lower() + '="', attr + '="')
        
    # Self-closing tags
    def close_tag(match):
        tag = match.group(0)
        if not tag.endswith('/>'):
            tag = tag[:-1] + ' />'
        return tag
        
    html = re.sub(r'<(img|br|hr|input|meta|link)[^>]*>', close_tag, html)
    
    # Comments
    html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html, flags=re.DOTALL)
    
    # Handle style attributes - simplistic approach, replace with inline style object or remove
    # Since Webflow rarely uses complex inline styles, we'll try to convert them.
    # Actually, let's just leave inline styles as is and let the user fix if there are any, 
    # or just convert simple ones like style="display: none;" -> style={{display: "none"}}
    def style_replacer(match):
        style_str = match.group(1)
        styles = {}
        for rule in style_str.split(';'):
            if ':' in rule:
                key, val = rule.split(':', 1)
                key = key.strip()
                # to camelCase
                parts = key.split('-')
                key = parts[0] + ''.join(p.title() for p in parts[1:])
                val = val.strip()
                styles[key] = val
        
        style_obj_str = ", ".join(f"'{k}': '{v}'" for k,v in styles.items())
        return f"style={{{{ {style_obj_str} }}}}"
        
    html = re.sub(r'style="([^"]*)"', style_replacer, html)
    
    return html

with open('app/body_content.html', 'r') as f:
    content = f.read()

jsx = html_to_jsx(content)

with open('app/body_content.jsx_tmp', 'w') as f:
    f.write(jsx)

