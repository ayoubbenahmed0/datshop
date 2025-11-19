# Dat Shop – ARK Mobile Marketplace

A revamped multi-page storefront for Dat Shop, featuring a modern landing page, a live marketplace selector (`index2.htm`), and individual Dino and Premium stores. Everything is static (HTML/CSS/JS), so the project runs anywhere a browser can open the files.

## Highlights
- **Immersive landing page (`index.html`)** – hero, testimonials, FAQ, CTA strip, and Font Awesome icons.
- **Shop portal (`index2.htm`)** – replaces legacy frameset with a responsive portal that loads the Dino or Premium shop in a live iframe preview.
- **Dino shop (`shopdino.html`)** – right-to-left layout, audio previews, and add-to-cart hooks for dinosaur offers.
- **Premium shop (`premiumshop.html`)** – modern grid showcasing premium bundles, cosmetics, and a redesigned floating cart panel.
- **Shared cart logic (`script.js`)** – tracks items, totals, and smooth-scrolls the cart into view across both shop pages.
- **Updated styling (`style.css`, `index2.css`, `cart.css`)** – gradient-driven visuals, CSS variables, and responsive adjustments.

## Getting Started
1. **Download / clone** this folder to your machine.
2. **Open `index.html`** in any modern browser to view the public landing page.
3. **Navigate to other pages**:
   - `index2.htm` – shop portal with live preview.
   - `shopdino.html` – dinosaur catalog and audio previews.
   - `premiumshop.html` – premium bundles + cart.
4. For the best experience, keep all files (especially `/images`) in their current relative paths so background images and media load correctly.

## Customization
- Update copy, stats, or links directly in the corresponding HTML sections.
- Swap hero or section imagery by replacing assets under `images/`.
- Extend the cart logic in `script.js` if you need quantities, persistence, or server-side integration.

## External Dependencies
- [Google Fonts – Poppins & Space Grotesk](https://fonts.google.com/)
- [Font Awesome 5](https://fontawesome.com/)

## Notes
- No build tools are required; just open the HTML files.
- If you deploy to GitHub Pages, keep `index.html` at the root (GitHub serves it automatically).
- When adding new sections, stick to ASCII to match the existing file encoding as requested.

