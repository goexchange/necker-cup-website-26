import os
import glob

image_extensions = ('.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif')
search_dirs = ['public/images', 'public/sponsors', 'src/app/logos', 'src/assets']
files = []
total_size = 0

# Also search root of public for any images
search_dirs.append('public')

for d in search_dirs:
    full_dir = os.path.join('/vercel/share/v0-project', d)
    if not os.path.exists(full_dir):
        continue
    for entry in os.listdir(full_dir):
        full_path = os.path.join(full_dir, entry)
        if os.path.isfile(full_path) and entry.lower().endswith(image_extensions):
            size = os.path.getsize(full_path)
            files.append((f"{d}/{entry}", size))
            total_size += size

# Also do a recursive glob for any images we might have missed
for ext in image_extensions:
    for match in glob.glob(f'/vercel/share/v0-project/**/*{ext}', recursive=True):
        rel = os.path.relpath(match, '/vercel/share/v0-project')
        size = os.path.getsize(match)
        if not any(f[0] == rel for f in files):
            files.append((rel, size))
            total_size += size

files.sort(key=lambda x: x[1], reverse=True)

print("=== Image File Sizes (sorted largest first) ===\n")
for path, size in files:
    kb = size / 1024
    if size > 1024 * 1024:
        display = f"{size / (1024*1024):.2f} MB"
    else:
        display = f"{kb:.0f} KB"
    print(f"{display:>10}  {path}")

print(f"\n=== Total: {total_size / (1024*1024):.2f} MB across {len(files)} files ===")
if files:
    print(f"=== Average: {total_size / len(files) / 1024:.0f} KB per file ===")
