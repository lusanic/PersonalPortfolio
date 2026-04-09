GAMES["monostrophe"] = {
      // ── Card info (shown on the games grid) ───────────────────
  id:          "monostrophe",
  title:       "Monostrophe",
  genre:       "3D Adventure",
  tagline:     "A 3D adventure where you discover what it means to be alive in the form of a body, a soul, and a mind.",
  coverImage:  "images/games/monostrophe/header.png",
  bannerImage: "images/games/monostrophe/header.png",  // wider image shown on the detail page header
  trailerUrl:  "https://www.youtube.com/watch?v=MOU8szNVkeQ",
  year:        "2022-2023",
  tools:       ["Unity3D", "C#", "FMOD Studio", "Cinemachine"],
  role:        ["Game Designer", "Narrative Designer", "Developer"],
  modes:       ["Singleplayer"],        // displayed only on the detail page
  team:         "5",
  shortDesc:   "A 3D adventure where you discover what it means to be alive in the form of a body, a soul, and a mind.",

  // ── Links shown on detail page ────────────────────────────
  links: [
    { label: "Play on itch.io", url: "https://lilyinthelu.itch.io/monostrophe", type: "primary" },
  ],

  sections: [

    {
        type: "overview",
    },
    
    {
      type:          "text",
      title:         "About",
      body: `Monostrophe is a 3D adventure where you experience the journey of a mysterious entity as its body, soul, and mind in 3 respective levels. Each level features a unique movement system, puzzle solving elements, and platforming sections. 

Monostrophe is my Thesis project at NYU Game Center for my MFA degree. In a team of 5, I started as the lead narrative designer and transitioned into the lead game designer/developer starting at the prototyping stage of the development. 
`,
    },

    {
      type:   "gallery",
      title:  "Gallery",
      images: [
        { src: "images/games/monostrophe/Screenshot 2026-04-02 213049.png",           caption: "Level of the Body - Intro" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 213300.png",           caption: "Level of the Body - You are a robot on a conveyor belt who is breaking free from the chain." },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 213316.png",           caption: "Level of the Body - QTE checks" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 213349.png",           caption: "Level of the Body - Freeing your soul" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 213536.png",           caption: "Level of the Body - Delivering the souls" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 213636.png",              caption: "Level of the Body - Entering the world of the Soul" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 213732.png",               caption: "Level of the Soul - Intro" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 213801.png",               caption: "Palace of the Soul" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 213835.png",           caption: "Palace of the Soul - Death run" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 213913.png",           caption: "Palace of the Soul - Maze run" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 214110.png",               caption: "Palace of the Soul - Puzzle" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 214945.png",               caption: "Palace of the Soul - Unlocking double jump" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 214345.png",             caption: "Palace of the Soul - Driving a Soul Protector" },
        { src: "images/games/monostrophe/Screenshot 2026-04-02 215443.png",             caption: "Palace of the Soul - Driving a Soul Protector" },

      ],
    },

    {
      type:  "text",
      title: "Responsibilities",
      subsections: [
        {
          title: "Features I Own",
          body: `- Core game loop and narrative structure
- All in-game puzzle design and implementation
- Character design, behaviors, and implementations`,
        },
        {
          title: "Implementations",
          body: `- Unity URP
- Custom C# scripting
- Cinemachine
- Version control (Github)`,
        },
        {
          title: "Narrative Design",
          body: `- World, backstory, character, and progression design.`,
        },
        {
          title: "Project Management",
          body: `- Led a team of 4 with 2 artists and 1 designer, on top of collaborating and communicating with music/SFX collaborators.
- Hosted daily and weekly meetings following a strict agile development process, allowing fast prototyping and iterations on all aspects of the game.
- Analyzed scope and budget. Prepared the pitch deck and pitched to publishers.
- Used Jira for assigning, tracking, and managing tasks and progress.
`,
        },
      ],
    },

        {
      type:  "text",
      title: "Process",
      subsections: [
        {
          title: "Early Stage",
          body:  `The project started with the artists’ fascination with large-scale mechanic worlds and robotic characters. They prototyped a couple complex spaces to experiment with the aesthetic they wished to create for the thesis project, but were lost with mechanics and narrative.
          ![Initial Prototype - Abstract mechanical world](images/games/monostrophe/prot1.gif)
          Joining the team first to help with narrative development, I suggested the core theme of “free will”, inspired by the looping world design featuring a conveyor belt of robots the artists had created. 
          ![Prototype Level - Mechanical looping world](images/games/monostrophe/prot2.gif)
          From there, the idea expanded to discuss what “life” really means–or consists of. I then break down the narrative structure into the three components that I find the most important yet also fascinating about human beings: the <b>Body</b>, the <b>Soul</b> (or Nature), and the <b>Mind</b>.`,
        },
        {
          title: "Mechanic Design - QTE",
          body:  `While it wasn’t necessarily the most conventional approach in starting a game, I took the artistic preference of our artists as a constraint, pushing myself to design and develop the kind of narrative and mechanics that could work in unison to reflect the discussion around free will through the grand mechanical world. 
          
          Inspired by the conveyor belt design in the image shown above, I designed the first mechanic in Level 1 to reflect <b>”An empty shell breaking free”</b>. With our player being the sole true free will in the game and donning one of the many robots on the conveyor belt, I experimented with various QTE-based mechanics to test which one could best deliver the meaning behind the action. Looking at the keyboard layout and reflecting on player habits, I eventually landed on a design that prompted players to press the 8 letter keys “Q, W, E, D, C, X, Z, A” around the “S” key in a number of variations. The intention behind the mechanic and world structure then, is a world that has been waiting for the one with free will to be awakened, and subsequently released from the never ending loop.
          `,
          videoSrc: "images/games/monostrophe/BodyMechanic.mp4",
        },
        {
          title: "Mechanic Design - Platformer",
          body: `The second level, which is the Level of the Soul, is much more complex and mechanic heavy. Along with the other developer, we developed a “Wall-walking mechanic” to suit the environment of a giant ring where the player moves about on the inside. We successfully allowed a smooth transition of gravity, 3D model rotation, and camera transition.
          ![Prototype Level - Mechanical looping world](images/games/monostrophe/WallWalk.gif)
          Narratively, as the Soul itself does not have a physical body, the entire level is split into 4 sections, each granting the Soul with <b>new abilities</b> upon completion, which is further enhanced when the Soul combines itself with robots with higher complexity throughout the level.
          ![Prototype Level - Mechanical looping world](images/games/monostrophe/Level2.jpg)
          ![Double Jump Robot](images/games/monostrophe/Robot1.png)
          ![Dashing Robot](images/games/monostrophe/Robot2.png)
          ![Flying Robot](images/games/monostrophe/Robot3.png)
          Players are able to receive: double jump, dash, and flying as the result of finishing the first three sections respectively. I worked closely with the artists to design the characters, and level design to fit the newly unlocked mechanic of each level. Each robot has a core central part where the Soul inhabits to “drive” them. Section obstacles are designed and tuned to effectively make use of the new ability the player has just obtained.
          `,
          videoSrc: "images/games/monostrophe/RobotMove.mp4"
        },
      ],
    },

        {
  type:  "events",
  title: "Events & Accolades",
  items: [
    { name: "NYU Game Center Spring Showcase",  date: "2023" },

  ]
},

    {
      type:   "gallery",
      title:  "Showcase Gallery",
      images: [
        { src: "images/games/monostrophe/kotaku.jpg",           caption: "Kotaku Interview" },
        { src: "images/games/monostrophe/bfoddy.jpg",           caption: "Bennett Foddy, creator of Getting Over It With Bennett Foddy, playing Monostrophe" },
      ],
    },


    {
      type:  "credits",
      title: "Credits",
      items: [
        { role: "Design",           name: "Luke Li" },
        { role: "Code",             name: "Luke Li, Cindy Fan" },
        { role: "Art",              name: "Evie Wang, Yuanfan Yang" },
        { role: "Level Design",     name: "Luke Li, Yuanfan Yang" },
        { role: "Character Design", name: "Evie Wang, Luke Li" },
        { role: "Animator",         name: "Evie Wang, Tovi Wan" },
        { role: "Producer",         name: "Luke Li, Cindy Fan" },
        { role: "UI/UX",            name: "Evie Wang, Tovi Wan" },
        { role: "SFX",              name: "Zach Jones" },
        { role: "Music",            name: "Yichen Cai" },

      ],
    },
    
  ]
}