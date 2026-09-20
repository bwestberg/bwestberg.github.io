export const lakin = [
  // Grandparents
  {
    id: "harold-lakin",
    name: "Harold D. Lakin",
    branch: "Lakin",
    parents: ["john-hayes-lakin"],
    spouses: ["mabel-meade"],
    children: ["barbara-lakin", "douglas-lakin", "jim-lakin", "kenneth-lakin", "roger-lakin"]
  },
  {
    id: "mabel-meade",
    name: "Mabel (Meade) Lakin",
    branch: "Lakin",
    parents: ["george-meade", "anna-oconnell"],
    spouses: ["harold-lakin"],
    children: ["barbara-lakin", "douglas-lakin", "jim-lakin", "kenneth-lakin", "roger-lakin"]
  },

  // Great‑grandparents (Meade / O’Connell)
  {
    id: "george-meade",
    name: "George Meade (1888–1954)",
    branch: "Lakin",
    parents: ["patrick-meade", "mary-flannery"],
    spouses: ["anna-oconnell"],
    children: ["mabel-meade"]
  },
  {
    id: "anna-oconnell",
    name: "Anna (O’Connell) Meade (1890–1962)",
    branch: "Lakin",
    parents: ["michael-oconnell", "bridget-kelly"],
    spouses: ["george-meade"],
    children: ["mabel-meade"]
  },

  // Earlier Meade / O’Connell
  {
    id: "patrick-meade",
    name: "Patrick Meade",
    branch: "Lakin",
    parents: [],
    spouses: ["mary-flannery"],
    children: ["george-meade"]
  },
  {
    id: "mary-flannery",
    name: "Mary Catherine Flannery",
    branch: "Lakin",
    parents: [],
    spouses: ["patrick-meade"],
    children: ["george-meade"]
  },
  {
    id: "michael-oconnell",
    name: "Michael O’Connell",
    branch: "Lakin",
    parents: [],
    spouses: ["bridget-kelly"],
    children: ["anna-oconnell"]
  },
  {
    id: "bridget-kelly",
    name: "Bridget Kelly",
    branch: "Lakin",
    parents: [],
    spouses: ["michael-oconnell"],
    children: ["anna-oconnell"]
  },

  // Great‑grandfather Lakin
  {
    id: "john-hayes-lakin",
    name: "John Hayes Lakin (d. 1969)",
    branch: "Lakin",
    parents: [],
    spouses: [],
    children: ["harold-lakin"]
  },

  // Harold & Mabel’s children
  {
    id: "barbara-lakin",
    name: "Barbara Lakin",
    branch: "Lakin",
    parents: ["harold-lakin", "mabel-meade"],
    spouses: ["wayne-sherwood"],
    children: []
  },
  {
    id: "wayne-sherwood",
    name: "Wayne Sherwood",
    branch: "Lakin",
    parents: [],
    spouses: ["barbara-lakin"],
    children: []
  },
  {
    id: "douglas-lakin",
    name: "Douglas Lakin",
    branch: "Lakin",
    parents: ["harold-lakin", "mabel-meade"],
    spouses: ["marge-lakin"],
    children: []
  },
  {
    id: "marge-lakin",
    name: "Marge Lakin",
    branch: "Lakin",
    parents: [],
    spouses: ["douglas-lakin"],
    children: []
  },
  {
    id: "jim-lakin",
    name: "James “Jim” Lakin (1934–2021)",
    branch: "Lakin",
    parents: ["harold-lakin", "mabel-meade"],
    spouses: ["jannet-lakin"],
    children: ["jim-lakin-jr", "jon-lakin", "jeff-lakin", "jacklyn-lakin"]
  },
  {
    id: "jannet-lakin",
    name: "Jannet Lakin",
    branch: "Lakin",
    parents: [],
    spouses: ["jim-lakin"],
    children: ["jim-lakin-jr", "jon-lakin", "jeff-lakin", "jacklyn-lakin"]
  },
  {
    id: "jim-lakin-jr",
    name: "Jim Lakin Jr.",
    branch: "Lakin",
    parents: ["jim-lakin", "jannet-lakin"],
    spouses: ["dawn-lakin"],
    children: []
  },
  {
    id: "dawn-lakin",
    name: "Dawn Lakin",
    branch: "Lakin",
    parents: [],
    spouses: ["jim-lakin-jr"],
    children: []
  },
  {
    id: "jon-lakin",
    name: "Jon Lakin",
    branch: "Lakin",
    parents: ["jim-lakin", "jannet-lakin"],
    spouses: [],
    children: []
  },
  {
    id: "jeff-lakin",
    name: "Jeff Lakin",
    branch: "Lakin",
    parents: ["jim-lakin", "jannet-lakin"],
    spouses: ["ashlee-lakin"],
    children: []
  },
  {
    id: "ashlee-lakin",
    name: "Ashlee Lakin",
    branch: "Lakin",
    parents: [],
    spouses: ["jeff-lakin"],
    children: []
  },
  {
    id: "jacklyn-lakin",
    name: "Jacklyn Renee Lakin (deceased)",
    branch: "Lakin",
    parents: ["jim-lakin", "jannet-lakin"],
    spouses: [],
    children: []
  },

  {
    id: "kenneth-lakin",
    name: "Kenneth Lakin",
    branch: "Lakin",
    parents: ["harold-lakin", "mabel-meade"],
    spouses: ["jannet-kenneth"],
    children: []
  },
  {
    id: "jannet-kenneth",
    name: "Jannet (wife of Kenneth)",
    branch: "Lakin",
    parents: [],
    spouses: ["kenneth-lakin"],
    children: []
  },

  // Roger & Carol
  {
    id: "roger-lakin",
    name: "Roger W. Lakin (1935–2024)",
    branch: "Lakin",
    parents: ["harold-lakin", "mabel-meade"],
    spouses: ["carol-sawyer"],
    children: ["cheri-lakin", "tim-lakin"]
  },
  {
    id: "carol-sawyer",
    name: "Carol Ann (Sawyer) Lakin (1937–2016)",
    branch: "Lakin",
    parents: ["lawrence-sawyer", "cleda-brown"],
    spouses: ["roger-lakin"],
    children: ["cheri-lakin", "tim-lakin"]
  },
  {
    id: "cheri-lakin",
    name: "Cheri Ann Lakin (1967)",
    branch: "Lakin",
    parents: ["roger-lakin", "carol-sawyer"],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"]
  },
  {
    id: "tim-lakin",
    name: "Timothy C. Lakin",
    branch: "Lakin",
    parents: ["roger-lakin", "carol-sawyer"],
    spouses: [],
    children: []
  }
];
