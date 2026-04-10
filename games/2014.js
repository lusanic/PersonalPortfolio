GAMES["2014"] = {
      // ── Card info (shown on the games grid) ───────────────────
  id:          "2014",
  title:       "2014",
  genre:       "2D Narrative Game",
  tagline:     "A 2D simulator where you play as the Big Brother from George Orwell's book, but it's year 2014 now.",
  coverImage:  "images/games/2014/cover-large.png",
  bannerImage: "images/games/2014/cover-large.png",  // wider image shown on the detail page header
  trailerUrl:  "https://youtu.be/Y7s2ZjKFGlw",
  year:        "2021",
  tools:       ["Unity", "C#", "Miro"],
  role:        ["Game Designer", "Narrative Designer"],
  modes:       ["Singleplayer"],        // displayed only on the detail page
  team:         "4",
  shortDesc:   "A 2D simulator where you play as the Big Brother from George Orwell's book, but it's year 2014 now.",

  // ── Links shown on detail page ────────────────────────────
  links: [
    { label: "Play on itch.io", url: "https://chroswang.itch.io/2014", type: "primary" },
  ],

  sections: [

    {
        type: "overview",
    },
    
    {
      type:          "text",
      title:         "About",
      body: `In 2014, you are tasked with working to administrate your regime, military powers, and keep an eye on your enemy as well as your growing son by making all sorts of decisions through perusing confidential documents in a dystopian future society.

This "Big Brother" simulator uses a combination of branching narrative through a file-reading system and several mini interactions as motifs to imagine what the world has become under a ruthless totalitarian government.

This project was made during my time at NYU Game Center. As the narrative designer in a team of 4, I designed the backstory, branching narrative structure, and wrote the story. As the game designer, I worked closely with the rest of the team to design the three mini interactions as the aftermath to each decision making. 
`,
    },

    {
      type:   "gallery",
      title:  "Gallery - Features",
      images: [
        { src: "images/games/2014/Opening.gif",                   caption: "TV propaganda each day - the News is heavily influenced by your decisions." },
        { src: "images/games/2014/GrabFile.gif",                  caption: "Reading files that requires your attention." },
        { src: "images/games/2014/MakeDecision.gif",              caption: "Deciding which proposal is the best - you are now too old to come up with solutions yourself." },
        { src: "images/games/2014/PaperScraps.gif",               caption: "The Big Brother always keeps his desk clean." },
        { src: "images/games/2014/FeedFish.gif",                  caption: "The Big Brother always keeps his fish fed." },
        { src: "images/games/2014/SqueezeJuice.gif",              caption: "The Big Brother always makes the most fresh juice." },

      ],
    },

    {
      type:  "text",
      title: "Responsibilities",
      subsections: [
        {
          title: "Game Design",
          body: `- Designed the ==core game loop== around a ==file reading system== and branching narrative
- Designed ==post-decision interaction motifs== as metaphorical feedback for each player choice
- Scripted ==cutscene sequences== and all menu functionalities`,
        },
        {
          title: "Narrative Design",
          body: `- Designed the ==world, backstory, characters, and progression== set 30 years after Orwell's 1984
- Wrote the full ==branching narrative== and all in-game text`,
        },
      ],
    },

        {
      type:    "image",
      src:     "images/games/2014/gameloop.jpg",
      width:   "1080px",       // optional, defaults to 100%
      caption: "Sample game loop",   // optional
      title:   "Game Loop",   // optional section header
    },

        {
      type:  "text",
      title: "Process",
      subsections: [
        {
          title: "Game Design",
          body:  `The project began with one question that fascinated me the most: what would the world of 1984 be like in 2014? The totalitarian world depicted in George Orwell’s novel had always been one of the earliest enlightenments to me in understanding just how horrifying the world looks like under the sovereign control of a dictator. 

While it is alluded in the novel that Big Brother is a symbol rather than any specific individual, I thought it would be interesting to imagine an aged dictator who, despite being in his last days of life, still grasps for power and control. With this in mind, I created the central conflict for Big Brother and Oceania: political schemes among the Four Ministries, speculations on who will inherit such immense power, and suspicions around the potential involvement with the Rebellion Party from the Little Brother–Big Brother’s son.

In imagining the new world, I built original concepts based on the original novel, including: The Device, a smartphone-like device for better surveillance from the Party; Controlled mating and employment; and machines for matchmaking based on DNAs.
![Documenting concepting process](images/games/2014/2014 Story Concept_Page_1.jpg)
In the decision making process, which is the least the dying Big Brother could do, I designed the two potential solutions the player could choose to come from conflicting affiliations, who are desperately trying to shape the future of the world by manipulating the man who still sits on the iron throne. 

The solutions always feature one that is more reasonable and the other being more radical. Since the game always has the player at the Big Brother’s desk handling paperwork, I designed a series of post-decision-making activities the Big Brother partakes, which all serve as a motif to hint at the consequences of his decisions. 
![Feeding the fish - feeding the lies](images/games/2014/FeedFish.gif)
![Squeezing juice - sucking them dry](images/games/2014/SqueezeJuice.gif)
          `,
        },
        {
          title: "Narrative Design",
          body:  `[Sample Script](writings/2014-Sample Story.html)
          ![Design process - concepting](images/games/2014/process1.jpg)
          ![Design process - branching narrative](images/games/2014/process2.jpg)
          ![Branching narrative diagram](images/games/2014/2014_Story_Board.jpg)`,
        },
        {
          title: "Technical Structure",
          body: `![Data structure - File system](images/games/2014/Screenshot 2026-04-06 170352.png)
          ![Data structure - Day and decisions](images/games/2014/Screenshot 2026-04-06 170357.png)`,
        },
        {
          title: "Reflections",
          body: `The challenge of continuing the worldview design is how to incorporate our original thoughts carefully without breaking the rules established by the original work. As such, the initial stage of brainstorming largely focused on defining the current state of all concepts from the original on top of designing new ideas. As the setting of 2014 is 30 years later, to portray Oceania’s increase in power, we decided to introduce Oceania as the only superstate in the world. While the people of Oceania are instructed to believe that both Eastasia and Eurasia are defeated already, following the same manner as in the original 1984, it is never explicitly clarified if the case is true or not. On the other hand, to ensure that Oceanians are satisfied with their living conditions, a distinct comparison is necessary. The result of this is the statement that the rest of the defeated Eurasians have escaped to the Moon where they suffer from an extremely terrible living condition. This is also a metaphor for our actual world, where countries would exaggerate negative facts about other parts of the world in order to make citizens content. 

          Designing the Big Brother was the most interesting yet challenging part of the project. Much space has been left to us for the character’s mostly symbol-like presence in 1984. However, this also openly challenges us to design the character in a style that best presents a totalitarian dictator to our audience. Diving into the mentality of an old dictator, we decided that the incapability to stay in control and fear of losing power should be the direction that we present Big Brother to our audience. However, we would also like to express the irony of a dystopian totalitarianism where there has never been any chance of overthrowing as long as the dictator sits on his throne. Combining such thoughts, we were able to have the main plot of the game, where Big Brother struggles to stay in power as the New Brotherhood is on the rise to take over the nation. The two supporting characters in the game, Darwin Stewart and O’Connor, serve to have opposite influence on players’ mentality. Stewart, Big Brother’s son, is portrayed as dedicated to technological development and communicates on a much less frequency compared to O’Connor. O’Connor, on the other hand, often sends reports to Big Brother exposing potential individuals who are involved with the New Brotherhood. 

          In terms of the actual interaction, following our decision to not show any expressions or thoughts from Big Brother, we decided that it would be interesting to tell the entire story through documents. By designing a table simulator, where players interact with objects and read through files, a concise structure exists to keep players limited while offering enough freedom for exploration. This design also incorporates visual novel elements where players would have to choose between two decisions as either proposals or versions of reality to be told. For the fact that the main character is Big Brother, having the documents present information to players will be a reasonable way through which the worldview, the characters, and all concepts are introduced. 

          The challenge, however, is providing feedback after players make a decision. In traditional visual novels, information is given at the moment when a decision is made. With the document system on top of the decision to not show internal thoughts, feedback has to come in a different direction. The structure of the story, or the documents, is that players continuously receive files as telegrams, proposals, news versions, classified and personal messages through a machine. As a result, it would make sense if the file following a decision does not provide instant feedback corresponding to the decision made. Based on this observation, we made the decision to provide feedback in the form of metaphors. Four types of small actions: using a blender, watering plants, feeding fish, and taking out trash are positioned at different locations on the table where Big Brother handles documents. Using the blender represents killing, watering plants means lying to the public, feeding fish is for allocation, and taking out trash happens whenever people are sent to be tortured and questioned. Originally the team wanted the feedback to be coherent and the connection understood by our players easily. The result was the implementation of a forced camera pan to the location of the four actions upon making a decision. However, many of our playtesters were confused and unable to draw connections between the decision and the action. To improve the experience and give players more freedom, we redesigned the system by adding four buttons on the table, each corresponding to a feedback action. After making a decision, players will be notified by a lit button, suggesting a possible feedback if they press it. 

          The final challenge that we faced was explaining the original concepts to our players. For the fact that we did not wish to adopt cutscenes just to explain the setting and specific terminologies, we came up with a smart solution to have an index-like window that pops up whenever players hover their mouse over specific terminologies. Furthermore, through the explanation of such terms in Big Brother’s tone, players are able to get a bit insight as to how the main character sees this world, and make sure the players acknowledge that they are playing as the Big Brother, overseeing everything happening in this dystopian world.
          `,
        },
      ],
    },

        {
  type:  "events",
  title: "Events & Accolades",
  items: [
    { name: "NYU Game Center Spring Showcase",  date: "2022" },

  ]
},


    {
      type:  "credits",
      title: "Credits",
      items: [
        { role: "Design",           name: "Luke Li, Chros Wang, Aris Lyu, Jumo Yang" },
        { role: "Code",             name: "Chros Wang, Aris Lyu, Luke Li" },
        { role: "Art",              name: "Jumo Yang, Aris Lyu" },
        { role: "Story/Writing",            name: "Luke Li"},
        { role: "Producer",         name: "Chros Wang" },
        { role: "UI/UX",            name: "Aris Lyu" },
        { role: "Music/SFX",        name: "Jumo Yang" },

      ],
    },
    
  ]
}