export const westberg = [
  {
    id: "unknown-swedish-ancestor",
    name: "Unknown Swedish Ancestor",
    branch: "Westberg",
    details: "",
    parents: [],
    spouses: [],
    children: ["oscar-westberg"]
  },
  {
    id: "oscar-westberg",
    name: "Oscar Westberg",
    branch: "Westberg",
    details: "",
    parents: ["unknown-swedish-ancestor"],
    spouses: ["martha-hornstrom"],
    children: ["axel-westberg"]
  },
  {
    id: "martha-hornstrom",
    name: "Martha Selina Hornstrom (born 1871, Sweden)",
    branch: "Westberg",
    details: "",
    parents: [],
    spouses: ["oscar-westberg"],
    children: ["axel-westberg"]
  },
  {
    id: "axel-westberg",
    name: "Axel Westberg (1909–1986)",
    branch: "Westberg",
    details: "Born: Minnesota; Died: Beaverton, Michigan",
    parents: ["oscar-westberg", "martha-hornstrom"],
    spouses: ["myrtle-lafever"],
    children: ["ron-westberg", "roger-westberg"]
  },
  {
    id: "myrtle-lafever",
    name: "Myrtle LaFever (1914–2002)",
    branch: "Westberg",
    details: "Parents: Harmedos “Medos/Hodges” LaFever & Phoebe Raymond",
    parents: [],
    spouses: ["axel-westberg"],
    children: ["ron-westberg", "roger-westberg"]
  },
  {
    id: "ron-westberg",
    name: "Ronald “Ron” Westberg (born 1935)",
    branch: "Westberg",
    details: "",
    parents: ["axel-westberg", "myrtle-lafever"],
    spouses: ["sandra-jean-losie"],
    children: ["darren-westberg", "kyle-westberg", "brent-westberg"]
  },
  {
    id: "sandra-jean-losie",
    name: "Sandra Jean Losie (born 1940)",
    branch: "Losie",
    details: "Parents: James Elon Losie (1918–2002) & Mildred Ilene Bearance (1919–2018)",
    parents: [],
    spouses: ["ron-westberg"],
    children: ["darren-westberg", "kyle-westberg", "brent-westberg"]
  },
  {
    id: "darren-westberg",
    name: "Darren M. Westberg (born 1963)",
    branch: "Westberg",
    details: "",
    parents: ["ron-westberg", "sandra-jean-losie"],
    spouses: [],
    children: []
  },
  {
    id: "kyle-westberg",
    name: "Kyle James Westberg (born 1966)",
    branch: "Westberg",
    details: "",
    parents: ["ron-westberg", "sandra-jean-losie"],
    spouses: ["audra-hawke"],
    children: ["ethan-westberg", "erin-westberg", "benjamin-westberg"]
  },
  {
    id: "audra-hawke",
    name: "Audra Hawke (born 1967)",
    branch: "Westberg",
    details: "",
    parents: [],
    spouses: ["kyle-westberg"],
    children: ["ethan-westberg", "erin-westberg", "benjamin-westberg"]
  },
  {
    id: "ethan-westberg",
    name: "Ethan William Westberg (born 1997)",
    branch: "Westberg",
    details: "",
    parents: ["kyle-westberg", "audra-hawke"],
    spouses: [],
    children: []
  },
  {
    id: "erin-westberg",
    name: "Erin Elizabeth Westberg (born 1999)",
    branch: "Westberg",
    details: "Spouse: Megan Litchfield",
    parents: ["kyle-westberg", "audra-hawke"],
    spouses: ["megan-litchfield"],
    children: []
  },
  {
    id: "megan-litchfield",
    name: "Megan Litchfield",
    branch: "Westberg",
    details: "",
    parents: [],
    spouses: ["erin-westberg"],
    children: []
  },
  {
    id: "benjamin-westberg",
    name: "Benjamin James Westberg (born 2003)",
    branch: "Westberg",
    details: "",
    parents: ["kyle-westberg", "audra-hawke"],
    spouses: [],
    children: []
  },
  {
    id: "brent-westberg",
    name: "Brent Westberg (born March 30, 1968)",
    branch: "Westberg",
    details: "",
    parents: ["ron-westberg", "sandra-jean-losie"],
    spouses: ["cheri-ann-lakin"],
    children: ["rachel-westberg", "alyssa-westberg"]
  },
  {
    id: "cheri-ann-lakin",
    name: "Cheri Ann Lakin (born 1967)",
    branch: "Lakin",
    details: "Parents: Roger W. Lakin (1935–2024) & Carol Ann Sawyer (1937–2016)",
    parents: [],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"]
  },
  {
    id: "rachel-westberg",
    name: "Rachel Westberg (born 1998)",
    branch: "Westberg",
    details: "",
    parents: ["brent-westberg", "cheri-ann-lakin"],
    spouses: [],
    children: []
  },
  {
    id: "alyssa-westberg",
    name: "Alyssa Westberg (born 2000)",
    branch: "Westberg",
    details: "",
    parents: ["brent-westberg", "cheri-ann-lakin"],
    spouses: [],
    children: []
  },
  {
    id: "roger-westberg",
    name: "Roger Westberg (born November 15, 1936)",
    branch: "Westberg",
    details: "",
    parents: ["axel-westberg", "myrtle-lafever"],
    spouses: ["marnee-rogers", "ellen-westberg"],
    children: ["eric-westberg", "vicki-westberg", "wendy-westberg", "marcy-westberg"]
  },
  {
    id: "marnee-rogers",
    name: "Marnee (Rogers) Westberg",
    branch: "Westberg",
    details: "First wife — biological mother of all children",
    parents: [],
    spouses: ["roger-westberg"],
    children: ["eric-westberg", "vicki-westberg", "wendy-westberg", "marcy-westberg"]
  },
  {
    id: "ellen-westberg",
    name: "Ellen Westberg",
    branch: "Westberg",
    details: "Second wife — stepmother to Eric, Vicki, Wendy, and Marcy",
    parents: [],
    spouses: ["roger-westberg"],
    children: []
  },
  {
    id: "eric-westberg",
    name: "Eric Westberg (born March 5, 1965 — Detroit, Michigan)",
    branch: "Westberg",
    details: "",
    parents: ["roger-westberg", "marnee-rogers"],
    spouses: [],
    children: []
  },
  {
    id: "vicki-westberg",
    name: "Vicki (Westberg) Young",
    branch: "Westberg",
    details: "",
    parents: ["roger-westberg", "marnee-rogers"],
    spouses: ["mr-young"],
    children: []
  },
  {
    id: "mr-young",
    name: "Young (spouse of Vicki)",
    branch: "Westberg",
    details: "",
    parents: [],
    spouses: ["vicki-westberg"],
    children: []
  },
  {
    id: "wendy-westberg",
    name: "Wendy (Westberg) Rish",
    branch: "Westberg",
    details: "",
    parents: ["roger-westberg", "marnee-rogers"],
    spouses: ["steve-rish"],
    children: ["steven-rish", "roby-rish"]
  },
  {
    id: "steve-rish",
    name: "Steve Rish",
    branch: "Westberg",
    details: "",
    parents: [],
    spouses: ["wendy-westberg"],
    children: ["steven-rish", "roby-rish"]
  },
  {
    id: "steven-rish",
    name: "Steven Rish",
    branch: "Westberg",
    details: "",
    parents: ["wendy-westberg", "steve-rish"],
    spouses: [],
    children: []
  },
  {
    id: "roby-rish",
    name: "Roby Rish",
    branch: "Westberg",
    details: "",
    parents: ["wendy-westberg", "steve-rish"],
    spouses: [],
    children: []
  },
  {
    id: "marcy-westberg",
    name: "Marcy (Westberg) Check (born January 16, 1967 — Detroit, Michigan)",
    branch: "Westberg",
    details: "",
    parents: ["roger-westberg", "marnee-rogers"],
    spouses: [],
    children: []
  }
];
