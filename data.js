// ================================================================
//  data.js — YOUR PORTFOLIO CONTENT
//  Edit this file to update personal info, writings, and music.
//  Each game has its own file in the /games/ folder.
//  Save and refresh your browser to see changes.
// ================================================================

const DATA = {

  // ── Personal ──────────────────────────────────────────────
  name:      "Luke Li",
  tagline:   "Designer · Developer · Writer",
  resumeUrl: "https://drive.google.com/file/d/1PxOYzMve0HoJ2de_Wbz35kZsKKANdMjG/view?usp=sharing",
  heroBio: "Writing code to invent new ways we play.\n\nDesigning play to tell heartfelt stories.",

  aboutBio: [
    "Hi, I'm Luke — a game designer, developer, and writer with a strong focus in narrative-centric gameplay and over five years of experience applying my skills across game design, development, narrative design, and project management.",
    "I’m driven by a deep curiosity for what games can do and how interactive systems can create emotional and memorable player experiences. My work blends real-life inspiration with thoughtful player choice to craft relatable and lasting memories.",
    "I’m fascinated by games as a multifaceted medium—one that blends the collective creativity of a team to craft unique experiences that truly resonate with players. Whether designing mechanics, shaping narrative arcs, or guiding multidisciplinary teams, I bring creativity, clarity, and a hands-on approach to every project. I strive to build worlds that players can connect with — worlds that stay with them long after the game ends."
  ],

  details: {
    basedIn:   "New York City",
    education: [
       { degree: "M.F.A. Game Design", school: "NYU Game Center", year: "2021-2023" },
       { degree: "B.S. Computer Game Science", school: "University of California, Irvine", year: "2016-2020" },
       { degree: "B.S. Software Engineering", school: "University of California, Irvine", year: "2016-2020" },
    ],
    tools:     "Unity · C# · Python · Java · Twine · Inform · Git · Jira · Notion · Adobe Suite · Visual Studio · Logic Pro X",
    contact:   "lukelyy0405@gmail.com",
  },

  socials: [

  ],

  // ── Games — split into two subsections ───────────────────
  // Add new game ids here; create the matching file in /games/
  // Then add a <script src="games/<id>.js"> tag in index.html
  games: {
    professional: [
      "the-hilltop-funeral",
      "inkression",
    ],
    personal: [
      "monostrophe",
      "2014",
      "blank-view",
    ],
    "non-digital": [
      "s-s-s-s",
      "randomly-selected",
      "6ate",
    ],
  },

  // ── Press Coverage ────────────────────────────────────────
  press: [
     { publication: "Sohu.com", title: "I Make Games in New York… About Carrying Coffins", date: "Dec 2025", url: "https://www.sohu.com/a/969605099_204824?scm=10001.325_13-325_13.0.0-1-0-0-0.5_1334&spm=smpc.channel_248.block3_308_NDdFbm_1_fd.237.1775531019130sLTikel_324" },
     { publication: "Indie Games Plus", title: "‘Inkression’ Captures Stories Through Tattoo Artwork", date: "Apr 2025", url: "https://indiegamesplus.com/inkression-preview/" },
     { publication: "4Gamer.net", title: "[GDC 2025] A Look at Inkression, the Adventure Game Where You Play as a Tattoo Artist: Uncover the Past and Present of a Forgotten Hometown and Carve the City’s Story in Ink.", date: "Mar 2025", url: "https://www.4gamer.net/games/858/G085838/20250322017/" },
     { publication: "The Gamer", title: "Forget Steam Next Fest, Inkression Is The best Demo I’ve Played This Year", date: "Nov 2024", url: "https://www.thegamer.com/inkression-demo/" },
     { publication: "4Gamer.net", title: "Inkression, a narrative adventure where you explore a town on the brink of demolition and carve memories and stories into tattoos, has released its Japanese demo.", date: "Nov 2024", url: "https://www.4gamer.net/games/858/G085838/20241119036/" },
     { publication: "GameSpark", title: "Inkression, a Life Story Told Through Tattoos, Launches Crowdfunding—A Walking Sim Where a Monochrome World Gradually Returns to Color.", date: "Jun 2024", url: "https://www.gamespark.jp/article/2024/06/15/142393.html" },
      
      
  ],

  // ── Exhibitions ───────────────────────────────────────────
  exhibitions: [
    { title: "WePlay Expo", game: "The Hilltop Funeral", location: "Shanghai, China", date: "2025" },
    { title: "Tokyo Game Show", game: "The Hilltop Funeral", location: "Tokyo, Japan", date: "2025" },
    { title: "Game Developers of Color Expo", game: "Inkression", location: "Online", date: "2025" },
    { title: "COREBLAZER Game Fest", game: "The Hilltop Funeral; Inkression", location: "Shanghai, China", date: "2025" },
    { title: "Day of the Devs", game: "Inkression", location: "San Francisco", date: "2025" },
    { title: "GDC", game: "Inkression", location: "San Francisco", date: "2025" },
    { title: "Super MAGFest", game: "Inkression", location: "National Harbor, Maryland", date: "2025" },
    { title: "Game Developers of Color Expo", game: "Inkression", location: "New York City", date: "2024" },
    { title: "Anime NYC x Play NYC", game: "Inkression", location: "New York City", date: "2024" },
    { title: "Prospectives Symposium - SGSAH", game: "Randomly Selected", location: "Online", date: "2022" },
  ],

  // ── Writings ──────────────────────────────────────────────
  // Add new writings here. Set pageUrl to the path of its HTML file in /writings/.
  writings: [
    {
      id:      "inkression-script",
      title:   "Inkression: Sample Script",
      gameId:  "inkression",
      type:    "Game Dialogue Script",
      excerpt: "Script for the game's opening sequence. Demonstrates layered character voice and sets up the setting, characters, and background.",
      pageUrl: "writings/inkression-script.html",
    },
    {
      id:      "the-hilltop-funeral-dialogues",
      title:   "The Hilltop Funeral: Sample Dialogues",
      gameId:  "the-hilltop-funeral",
      type:    "Game Dialogues",
      excerpt: "Dialogues between the two playable characters for a 2-player co-op game. The sample contains casual dialogues that are spawned without any specific conditions.",
      pageUrl: "writings/the-hilltop-funeral-dialogues.html",
    },
    {
      id:      "2014-story",
      title:   "2014: Sample Story Files",
      gameId:  "2014",
      type:    "Game Story",
      excerpt: "Story excerpt from a 2D narrative game where the player reviews files and makes decisions as the Big Brother from George Orwell's 2014. The sample story below showcases the files the player will read and the outcomes of their decisions.",
      pageUrl: "writings/2014-Sample Story.html",
    },
    {
      id:      "no-distance-like-this-script",
      title:   "No Distance Like This: Sample Script",
      gameId:  "No Distance Like This",
      type:    "Game Script",
      excerpt: "Script sample from a text based adventure made in Inform. The story focuses on a man who is meeting up with his long-distance girlfriend but also suspects something is off prior to actually meeting her. Based on a true story.",
      pageUrl: "writings/no-distance-like-this-script.html",
    },
    {
      id:      "blank-view-script",
      title:   "Blank View: Script",
      gameId:  "Blank View",
      type:    "Game Script",
      excerpt: "Script of a visual novel thriller made in twine with branching narrative. The story branches with two possibilities: time moving forward to see the result, and time moving backward to discover the cause.",
      pageUrl: "writings/blank-view-script.html",
    },
  ],

  // ── Music ─────────────────────────────────────────────────
  // audioFile: path relative to index.html, e.g. "images/music/track.mp3"
  // Leave audioFile as "" to show external link only
  music: [
    {
      title:       "The Weight of Forgetting",
      gameId:      "echoes-of-the-hollow",
      desc:        "Main theme. Piano and ambient strings, built around a motif that returns in every ending — slightly different each time.",
      audioFile:   "",
      duration:    "3:42",
      externalUrl: "#",
    },
  ],

  // ── Collage (hero right panel) ────────────────────────────
  // scale = % of panel width; aspect ratio preserved automatically.
  // top/left = % of panel. rot = degrees.
  collage: [

    { src:'images/homepage/IMG_3209.jpg',                               scale:42, top: -5, left:60, rot: 0, link: 'https://www.youtube.com/watch?v=07qTFruvp3M&list=RD07qTFruvp3M&start_radio=1'},
    { src:'images/homepage/IMG_3869.jpg',                               scale:38, top:-5, left:-17, rot:-5 , link: 'https://maps.app.goo.gl/vAFPBh4osEvo7vz77'},
    { src:'images/homepage/Image_20260313163934_88_50.jpg',             scale:50, top:50, left:50, rot:-3 },
    { src:'images/homepage/pic5.jpg',                               scale:40, top:50, left:-20, rot:0 },
      { src:'images/homepage/profilepic.jpg',                  is_me:true, scale:52, top:10, left:12, rot: 0 },
    { src:'images/homepage/Image_20260313164013_95_50.jpg',             scale:50, top:-40, left:15, rot:90 },

    { src:'images/homepage/Image_20260313164011_94_50.jpg',             scale:40, top:25 , left:60, rot:0, link: 'https://science.nasa.gov/moon/'},
    { src:'images/homepage/Image_20260313163931_87_50.jpg',             scale:30, top:35 , left:-15, rot:0 },
    { src:'images/homepage/pic2.jpg',             scale:60, top:75 , left:-25, rot:0 },
    { src:'images/homepage/Image_20260313163946_91_50.jpg',             scale:60, top:80 , left:25, rot:0 },

  ]

};