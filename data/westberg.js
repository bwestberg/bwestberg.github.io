export const westberg = [
  {
    id: "oscar-westberg",
    name: "Oscar Westberg",
    branch: "Westberg",
    parents: [],
    spouses: ["martha-hornstrom"],
    children: ["axel-westberg"]
  },
  {
    id: "martha-hornstrom",
    name: "Martha Selina Hornstrom",
    branch: "Westberg",
    parents: [],
    spouses: ["oscar-westberg"],
    children: ["axel-westberg"]
  },
  {
    id: "axel-westberg",
    name: "Axel Westberg (1909–1986)",
    branch: "Westberg",
    parents: ["oscar-westberg", "martha-hornstrom"],
    spouses: ["myrtle-lafever"],
    children: ["ron-westberg", "roger-westberg"]
  },
  {
    id: "myrtle-lafever",
    name: "Myrtle LaFever (1914–2002)",
    branch: "Westberg",
    parents: ["harmedos-lafever", "phoebe-raymond"],
    spouses: ["axel-westberg"],
    children: ["ron-westberg", "roger-westberg"]
  },

  // Ron’s branch
  {
    id: "ron-westberg",
    name: "Ronald 'Ron' Westberg (1935)",
    branch: "Westberg",
    parents: ["axel-westberg", "myrtle-lafever"],
    spouses: ["sandra-losie"],
    children: ["darren-westberg", "kyle-westberg", "brent-westberg"]
  },
  {
    id: "sandra-losie",
    name: "Sandra Jean Losie (1940)",
    branch: "Westberg",
    parents: ["james-losie", "mildred-bearance"],
    spouses: ["ron-westberg"],
    children: ["darren-westberg", "kyle-westberg", "brent-westberg"]
  },

  // Brent’s line
  {
    id: "brent-westberg",
    name: "Brent Westberg (1968)",
    branch: "Westberg",
    parents: ["ron-westberg", "sandra-losie"],
    spouses: ["cheri-lakin"],
    children: ["rachel-westberg", "alyssa-westberg"]
  },
  {
    id: "cheri-lakin",
    name: "Cheri Ann Lakin (1967)",
    branch: "Westberg",
    parents: ["roger-lakin", "carol-sawyer"],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"]
  },
  {
    id: "rachel-westberg",
    name: "Rachel Westberg (1998)",
    branch: "Westberg",
    parents: ["brent-westberg", "cheri-lakin"],
    spouses: [],
    children: []
  },
  {
    id: "alyssa-westberg",
    name: "Alyssa Westberg (2000)",
    branch: "Westberg",
    parents: ["brent-westberg", "cheri-lakin"],
    spouses: [],
    children: []
  },

  // Kyle’s line
  {
    id: "kyle-westberg",
    name: "Kyle James Westberg (1966)",
    branch: "Westberg",
    parents: ["ron-westberg", "sandra-losie"],
    spouses: ["audra-hawke"],
    children: ["ethan-westberg", "erin-westberg", "benjamin-westberg"]
  },
  {
    id: "audra-hawke",
    name: "Audra Hawke (1967)",
    branch: "Westberg",
    parents: [],
    spouses: ["kyle-westberg"],
    children: ["ethan-westberg", "erin-westberg", "benjamin-westberg"]
  },

  // Roger’s branch
  {
    id: "roger-westberg",
    name: "Roger Westberg (1936)",
    branch: "Westberg",
    parents: ["axel-westberg", "myrtle-lafever"],
    spouses: ["marnee-rogers", "ellen-westberg"],
    children: ["eric-westberg", "vicki-young", "wendy-rish", "marcy-check"]
  },
  {
    id: "marnee-rogers",
    name: "Marnee (Rogers) Westberg",
    branch: "Westberg",
    parents: [],
    spouses: ["roger-westberg"],
    children: ["eric-westberg", "vicki-young", "wendy-rish", "marcy-check"]
  },
  {
    id: "ellen-westberg",
    name: "Ellen Westberg",
    branch: "Westberg",
    parents: [],
    spouses: ["roger-westberg"],
    children: []
  },

  // Roger’s children
  {
    id: "eric-westberg",
    name: "Eric Westberg (1965)",
    branch: "Westberg",
    parents: ["roger-westberg", "marnee-rogers"],
    spouses: [],
    children: []
  },
  {
    id: "vicki-young",
    name: "Vicki (Westberg) Young",
    branch: "Westberg",
    parents: ["roger-westberg", "marnee-rogers"],
    spouses: ["young"],
    children: []
  },
  {
    id: "wendy-rish",
    name: "Wendy (Westberg) Rish",
    branch: "Westberg",
    parents: ["roger-westberg", "marnee-rogers"],
    spouses: ["steve-rish"],
    children: ["steven-rish", "roby-rish"]
  },
  {
    id: "steve-rish",
    name: "Steve Rish",
    branch: "Westberg",
    parents: [],
    spouses: ["wendy-rish"],
    children: ["steven-rish", "roby-rish"]
  },
  {
    id: "steven-rish",
    name: "Steven Rish",
    branch: "Westberg",
    parents: ["steve-rish", "wendy-rish"],
    spouses: [],
    children: []
  },
  {
    id: "roby-rish",
    name: "Roby Rish",
    branch: "Westberg",
    parents: ["steve-rish", "wendy-rish"],
    spouses: [],
    children: []
  },
  {
    id: "marcy-check",
    name: "Marcy (Westberg) Check (1967)",
    branch: "Westberg",
    parents: ["roger-westberg", "marnee-rogers"],
    spouses: ["check"],
    children: []
  }
];
