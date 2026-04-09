# Luke Li — Portfolio
## File Structure

```
portfolio/
├── index.html            ← The site shell (CSS, layout, routing) — rarely need to touch
├── data.js               ← Personal info, writings, music, game order
├── README.md             ← This file
│
├── games/
│   ├── echoes-of-the-hollow.js     ← Full game page content
│   ├── underveil.js
│   ├── still-the-light-comes.js
│   └── the-tenant-below.js
│
└── images/
    ├── games/            ← Cover images, screenshots, GIFs, process photos
    │   ├── echoes-cover.jpg
    │   ├── echoes-process.jpg
    │   └── ...
    └── music/            ← Audio files (mp3, ogg)
        └── ...
```

---

## Editing Content

### Personal info, bio, writings, music → `data.js`
Open `data.js` in any text editor, edit, save, refresh.

### A game's page content → `games/<game-id>.js`
Each game has its own file. Open it and edit the `sections` array.
You never need to touch `index.html`.

---

## Game Page Sections

Each game file has a `sections` array. You can add, remove, or reorder sections freely.
Four section types are available:

### 1. `overview` (always include first — pulls card info automatically)
```js
{ type: "overview" }
```

### 2. `text` — heading + paragraphs
```js
{
  type:  "text",
  title: "Background",
  body:  "First paragraph.\n\nSecond paragraph.\n\nThird paragraph.",
}
```
Use `\n\n` to separate paragraphs.

### 3. `image-text` — image beside text (great for process shots)
```js
{
  type:          "image-text",
  title:         "Design Process",
  imagePosition: "right",   // "left" or "right"
  image:         "images/games/my-game-process.jpg",
  caption:       "Optional caption under the image",
  body:          "Your text here.\n\nMore text.",
}
```

### 4. `gallery` — grid of screenshots and GIFs
```js
{
  type:   "gallery",
  title:  "Screenshots",
  images: [
    { src: "images/games/my-game-screen1.gif", caption: "Opening scene" },
    { src: "images/games/my-game-screen2.jpg", caption: "Puzzle UI" },
  ],
}
```
If `images` is empty, a placeholder is shown automatically.

### 5. `credits` — team list
```js
{
  type:  "credits",
  title: "Credits",
  items: [
    { role: "Design, Code, Writing", name: "Luke Li" },
    { role: "Music",                 name: "Luke Li" },
  ],
}
```

---

## Adding a New Game

1. Create `games/my-new-game.js` — copy an existing game file as a template
2. Change the id, title, and all fields
3. Add `"my-new-game"` to the `gameIds` array in `data.js`
4. Add this line to `index.html` (near the bottom, before the main `<script>`):
   ```html
   <script src="games/my-new-game.js"></script>
   ```

---

## Adding Images & GIFs

Put files in `images/games/`, reference them in your game's `.js` file:
```js
coverImage: "images/games/my-game-cover.jpg",   // card + detail hero (16:9 ideal)
image:      "images/games/my-game-process.jpg",  // image-text sections (4:3 ideal)
screenshots: [
  { src: "images/games/my-game-screen1.gif", caption: "..." },
]
```

---

## Hosting (Free)

**GitHub Pages** (recommended):
1. Push all files to a GitHub repo
2. Settings → Pages → Source: main branch
3. Live at `yourusername.github.io/portfolio`

**Netlify**: Drag the folder to netlify.com/drop — done instantly.

**Local**: Open `index.html` in a browser.
Note: external `.js` files won't load via `file://` in some browsers.
Use VS Code's "Live Server" extension, or run: `python3 -m http.server 8080`

---

## Colours (CSS variables in `index.html`)
```css
--red:  #b02a1e;   /* main accent */
--reds: #d44030;   /* hover state */
--bg:   #0d0c0a;   /* background */
--text: #e4ddd2;   /* body text */
--grn:  #6a9e82;   /* music/writing labels */
```
