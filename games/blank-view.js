GAMES["blank-view"] = {
      // ── Card info (shown on the games grid) ───────────────────
  id:          "blank-view",
  title:       "Blank View",
  genre:       "Visual Novel",
  tagline:     "A visual novel about a photographer who shut himself away from the rest of the world. ",
  coverImage:  "images/games/blank-view/drYIFw.png",
  bannerImage: "images/games/blank-view/banner.png",  // wider image shown on the detail page header
  trailerUrl:  "https://youtu.be/l3pH0asL3yo",
  year:        "2019-2020",
  tools:       ["Twine", "Logic Pro X"],
  role:        ["Game Designer", "Narrative Designer", "Sound Designer"],
  modes:       ["Singleplayer"],        // displayed only on the detail page
  team:         "4",
  shortDesc:   "A visual novel about a photographer who cut himself off from the rest of the world.",

  // ── Links shown on detail page ────────────────────────────
  links: [
    { label: "Play on itch.io", url: "https://jnj.itch.io/blank-view", type: "primary" },
  ],

  sections: [

    {
        type: "overview",
    },
    
    {
      type:          "text",
      title:         "About",
      body: `Blank View is the Capstone project I created in a team of 4 for my Bachelor’s degree in Computer Game Science at University of California, Irvine. Inspired by movies like Memento, Blank View is a psychological thriller visual novel featuring a photographer protagonist who has chosen to imprison himself in his own home for undisclosed reasons. 

The game features branching narrative and an interactive environment depicted from actual photographs of a domestic interior home. My responsibility for this 20-week long capstone project includes the lead designer, lead writer, and sound engineer. I designed the branching narrative, wrote the complete script, created original background music, and designed interactive elements/puzzles based on the story.
`,
    },

    {
      type:   "gallery",
      title:  "Gallery",
      images: [
        { src: "images/games/blank-view/Screenshot 2026-04-06 185300.png",                   caption: "Front door in the protagonist's apartment" },
        { src: "images/games/blank-view/Screenshot 2026-04-06 190937.png",                  caption: "Kitchen in the protagonist's apartment" },
        { src: "images/games/blank-view/Screenshot 2026-04-06 203008.png",                  caption: "The Dark Room" },
        { src: "images/games/blank-view/Screenshot 2026-04-07 134805.png",                  caption: "The Livingroom" },
        { src: "images/games/blank-view/Screenshot 2026-04-07 134652.png",                  caption: "The Computer" },
        { src: "images/games/blank-view/Screenshot 2026-04-07 134830.png",                  caption: "" },
      ],
    },

    {
      type:  "text",
      title: "Responsibilities",
      subsections: [
        {
          title: "Narrative Design",
          body: `- Backstory, character, branching narrative design
- All writings
- Two endings, one moving time forward and the other backward`,
        },
        {
          title: "Implementations",
          body: `- Twine`,
        },
        {
          title: "Game Design",
          body: `- Designed all interactables based on the story.
          - Guided the overall game's aesthetics`,
        },

        {
          title: "Sound Design",
          body: `- Produced original background music using Logic Pro X`,
        },
      ],
    },


        {
      type:  "text",
      title: "Process",
      subsections: [
        {
          title: "The Origin",
          body:  `The story of how this game came to be is pretty simple: I wanted to create a thriller for my CGS Capstone. I’ve always been a huge fan of thriller and mystery movies, so the game is heavily influenced by Christopher Nolan’s films and some of the mystery webtoons I read. When my team and I first met, I immediately pitched the idea of doing a thriller or horror project. As we brainstormed mechanics, the "choose-your-own-adventure" style stood out because I wanted the core focus to be on telling a compelling story.
          `,
        },
        {
          title: "Flipping the Narrative Structure",
          body:  `As a designer, I like to explore the "hidden" areas of a genre that you don't usually see on the market. Instead of the typical "one beginning, multiple endings" structure, I went with “one ending, multiple beginnings.” The concept is intuitive: every storyline leads to the exact same conclusion. The real journey for the player is discovering how they ended up there. I felt that traditional text-based adventures can sometimes feel restrictive, so I decided to give players more control over the overall progression. The game features two major branching points; the first big choice determines whether the story moves forward or backward through time.

<b>The Forward Path</b>: This plays out like a classic adventure, moving from a set beginning toward various plot points.

<b>The Backward Path</b>: This follows my original vision—the player starts at the end and moves back in time to piece together how they reached that final moment.

[Sample Script](writings/blank-view-script.html)
`,
        },
        {
          title: "Production",
          body: `In the 20-week total production time, I spent around 12 weeks writing the complete script while continuously working with the team’s other developer to implement the story in Twine. I communicated with our artist regarding scene needs, who led the visual design of the scenes and took actual photographs of a domestic interior as the foundation of the art. Based on my vision and story, I also compiled the list of sounds needed, made over 10 looping background tracks in Logic Pro X, and worked with the developer to implement them into the final game.`,
        },
        {
          title: "Music",
          body: `Below are three example atmospheric background music I created in Logic Pro X for this project. Most are created using Stock Plug In instruments.

          @[Ending Theme](music/blank-view/M5B.1.mp3)
@[Ending Theme 2](music/blank-view/M5F.2.mp3)
@[Blur](music/blank-view/M2.6.mp3)`
        }
      ],
    },


    {
      type:  "credits",
      title: "Credits",
      items: [
        { role: "Design",           name: "Luke Li" },
        { role: "Code",             name: "Randy Grover" },
        { role: "Art",              name: "Daniel Tagumasi-Capper" },
        { role: "Story/Writing",            name: "Luke Li"},
        { role: "Producer",         name: "Joseph Waterbury" },
        { role: "Music/SFX",        name: "Luke Li" },

      ],
    },
    
  ]
}