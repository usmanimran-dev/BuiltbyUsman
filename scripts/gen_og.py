from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (8, 9, 12)  # matches site bg #08090c

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# --- Logo: load, trim transparent/near-black padding, recolor pure white ---
logo = Image.open("public/logo-master.png").convert("RGBA")
lw, lh = logo.size
px = logo.load()

# Make near-black background transparent, keep white glyph
out = Image.new("RGBA", (lw, lh), (0, 0, 0, 0))
opx = out.load()
for y in range(lh):
    for x in range(lw):
        r, g, b, a = px[x, y]
        brightness = (r + g + b) / 3
        if brightness > 60:  # glyph (white) pixels
            opx[x, y] = (255, 255, 255, 255)
        else:
            opx[x, y] = (0, 0, 0, 0)

# Crop to content bounding box
bbox = out.getbbox()
logo_cropped = out.crop(bbox)

# Resize logo to a clean size
logo_h = 168
ratio = logo_h / logo_cropped.height
logo_w = int(logo_cropped.width * ratio)
logo_resized = logo_cropped.resize((logo_w, logo_h), Image.LANCZOS)

logo_x = (W - logo_w) // 2
logo_y = 108
img.paste(logo_resized, (logo_x, logo_y), logo_resized)

# --- Fonts ---
name_font = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 66)
tagline_font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 26)
domain_font = ImageFont.truetype("C:/Windows/Fonts/segoeuisb.ttf" if False else "C:/Windows/Fonts/segoeuib.ttf", 24)

def draw_centered(text, font, y, fill):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    x = (W - tw) // 2
    draw.text((x, y), text, font=font, fill=fill)
    return y

# Name
name_y = logo_y + logo_h + 42
draw_centered("Usman Imran", name_font, name_y, (245, 245, 245))

# Tagline
tagline_y = name_y + 88
draw_centered("Full Stack Developer — Fintech, Logistics & AI Systems", tagline_font, tagline_y, (161, 161, 170))

# Domain (bottom, muted white — not red, not tiny)
domain_y = H - 78
draw_centered("builtbyusman.com", domain_font, domain_y, (250, 122, 58))

img.save("public/og-image.png")
print("Saved", img.size)
