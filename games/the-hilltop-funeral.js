// ================================================================
//  games/the-hilltop-funeral.js
//
//  SECTION TYPES:
//
//  { type: "overview" }
//    → Auto-generated from card info above. Keep this first.
//
//  { type: "text", title: "...", body: "...", subsections: [...] }
//    → body and subsection bodies support Markdown:
//        **bold**  *italic*
//        - bullet list item
//        ![Caption text](images/path/to/image.png)   ← image + caption
//
//  { type: "image-text", title: "...", body: "...", image: "path",
//    caption: "...", imagePosition: "left" | "right" }
//
//  { type: "gallery", title: "...", images: [ { src: "...", caption: "..." } ] }
//
//  { type: "credits", title: "...", items: [ { role: "...", name: "..." } ] }
//
// ================================================================

GAMES["the-hilltop-funeral"] = {

  // ── Card info (shown on the games grid) ───────────────────
  id:          "the-hilltop-funeral",
  title:       "The Hilltop Funeral",
  genre:       "2-Player Physics Co-op",
  tagline:     "A 2-player co-op where you transport a coffin with your friend through a dangerous mountain.",
  coverImage:  "images/games/the-hilltop-funeral/the-hilltop-funeral-cover.png",
  bannerImage: "images/games/the-hilltop-funeral/thf-header.png",
  trailerUrl:  "https://www.youtube.com/watch?v=ZoVOGycCqyU",
  year:        "2025",
  tools:       ["Unity3D", "C#", "FMOD Studio", "Yarn Spinner", "Cinemachine"],
  role:        ["Game Designer", "Developer", "Level Designer", "Writer"],
  modes:       ["Singleplayer", "Local Co-Op", "Online Co-Op"],
  team:        "8",
  publisher:   "Wise Games",
  shortDesc:   "2 player co-op where you carry a corpse inside a coffin with your friend.",

  // ── Links shown on detail page ────────────────────────────
  links: [
    { label: "Play on Steam", url: "https://store.steampowered.com/app/3553350/The_Hilltop_Funeral/", type: "primary" },
  ],

  // ── Page sections ─────────────────────────────────────────
  sections: [

    { type: "overview" },

    {
      type:          "image-text",
      title:         "About",
      imagePosition: "right",
      image:         "images/games/the-hilltop-funeral/groupphoto.png",
      caption:       "Cemetery boy band",
      imageWidth:    "40%",
      imageAspect:   "4/3",
      body: `The Hilltop Funeral was originally conceived in 2021 as a game jam concept built on two core pillars: Dark Humor and Physics-Based Co-op. In early 2025, the team at BROKENCIGS officially moved the title into full production. Our agile development process allowed us to launch a Steam Demo within just three months, followed by an Early Access release only five months later.

As the lead designer and developer in a team of eight, I'm responsible for the architecture and implementation of all core systems. I work closely with our environment artist to build a bizarre, lore-heavy world through challenging level design, while collaborating with the art director to bake dark humor directly into the narrative via a custom-made dialogue system.`,
    },

    {
      type:   "gallery",
      title:  "Gallery: Features",
      images: [
        { src: "images/games/the-hilltop-funeral/Moving.gif",       caption: "Two-player movement" },
        { src: "images/games/the-hilltop-funeral/Lifting.gif",       caption: "Lifting the coffin" },
        { src: "images/games/the-hilltop-funeral/repair.gif",        caption: "Collectible and repair" },
        { src: "images/games/the-hilltop-funeral/dialogue.gif",      caption: "Dynamic dialogues" },
        { src: "images/games/the-hilltop-funeral/eval.gif",          caption: "Level end evaluation" },
        { src: "images/games/the-hilltop-funeral/screenshot-18.png", caption: "Wikipedia" },
        { src: "images/games/the-hilltop-funeral/screenshot-21.png", caption: "Environment" },
      ],
    },

    {
      type:  "gameloop",
      title: "Game Loop",
      steps: [
        { id:"start",   label:"Level Entrance", desc:"Start at level entrance",            pos:{col:0, row:0} },
        { id:"carry",   label:"Carry Coffin",   desc:"Move through the level",             pos:{col:1, row:0} },
        { id:"fail",    label:"Fail State",     desc:"Drop or fall/trap",                 pos:{col:2, row:0} },
        { id:"drop",    label:"Drop",           desc:"Corpse dropped",                     pos:{col:3, row:0} },
        { id:"fall",    label:"Fall / Trap",    desc:"Fell off or killed by trap",         pos:{col:3, row:1} },
        { id:"respawn", label:"Respawn",        desc:"Respawn at last checkpoint",         pos:{col:4, row:0} },
        { id:"repair",  label:"Repair",         desc:"Repair corpse & coffin (optional)",  pos:{col:4, row:1} },
        { id:"end",     label:"Reach End",      desc:"Reach the level endpoint",           pos:{col:5, row:0} },
      ],
      edges: [
        { from:"start",   to:"carry" },
        { from:"carry",   to:"fail" },
        { from:"fail",    to:"drop",    label:"Drop" },
        { from:"fail",    to:"fall",    label:"Fall/Trap" },
        { from:"drop",    to:"respawn" },
        { from:"fall",    to:"respawn" },
        { from:"respawn", to:"repair",  label:"Optional" },
        { from:"respawn", to:"carry",   loop:true, label:"Skip repair", loopOffset:-38 },
        { from:"repair",  to:"carry",   loop:true, label:"Resume",      loopOffset:-72 },
        { from:"carry",   to:"end" },
      ],
    },

    {
      type:  "text",
      title: "Responsibilities",
      subsections: [
        {
          title: "Features I Own",
          body: `- Core game loop and game feel
- Physics infrastructure, core mechanic, and control
- Player state machine with 8 states and state transitions
- 3 game modes: singleplayer, local co-op, online co-op
- Control support on keyboard and gamepad, for all 3 game modes
- Obstacles, collectibles, damage system and repair system on the coffin and corpse
- A timer system and level rating based on time criterias
- UI design, implementation, and animation transitions
- Camera behaviors and transitions
- Custom comic book style text bubble dialogue system
- Worldbuilding, character development, and in-game dialogues
- Wikipedia in menu for both feature reminders and more worldbuilding
- Environment lighting and optimization
- Audio system and logic
- Chinese localization for UI and story`,
        },
        {
          title: "Implementations",
          body: `- Custom scripting in C# using inheritance, scriptable objects, and an event driven architecture
- Networking (Mirror)
- Dialogue System (Yarn Spinner)
- Camera (Cinemachine)
- Audio (FMOD Studio)
- Lighting & Optimization (URP)
- Version control (Github)`,
        },
        {
          title: "Level Design",
          body: `- Worked with artists and level designers to craft a bizarre world taking inspiration from Tim Burton's movies.
- Balanced player experience and learning curve by removing unnecessary sections in multiple levels.
- Adopted a multi-route design with hidden paths for all existing levels to allow higher replayability and speed runs.
- Optimized level performance and visibility by removing redundant art assets.
- Cleaned up environment layouts for better guidance and directionality.
- Positioned collectibles, obstacles, and respawn points for a carefully crafted level pacing.`,
        },
        {
          title: "Project Management",
          body: `- Oversaw a cross-functional team of 8 with designers, developers, artists, writers, and localization.
- Bridging communication across talents from 3 different studios to collectively achieve a highly efficient workflow with effective results.
- Hosted daily and weekly meetings following a strict agile development process, allowing fast prototyping and iterations on all aspects of the game.
- Used Miro for moodboard and brainstorming in the early stage of the game.
- Used project management software like Lark during production to assign, review, and manage tasks.
- Responsible for publisher communications and actively worked with the publishing manager on scheduling, updates, events, and social media.`,
        },
      ],
    },

    {
      type:  "text",
      title: "Process: Mechanics & Physics",
      subsections: [
        {
          title: "Goal",
          body:  `A robust physics simulation that allows both players' controls to influence the overall physics behavior of the group while leaving room for maneuvering the ragdoll corpse.`,
        },
        {
          title: "Before",
          body: `Multiple prototypes on the player group infrastructure aimed to achieve the effect. One example is moving the single transform with both players and the coffin as children — one player controls the entire group's movement, the other controls the tilting of the coffin. The ragdoll corpse is the only one that responds to physics.

**Problem**: Unrealistic. With the three components mapped as dull children under the moving transform, it is very obvious that the simulation is not physics based, and the individual components do not respond to slopes.

![Early Prototype: Moving the parent with individual components as dull decorations.](images/games/the-hilltop-funeral/movept.gif)`,
        },
        {
          title: "After",
          body: `Focusing on the context of "two men carrying a coffin and moving together", I proposed a robust setup using Unity's configurable joints to link P1, Coffin, and P2. Each player is bound to their own input action map, allowing a wide multitude of possible physics behaviors when working with rigidbody constraints and forces.

Whereas the secondary axis (IJKL) was used previously for tilting the coffin, to give players the feeling that they are carrying the coffin at hand, we give players the ability to lift the individual coffin corners that they are holding. The mapping of the keys (QE for P1, UO for P2) and their physical positionings in respect to the movement keys are also intuitive enough to learn.`,
        },
        {
          title: "Core Challenge",
          body: `While the new setup is intuitive enough and was approved by the team, extensive debugging, tweaking, and force calculation continued throughout the development process. Any inconsistencies in the joints, collider values, or rigidbody setups could cause erratic and undesired behaviors.

The biggest challenge comes from the ragdoll corpse. Jumping and lifting could easily make the ragdoll fly out in early stages of development. I noticed that it was not enough to solely rely on the physics engine — especially when players jump and move at the same time, the corpse would bounce up too much, causing it to not sync the directional velocity, thus falling behind.

![Ragdoll floats up and falls behind.](images/games/the-hilltop-funeral/oldjump.gif)

To resolve this, I wrote a custom behavior that applies a downward force on the corpse whenever a player jumps, preventing it from bouncing upward excessively. Next, I added a small window during which the corpse would subtly follow the directional velocity of the player group mid and post jumping.

![Ragdoll stays put during a jump.](images/games/the-hilltop-funeral/newjump.gif)

This solution significantly improved the player experience. Whereas jumping was regarded as a risky action that induced too much negative feedback and defeated player confidence, the action now allows players to safely master the skill as they fly over dangerous territories in the environment.`,
        },
      ],
    },

    {
      type:  "text",
      title: "Process: Level Design",
      subsections: [
        {
          title: "Goal",
          body:  `Redesign of level 2 after data shows that most players did not play through it.`,
        },
        {
          title: "Before",
          body: `![Top down view of the old level 2 after hiding decorative details](images/games/the-hilltop-funeral/LevelDesign/Level2Old.png)

The original Level 2 is almost double the size of Level 1, significantly creating an inconsistency in player expectation while increasing the difficulty level absurdly with the addition of more than 1 new obstacle.

The High Bridge group near the end of level was by itself challenging enough. When combined with the jump issue mentioned above in the mechanic section, this part has become the culprit that left many players feeling defeated, resulting in a usual less than 2 hours of playtime and high refund rate upon launch.

Also, having yet another section (fog area) after players have finally conquered the bridge is unnecessary and unreasonable.`,
        },
        {
          title: "After",
          body: `![Level 2 redesign layout](images/games/the-hilltop-funeral/LevelDesign/Level2Updated.png)

To resolve these issues, I first turned the Wheelbarrow Maze section — mostly left untouched by players due to a failed multi-route design — into the new introduction of Level 2.

I used a mixture of carts that players can push and barrels that are breakable to set up the maze, including a hidden path on the right side that leads to the Holy Coin, an essential currency for players to receive a buff later on.

Past the maze is the new multi-route section where players may choose between a path blocked by a zombie grave, or one that leads to the Cross buff but with an unstable path.

I reduced the overall length and difficulty of the high bridge, while incorporating two shaky bridge segments, suggesting that players should each take one side and move horizontally to get past the section.

I also removed the foggy area at the end, giving players a breather and better sense of relief after they've conquered the bridge. The foggy area has now become a standalone level on its own.`,
        },
      ],
    },

    {
  type:  "events",
  title: "Events & Accolades",
  items: [
    { name: "Tokyo Game Show",  note: "Attended as part of the NYS delegation with Global NY", date: "2025" },

  ]
},

    {
      type:  "credits",
      title: "Credits",
      items: [
        { role: "Design",           name: "Luke Li, Hayley Lin, Jacob Zhai, Isamu Nakagawa, Naphtali Faulkner" },
        { role: "Code",             name: "Luke Li, Cindy Fan, Isamu Nakagawa, Manrui Luo" },
        { role: "Art",              name: "Hayley Lin, Jacob Zhai" },
        { role: "Writing",          name: "Luke Li, Aina Jinguji" },
        { role: "Level Design",     name: "Luke Li, Jacob Zhai, Manrui Luo" },
        { role: "Character Design", name: "Hayley Lin, Luke Li" },
        { role: "Producer",         name: "Luke Li, Cindy Fan, Naphtali Faulkner" },
        { role: "Localization",     name: "Luke Li, Aina Jinguji, Hayley Lin, Cindy Fan" },
        { role: "UI/UX",            name: "Scarlet Zhang, Hayley Lin, Manrui Luo, Luke Li, Cindy Fan" },
        { role: "SFX",              name: "Maddie Socha" },
        { role: "Music",            name: "Cindy Fan, Roberto Uditi" },
      ],
    },

  ],

};
