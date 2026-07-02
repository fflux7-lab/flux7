# FLUX7 — Clothing Store Website

A 3-file static website: `index.html`, `style.css`, `script.js`. No build tools, no dependencies — just open it in a browser.

## Files
- **index.html** — all the page content (header, hero, products, story, newsletter, footer)
- **style.css** — all colors, fonts, spacing, layout
- **script.js** — mobile menu, category filter, add-to-cart counter, newsletter form

---

## 1. What software to use to edit it

Download and install **Visual Studio Code** (free): https://code.visualstudio.com

Then:
1. Put all three files in one folder (e.g. `flux7-site`)
2. In VS Code: `File → Open Folder` → select `flux7-site`
3. Install the **"Live Server"** extension (search it in the Extensions panel, the icon that looks like 4 squares, on the left sidebar)
4. Right-click `index.html` → **"Open with Live Server"** — this opens the site in your browser and auto-refreshes every time you save a change

That's your whole workflow: edit a file → save (Ctrl/Cmd+S) → browser updates instantly.

---

## 2. How to edit common things

### Change text
Open `index.html` and search (Ctrl/Cmd+F) for the text you want to change, e.g. search for `Field Jacket` to find that product's block, then just retype it.

### Change colors
Open `style.css`, look at the very top — there's a `:root { }` block with all the colors named:
```css
--white:      #FFFFFF;
--off-white:  #F7F4EF;
--espresso:   #2B1B12;   /* main dark brown */
--saddle:     #6B4226;   /* accent brown, buttons */
--tan:        #C9A277;   /* light brown accent */
```
Change the hex code and the color updates everywhere on the site automatically.

### Change prices / product names
In `index.html`, each product is one `<article class="product-card ...">` block. Edit the `<h3>` (name), the `.mono` line (fabric/code), and the `.price` span (price).

### Add a new product
Copy one whole `<article class="product-card swatch-X" data-category="...">...</article>` block, paste it below the last one, and edit its text. Change `swatch-X` to `swatch-1` through `swatch-8` (or add a new color in `style.css` under `/* PRODUCT GRID */` if you want a unique color for it) and set `data-category` to `outerwear`, `essentials`, `bottoms`, or `accessories`.

### Replace the placeholder color blocks with real photos
Right now product images are CSS color gradients (no photos included). To use real photos:
1. Create an `images` folder next to your files
2. Put your photos in it (e.g. `images/jacket.jpg`)
3. Inside a product's `.card-visual` div, add: `<img src="images/jacket.jpg" alt="Field Jacket">`
4. In `style.css`, add this so the photo fills the space:
```css
.card-visual img { width: 100%; height: 100%; object-fit: cover; }
```

### Change the logo text
Search `style.css` and `index.html` for `FLUX<span>7</span>` — that's the logo. Edit the letters directly.

### Make the newsletter form actually collect emails
Right now the sign-up form is front-end only — it doesn't send emails anywhere. To make it work, sign up for a free form service like **Formspree** (https://formspree.io) and follow their instructions to add an `action` attribute to the `<form id="newsletterForm">` tag in `index.html`.

---

## 3. How to put it live on GitHub (GitHub Pages — free hosting)

1. Go to https://github.com and create a free account if you don't have one
2. Click the **+** icon top-right → **New repository**
3. Name it something like `flux7-store`, set it to **Public**, click **Create repository**
4. On the new repo page, click **"uploading an existing file"**
5. Drag in `index.html`, `style.css`, and `script.js` (and your `images` folder if you added one)
6. Scroll down, click **Commit changes**
7. Go to the repo's **Settings** tab → **Pages** (left sidebar)
8. Under "Build and deployment" → **Source**, choose **Deploy from a branch**
9. Under **Branch**, choose `main` and folder `/ (root)`, click **Save**
10. Wait about a minute, then refresh the page — you'll see a green box with your live URL, something like:
    `https://yourusername.github.io/flux7-store/`

That URL is your live website. Every time you edit a file on GitHub (or push new changes), the site updates automatically within a minute or two.

### Editing directly on GitHub (no VS Code needed)
Once uploaded, you can also click any file in your GitHub repo → the pencil (✏️) icon → edit in the browser → **Commit changes**. Good for small text/price tweaks from anywhere.

---

## 4. Quick reference — where things live

| Want to change...          | Edit this file | Look for... |
|---|---|---|
| Any wording on the page    | `index.html`   | the text itself (Ctrl/Cmd+F) |
| Colors                     | `style.css`    | `:root { }` at the top |
| Fonts                      | `style.css`    | `--font-display`, `--font-body`, `--font-mono` |
| Product prices/names       | `index.html`   | `<article class="product-card">` blocks |
| Cart / filter / form logic | `script.js`    | comments at the top of each section |
| Site title (browser tab)   | `index.html`   | `<title>` tag near the top |
