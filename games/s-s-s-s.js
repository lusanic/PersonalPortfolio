GAMES["s-s-s-s"] = {
      // ── Card info (shown on the games grid) ───────────────────
  id:          "s-s-s-s",
  title:       "S.S.S.S.",
  genre:       "Tabletop Puzzle",
  tagline:     "Secondary Security Screening Selection (S.S.S.S) is a two player language puzzle game. One will play the role of the traveler, a young student moving from the U.S. to a foreign country. The other plays the interrogator, a border control agent trying to solve an issue regarding the travel. Throughout the game players are discouraged from speaking in a language they share together, currently the game supports Mandarin, Arabic, and Spanish. ",
  coverImage:  "images/games/s-s-s-s/capsule.png",
  bannerImage: "images/games/s-s-s-s/capsule.png",  // wider image shown on the detail page header
  trailerUrl:  "",
  year:        "2022",
  tools:       ["Google Suite"],
  role:        ["Game Designer", "Narrative Designer"],
  modes:       ["2-Player"],        // displayed only on the detail page
  team:         "4",
  shortDesc:   "A 2-player tabletop puzzle game simulating an airport interrogation between a traveler and a border control interrogator.",

  // ── Links shown on detail page ────────────────────────────
  links: [
    { label: "Digital Materials", url: "https://drive.google.com/drive/folders/16I6lpxAfvOWIpnHV3RZ6QO7TCCG2QNmB?usp=sharing", type: "primary" },
  ],

  sections: [

    {
        type: "overview",
    },
    
    {
      type:          "text",
      title:         "About",
      body: `Part of a 5-week long assignment from Eric Zimmerman’s Game Design II at NYU Game Center, this project was created with the core design constraints of language and disability. While the initial direction focused on designing an interactive experience for people with actual disabilities, inspired by how foreigners travelling to the U.S. sometimes face absurdly long scrutiny when entering the border, I proposed the design of an experience simulating the interrogations, but this time in reverse. 

With the team members coming from all over the world and language barrier being a shared experience, we designed S.S.S.S to bring attention to the uncomfortableness present in communications using an unfamiliar language. Considering how language barriers are often the cause of issues such as bias and racism, we also intend to raise awareness in regard to such social questions by reversing the positions of those who are fluent and those who are struggling with a language.
`,
    },

    {
      type:     "image",
      src:      "images/games/s-s-s-s/S.S.S.S Rules_Page_1.jpg",
      width:    "800px",
      caption:  "Rule sheet",
      title:    "Rule Sheet"
    },

        {
      type:  "text",
      title: "Materials",
      subsections: [
        {
          title: "Interrogator Material",
          body: `Following a strict protocol, the interrogator player is expected to conduct the interview within 5 minuntes and conclude whether the traveler is indeed violating the specified regulation in the file. Since the interrogator player has to be at least fluent with the language, the file is straightforward and only includes a simple list of vocabulary in addition to the protocol.

          %[Example Mandarin Interrogation Sheet | w: 900px| h: 1000px](images/games/s-s-s-s/S.S.S.S Interrogator sheet.pdf)`,
        },
        {
          title: "Traveler Material",
          body: `The traveler player has to be someone that is unfamiliar with the selected language. Their role is either a student traveling to the country for school or just a visiting tourist. Narratively the phonetics cards are prepared by the traveler's mother to help the traveler deal with unexpected scenarios like the one in S.S.S.S.

          The vocabulary are separated into multiple categories to help the player locate the type of word/phrase they are looking for when trying to understand a question or to respond. Example Q&As are also listed so that based on the context, players at times could make out what the interrogator is asking without actually having to interpret it word by word."
          
          %[Example Arabic Traveler Sheet | w: 900px| h: 1000px](images/games/s-s-s-s/TravelerSheet.pdf)`,
        },
      ],
    },

    {
      type:  "text",
      title: "Responsibilities",
      subsections: [
        {
          title: "Game Design",
          body: `- Worked with the teammates to design the core gameplay from the given constraints of "Language", "Disability", and "Room"
- Initiated the core design from experience of airport questioning stories
- Designed multiple scenarios under which the traveling player is questioned
- Created the Mandarin version of the interrogator and player sheets
- Conducted playtest sessions and recorded live voice`,
        },
      ],
    },

    {
  type:     "text-video",
  title:    "Play Session",           // optional
  videos: [
    { src: "images/games/s-s-s-s/IMG_0607.MOV", caption: "Example play session featuring Professor Eric Zimmerman"},
    { src: "images/games/s-s-s-s/IMG_0406.MOV", caption: "Public play session in the park"},
  ],
},


        {
      type:  "text",
      title: "Reflections",
      body: `
      The game has gone through multiple iterations based on the feedback that we had received. Originally we did not have the restriction that the investigator player had to be a native speaker. However, we soon realized how chaotic and messy the experience was when both players had completely no clue what they were communicating. Another version of the game had the interrogator choose the questions they would like to ask, and that was too difficult since the native speaker interrogator might use words not translated in the traveler’s cheat sheets. 
![Early stage design notes](images/games/s-s-s-s/6BADC58E-938E-4E3A-AB54-8486F785167D.jpg)
Regardless of the versions, what we noticed during play sessions was the obvious uneasiness from the traveler player side. Our intention at the core of the game gives us the challenge to design an experience that is both insightful, fun, yet uncomfortable. While we had witnessed the uneasiness and pressure we desired, with the impression that it is still a tabletop game, the balance between focusing on the core and adding fun to the experience is still a question that needs to be better answered. As a collaborative piece which combines all of our shared experiences, we hope that this game is able to bring more attention to a phenomenon that has always been present in this country of high diversity.
![Playtest notes](images/games/s-s-s-s/IMG_3740.jpg)
S.S.S.S is later expanded into the audio installation: <b>Randomly Selected</b>.

      `,
    },



    {
      type:  "credits",
      title: "Credits",
      items: [
        { role: "Design",           name: "Luke Li, Nchima Kapoma, Walid Raouda, Swathi Sambasivam" },
        { role: "Art",              name: "Swathi Sambasivam" },

      ],
    },
    
  ]
}