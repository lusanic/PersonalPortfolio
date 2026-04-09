GAMES["randomly-selected"] = {
      // ── Card info (shown on the games grid) ───────────────────
  id:          "randomly-selected",
  title:       "Randomly Selected",
  genre:       "Audio-based Installation",
  tagline:     "Randomly Selected is an audio based immersive exhibition originated from the language communication game S.S.S.S. The exhibition targets the common struggle of language barrier that many immigrants and international students experience in the United States. ",
  coverImage:  "images/games/randomly-selected/IMG_0704.JPG",
  bannerImage: "images/games/randomly-selected/IMG_0704.JPG",  // wider image shown on the detail page header
  trailerUrl:  "",
  trailerAudio: "music/randomly-selected/RandomlySelectedAbstractSoundStory.mp3",
  trailerAudioCaption: "Abstract Sound Story",
  year:        "2022",
  tools:       ["Google Suite", "Logic Pro X"],
  role:        ["Curator", "Audio Designer"],
  team:         "3",
  shortDesc:   "An audio installation showcasing the common struggle of language barrier through the voice recordings of a tabletop game.",

  // ── Links shown on detail page ────────────────────────────
  links: [
    { label: "Materials", url: "https://drive.google.com/drive/folders/10y3xMNgglt5EK26R2Qseu81wRNEtvu7T?usp=sharing", type: "primary" },
  ],

  sections: [

    {
        type: "overview",
    },
    
    {
      type:          "text",
      title:         "About",
      body: `Following the playtests of the original game S.S.S.S., the team understood that while the playing experience of the game was very uneasy and difficult for the players, those that observed the playtests had a great time witnessing the players struggle. Just like in any real-life situations, we prefer it more when it is not us that are put through challenging situations. 

With this observation, the team decided to take a completely different approach and turn the original game into an audio-based installation, which the audience could still choose to partake in and imagine what it would be like if they had to be the one being interrogated. 

Highly supported by Professor Eric Zimmerman, Randomly Selected was the final project I did in his Game Design II class at NYU Game Center along with 2 of the original members from the tabletop game version. Randomly Selected was showcased during NYU Game Center’s 2022 Spring Showcase.
`,
    },

    {
      type:   "gallery",
      title:  "Gallery",
      images: [
        { src: "images/games/randomly-selected/Label1.jpg",                   caption: "Installation Label - Spain" },
        { src: "images/games/randomly-selected/Label2.jpg",                   caption: "Installation Label - China" },
        { src: "images/games/randomly-selected/Label3.jpg",                   caption: "Installation Label - Saudi Arabia" },
        { src: "images/games/randomly-selected/IMG_0702.JPG",                   caption: "Installation Room" },
        { src: "images/games/randomly-selected/IMG_0699.JPG",                  caption: "Installation Room" },
        { src: "images/games/randomly-selected/IMG_0627.jpg",              caption: "Installation setup" },
        { src: "images/games/randomly-selected/IMG_0704.JPG",               caption: "" },
        { src: "images/games/randomly-selected/IMG_0628.jpg",               caption: "" },

      ],
    },

    {
      type:  "text",
      title: "Responsibilities",
      subsections: [
        {
          title: "Audio Design",
          body: `- Coordinated recording sessions with players of the original S.S.S.S. game with professional recording equipment
          - Mixed, edited, and organized the audio files for the installation using Logic Pro X
          - Designed the dynamic audio space by using two speakers to play the interrogator and traveler's voice respectively`,
        },
        {
          title: "Installation Design",
          body: `- Designed the installation space, material placement, and prop placement`,
        },
      ],
    },


        {
      type:  "text",
      title: "Process",
      subsections: [
        {
          title: "Installation Design",
          body: `To simulate the uneasy interrogation setting, we chose to use small and tight rooms as the installation space. NYU Game Center’s phone booths, which are small rooms meant for meetings over the phone for 1-2 people, are the perfect spot to host the experience. While regular office tables would suffice for placing the materials, the team thought that a dark tablecloth could help with both material readability and enhancing an uneasy environment.

Initially the design of the space was more realistic: materials of the traveler and the interrogator were placed on the two sides of the table. We placed two water cups and two speakers at the center of the table, with each facing the respective chair where the audience would sit in to experience the corresponding player’s perspective. A few iterations later, I realized that placing the speakers on the table actually broke the immersion. With the audience clearly identifying the source of the audio, it became less likely for them to immerse themselves into the role they are “playing” in the specific chair.
![Initial setup: both players' materials at the end of the table (L: Traveler, R: Interrogator), with the speaker on the table facing them](images/games/randomly-selected/IMG_0627.jpg)
To enhance immersion, I instead placed the speakers beneath the table, hidden under the tablecloth. Without the audio source directly facing them, the space now allows the sound to be only perceived through the audience’s ears, and guides their visual attention to the materials on the table. 
![Updated setup, with audience listening while interpreting the conversation through the pages](images/games/randomly-selected/IMG_0702.JPG)
The experience frees itself by not requiring 2 players anymore. Instead, anyone could step in and instantly start trying to make out what the situation is. During the installation, we have also witnessed cases where two audience members start communicating with each other about what is happening in the audio. 
For the live showcase at NYU, we exhibited in three rooms: RANDOMLY SELECTED in Spain, Saudi Arabia, and China, each featuring a unique set of audio clips and paper materials. 
`,
        },
        {
          title: "Audio Work",
          body: `
          I worked with 8 people to create the audio clips used for the installation. Usually in pairs, I set up recording sessions where they would perform a full playthrough with the materials from the S.S.S.S. game. 

For the recordings, I used Logic Pro X to separate the audio into two tracks, one for the traveler and one for the interrogator. I mixed and mastered the audio files to make sure they are of the best audibility and quality for the installation. 

For each room of the installation, two devices, which are connected to the two speakers, are used to play the corresponding audio tracks on loop. Each audio track alone, whether the traveler’s or interrogator’s, will have silent intervals in between to make room for the other speaker’s time. As such, each room’s audio tracks have to be played simultaneously to ensure a smooth experience for the audience.

@[Interrogator Audio - Mandarin](music/randomly-selected/SSSS Interrogation 1 Interrogator.mp3)

@[Traveler Audio - Mandarin](music/randomly-selected/SSSS Interrogation 1 Traveler.mp3)
`,
        },
      ],


    },

        {
  type:  "events",
  title: "Events & Accolades",
  items: [
    { name: "Prospectives Symposium - SGSAH", date: "2022"},
    { name: "NYU Game Center Spring Showcase",  date: "2022" },

  ]
},


    {
      type:  "credits",
      title: "Credits",
      items: [
        { role: "Curator",           name: "Luke Li, Nchima Kapoma, Walid Raouda" },
        { role: "Audio",             name: "Luke Li" },

      ],
    },
    
  ]
}