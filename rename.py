import os

target_dirs = ["frontend/src", "frontend/public", "dashboard/src", "dashboard/public", "backend", "."]
file_extensions = [".js", ".jsx", ".html", ".md", ".json"]
exclude_dirs = ["node_modules", ".git", "build"]

replacements = {
    "Profit-Profile": "Finora",
    "ProfitProfile": "Finora",
    "Profit Profile": "Finora",
    "profit-profile": "finora",
    "profitprofile": "finora"
}

for d in target_dirs:
    if d == ".":
        files_to_check = [f for f in os.listdir(".") if os.path.isfile(f)]
        roots = [(".", [], files_to_check)]
    else:
        roots = os.walk(d)
        
    for root, dirs, files in roots:
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for file in files:
            if any(file.endswith(ext) for ext in file_extensions):
                filepath = os.path.join(root, file)
                
                # try utf-8 first
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        content = f.read()
                    encoding = "utf-8"
                except UnicodeDecodeError:
                    try:
                        with open(filepath, "r", encoding="utf-16le") as f:
                            content = f.read()
                        encoding = "utf-16le"
                    except Exception:
                        continue
                except Exception:
                    continue
                
                new_content = content
                for old, new in replacements.items():
                    new_content = new_content.replace(old, new)
                
                if new_content != content:
                    with open(filepath, "w", encoding=encoding) as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")
