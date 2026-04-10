GAMES["inkression"] = {
      // ── Card info (shown on the games grid) ───────────────────
  id:          "inkression",
  title:       "Inkression",
  genre:       "Narrative Adventure",
  tagline:     "A 3D narrative game where you are a tattoo artist who uncovers the remaining stories of a dying neigborhood.",
  coverImage:  "images/games/inkression/vertical.png",
  bannerImage: "images/games/inkression/fade.png",  // wider image shown on the detail page header
  trailerUrl:  "https://www.youtube.com/watch?v=DxVeCUWrX2Y",
  year:        "2023-Present",
  tools:       ["Unity3D", "C#", "FMOD Studio", "Dialogue System", "Cinemachine"],
  role:        ["Game Designer", "Narrative Designer", "Developer"],
  modes:       ["Singleplayer"],        // displayed only on the detail page
  team:         "10",
  publisher:    "BROKENCIGS",
  shortDesc:   "A story about the people in a dying neighborhood, remembered through the eyes of a tattoo artist.",

  // ── Links shown on detail page ────────────────────────────
  links: [
    { label: "Steam Demo", url: "https://store.steampowered.com/app/2965930/Inkression/", type: "primary" },
  ],

  sections: [

    {
        type: "overview",
    },
    
    {
      type:          "text",
      title:         "About",
      body: `Inkression is a love letter to New York City. It’s a game that discusses family, friendships, relationships, and what it means to be a small part of a bigger metropolis during extreme times.
By casting the player as a tattoo artist, we use permanent ink as a medium to explore the past, present, and future of the people who call this city home.

As the lead designer in a team of ten, I conceptualized the world, characters, and core mechanics from the ground floor. I collaborated closely with our art and level design teams to sync the game’s pacing with the narrative, managing a group of designers and developers to iterate on unique mechanics tailored to each character’s story.`,
    },

    {
      type:   "gallery",
      title:  "Gallery",
      images: [
        { src: "images/games/inkression/screenshot-15.png",           caption: "Nortown - 2019" },
        { src: "images/games/inkression/screenshot-16.png",           caption: "Nortown - 2024" },
        { src: "images/games/inkression/screenshot-24.png",           caption: "Brothers' Grocery - In a flashback" },
        { src: "images/games/inkression/screenshot-26.png",           caption: "The Blindfolded (tattoo shop) - 2024" },
        { src: "images/games/inkression/screenshot-27.png",           caption: "Miyoshiya (Japanese izakaya) - 2024" },
        { src: "images/games/inkression/walkingSim.gif",              caption: "Return to the neighborhood, initially depicted in black and white" },
        { src: "images/games/inkression/Movie_062.gif",               caption: "Interact with the environment and slowly pick up memories about the place" },
        { src: "images/games/inkression/Movie_061.gif",               caption: "Specific locations with stories connected to respective characters" },
        { src: "images/games/inkression/screenshot-19.png",           caption: "Protagonist's mind space where she stores memories related to each character" },
        { src: "images/games/inkression/screenshot-20.png",           caption: "Location/character specific mechanic based on clues in her mind space" },
        { src: "images/games/inkression/Movie_063.gif",               caption: "Unlocking mini tattoo design upon finishing each clue-specific mechanic" },
        { src: "images/games/inkression/Movie_064.gif",               caption: "Once all clues have been found, a final tattoo design is revealed, marking the end of the character's story" },
        { src: "images/games/inkression/tattooing-3.gif",             caption: "Tattoo your clients again while catching up on everything that happened in the past 5 years" },

      ],
    },

    {
      type:    "image",
      src:     "images/games/inkression/gameloop.png",
      width:   "1080px",       // optional, defaults to 100%
      caption: "Sample game loop",   // optional
      title:   "Game Loop",   // optional section header
    },

    {
      type:  "text",
      title: "Responsibilities",
      subsections: [
        {
          title: "Features I Own",
          body: `- Designed the ==core game loop== and player flow across all story arcs
- Built a ==color transformation system== using ==custom shaders== with a burning edge reveal effect for all interactable objects
- Designed and implemented the ==tattoo-guided story system==: clues transform into mini tattoo designs on discovery, combining into a final character tattoo to conclude each arc
- Created ==character-specific mini-games== mechanically tailored to each story
- Implemented ==movement, navigation, camera, and control mapping==
- ==Chinese localization== for the full script and all UI elements`,
        },
        {
          title: "Narrative Design",
          body: `- Designed the full ==world, backstory, and setting== — a fictional NYC neighborhood spanning two timelines
- Created ==15+ characters== including the protagonist, each with distinct voice and story arc
- Wrote the ==main script at 50,000+ words==`,
        },
        {
          title: "Project Management",
          body: `- Oversaw a ==cross-functional team of 10== spanning design, development, art, writing, sound, and localization
- Ran ==daily and weekly agile sprints== enabling fast iteration across all aspects of the game
- Used ==Lark== for task management and ==Miro== for moodboarding and storyboarding
- Collaborated with ==professional tattoo artists from NYC== to develop authentic in-game flash designs`,
        },
      ],
    },

        {
      type:  "text",
      title: "Process",
      subsections: [
        {
          title: "Prototype",
          body:  `Inkression began with a simple desire: <b>to experience everything a new city has to offer</b>. I proposed an initial prototype where an entire city block was rendered in stark white, simulating the unfamiliarity of a new place. As players move and interact, they "restore" color to the world—a literal representation of discovering the city and slowly becoming a part of it.
          ![Low poly city neighborhood block out](images/games/inkression/prototype.png)
          ![Low poly city neighborhood block out](images/games/inkression/prototype2.png)
          ![Low poly city neighborhood - Color restored](images/games/inkression/prototype3.png)`,
        },
        {
          title: "Early Stage",
          body:  `The shift from a bright white world to a dark, gloomy atmosphere is the result of our narrative choice. <b>In a fast-paced city, things and people come and go so fast that we can never fully grasp any of it.</b> And if the things we thought would always stay are going away, how much time do we have left to remember those that we once cared about?
          ![City environment - Early stage](images/games/inkression/environment1.png)
          Initially, the team approached the mechanic design with a great ambition: every object in this game is going to transform in color when you interact with it, and they are all going to mean something.

          Based on the props that our art team had already made at the time, we experimented with a few ways to interact with ordinary decorative objects.
          
          ![Kicking down trash cans](images/games/inkression/动画6.gif)
          ![Noticing an ad](images/games/inkression/动画5.gif)
          ![Eating pizzas](images/games/inkression/动画7.gif)`,
        },
        {
          title: "Core System",
          body:  `We soon realized that while it was fun playing with ordinary objects in a way that we oftentimes could not in real life, there was something missing in these interactions. Sure, the colors are restored, but they came with no real gravity or impact. 

          That was when I understood that the gravity I was looking for could never come from the interaction itself, but the story and meaning behind it. Instead of trying to figure out a unique and interesting mechanic for every object in the game, I worked closely with our artists and designed mechanics that not only tell the stories of our characters, but also are tied to specific locations to allow the perfect balance between mechanic, story, and environment.

          ![A mind palace where the roster of characters are shown](images/games/inkression/Screenshot 2024-11-05 125105.png)
                    
          To make all systems work together in unison, I built the Mind Palace for the aloof tattoo artist protagonist who has just returned to town after five years. 

          One of the main challenges we face as game and narrative designers is “how do we bridge the information gap between the player and the protagonist?”

          I designed the Mind Palace in a way that both serves the functional purpose while making contextual sense. 

          Functionally, it is the go-to menu where the player gets the idea of which characters’ stories to follow along (only unlocked characters’ story menus could be selected).
          ![](images/games/inkression/screenshot-19.png)
          Since our protagonist has been away for five years, her memories—and therefore the player's knowledge—are limited to the essentials. This narrative reset ensures that players aren't overwhelmed by information, allowing them to rediscover the neighborhood and its people at the same pace as the character they are playing.

          Each character’s story menu features key elements tied directly to their narrative. Hovering over an item reveals specific keywords that act as clues, guiding players to locate these objects within the physical environment.

          These elements—often presented as bespoke mini-games—build directly on the character’s narrative, using interactivity to convey emotional depth that dialogue alone cannot reach.

          
          ![Eating is no longer just a gimmick, but an entire system where you learn more about others and yourself through eating habits.](images/games/inkression/Screenshot 2024-11-05 124802.png)
          
          ![The cardboard boxes tell you more about the owner of the grocery store as you slowly stack them together like he used to.](images/games/inkression/Screenshot 2024-11-05 124917.png)
          
          Once an interaction is complete—such as finding and stacking all the grocery boxes—the protagonist gains enough insight into the character to conceptualize a "flash" tattoo design. This ensures every piece of ink is earned through a genuine understanding of the person behind it.
          ![](images/games/inkression/Movie_063.gif)
          To ensure the tattoos felt authentic, I collaborated with both our 2D team and professional NYC tattoo artists. I provided detailed story dossiers—outlining each character’s history, motifs, and key interactions—and worked closely with the artists to translate those narrative beats into meaningful, character-fitting flash designs.
          `
          
          ,
        },

      ],
    },

  {
  type:    "blocks",
  title:   "Narrative Design",       // optional section header
  blocks: [
    {type: "links", items: [{ url: "https://docs.google.com/document/d/1cU8p_psJFojrkCojzm-7IqlISvDTTj420ESmlLEG5H0/edit?tab=t.0", label: "Narrative Design Document", caption: "Contains the backstory and all characters I have created for Inkression."},
                            { url: "writings/inkression-script.html", label: "Sample Script", caption: "Sample script from the Prologue"},
    ]},
    {type: "subsection", title: "Timeline Snapshot", body: "![Timeline in Miro](images/games/inkression/timeline.png)"},
    {type: "subsection", title: "Relationship Snapshot", body: "![Relationship Graph in Miro](images/games/inkression/relationships.png)"},
  ],

},


{
  type:  "events",
  title: "Events & Accolades",
  items: [
    { name: "New York University Incubator",          date: "2024–2025" },
    { name: "Game Developers of Color Expo & Direct", date: "2025, 2024" },
    { name: "Tokyo Game Show",  note: "Attended as part of the NYS delegation with Global NY", date: "2025" },
    { name: "GDC",              date: "2025" },
    { name: "Day of the Devs",  date: "2025" },
    { name: "MAGFest",          date: "2025" },
    { name: "AnimeNYC x PlayNYC", date: "2024" },
  ]
},

    {
      type:  "credits",
      title: "Credits",
      items: [
        { role: "Design",           name: "Luke Li, Hayley Lin, Jacob Zhai, Cindy Fan" },
        { role: "Code",             name: "Luke Li, Cindy Fan" },
        { role: "Art",              name: "Hayley Lin, Jacob Zhai" },
        { role: "Writing",          name: "Luke Li, Aina Jinguji, Manrui Luo" },
        { role: "Level Design",     name: "Jacob Zhai, Hayley Lin, Luke Li" },
        { role: "Character Design", name: "Luke Li, Hayley Lin, Jacob Zhai" },
        { role: "Producer",         name: "Luke Li, Cindy Fan, Naphtali Faulkner" },
        { role: "UI/UX",            name: "Aris Lyu, Luke Li" },
        { role: "SFX",              name: "Xiaowei Cao" },
        { role: "Music",            name: "Yichen Cai, Xiaowei Cao, bartes, Monstar Cao, Pavlo Halaiko, wetgropes" },
        { role: "Localization",     name: "Luke Li, Aina Jinguji, Hayley Lin, Cindy Fan" },

      ],
    },
    
  ]
}