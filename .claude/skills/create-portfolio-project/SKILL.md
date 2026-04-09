---
name: create-portfolio-project
description: Creates a new game project entry for the portfolio site.
---

# create-portfolio-project

Creates a new game project entry for the portfolio site.

## What it does

1. Creates `games/<id>.js` with the full game data structure
2. Creates `games/<id>.html` as the detail page
3. Adds the game id to the correct category in `data.js`
4. Adds a `<script src="games/<id>.js">` tag in `index.html`
5. Creates `images/<id>` folder which will be storing all project related images

## Usage

```
/create-portfolio-project
```

Claude will ask for:
- Game ID (kebab-case, e.g. `my-game`)
- Title
- Category (`professional`, `personal`, or `non-digital`)
- Genre, year, team size, roles, tools (optional — can be filled in later)

## File templates

### games/<id>.js
```js
GAMES["<id>"] = {
  id:          "<id>",
  title:       "<Title>",
  genre:       "",
  tagline:     "",
  coverImage:  "images/games/<id>/cover.png",
  bannerImage: "images/games/<id>/banner.png",
  trailerUrl:  "",
  year:        "",
  tools:       [],
  role:        [],
  modes:       [],
  team:        "",
  shortDesc:   "",

  links: [],

  sections: [
    { type: "overview" },

    {
      type:          "text",
      title:         "About",
      body: ``,
    },

    {
      type:   "gallery",
      title:  "Gallery",
      images: [
        { src: "",caption: "" },
      ],
    },

    {
      type:  "text",
      title: "Responsibilities",
      subsections: [
        {
          title: "",
          body: ``,
        },
      ],
    },
      {
      type:  "credits",
      title: "Credits",
      items: [
        { role: "Design",           name: "" },
        { role: "Art",              name: "" },
      ],
    },
  ]
}
```

### games/<id>.html
Copied from the standard game detail page template with `GAME_ID` set to `"<id>"`.

## Notes
- The game id must be unique and match across all three files
- Images should go in `images/games/<id>/`
- After creating, fill in `coverImage` and `bannerImage` paths once assets are ready
