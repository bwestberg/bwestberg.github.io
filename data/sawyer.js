export const sawyer = [
  // Brown / Chase ancestry
  {
    id: "fred-brown",
    name: "Fred E. Brown (1861–1917)",
    branch: "Brown",
    parents: [],
    spouses: [],
    children: ["harry-brown"]
  },
  {
    id: "harry-brown",
    name: "Harry Leroy Brown (1885–1939)",
    branch: "Brown",
    parents: ["fred-brown"],
    spouses: ["edna-chase"],
    children: ["cleda-brown"]
  },
  {
    id: "edna-chase",
    name: "Edna E. Chase (1889–1957)",
    branch: "Brown",
    parents: [],
    spouses: ["harry-brown"],
    children: ["cleda-brown"]
  },
  {
    id: "cleda-brown",
    name: "Cleda Lucille Brown (1916–1988)",
    branch: "Brown",
    parents: ["harry-brown", "edna-chase"],
    spouses: ["lawrence-sawyer"],
    children: ["carol-sawyer", "constance-sawyer", "becky-sawyer", "noel-sawyer", "tom-sawyer"]
  },

  // Sawyer parents
  {
    id: "lawrence-sawyer",
    name: "Lawrence Sawyer",
    branch: "Sawyer",
    parents: [],
    spouses: ["cleda-brown"],
    children: ["carol-sawyer", "constance-sawyer", "becky-sawyer", "noel-sawyer", "tom-sawyer"]
  },

  // Carol + siblings
  {
    id: "carol-sawyer",
    name: "Carol Ann Sawyer (1937–2016)",
    branch: "Sawyer",
    parents: ["lawrence-sawyer", "cleda-brown"],
    spouses: ["roger-lakin"],
    children: ["cheri-lakin", "tim-lakin"]
  },
  {
    id: "constance-sawyer",
    name: "Constance (Sawyer) Bennett",
    branch: "Sawyer",
    parents: ["lawrence-sawyer", "cleda-brown"],
    spouses: ["tony-bennett"],
    children: ["denny-bennett", "greg-bennett", "kelly-bennett", "jeff-bennett"]
  },
  {
    id: "tony-bennett",
    name: "Tony Bennett",
    branch: "Sawyer",
    parents: [],
    spouses: ["constance-sawyer"],
    children: ["denny-bennett", "greg-bennett", "kelly-bennett", "jeff-bennett"]
  },
  {
    id: "denny-bennett",
    name: "Denny Bennett",
    branch: "Sawyer",
    parents: ["constance-sawyer", "tony-bennett"],
    spouses: [],
    children: []
  },
  {
    id: "greg-bennett",
    name: "Greg Bennett",
    branch: "Sawyer",
    parents: ["constance-sawyer", "tony-bennett"],
    spouses: [],
    children: []
  },
  {
    id: "kelly-bennett",
    name: "Kelly Bennett",
    branch: "Sawyer",
    parents: ["constance-sawyer", "tony-bennett"],
    spouses: [],
    children: []
  },
  {
    id: "jeff-bennett",
    name: "Jeff Bennett",
    branch: "Sawyer",
    parents: ["constance-sawyer", "tony-bennett"],
    spouses: [],
    children: []
  },

  {
    id: "becky-sawyer",
    name: "Becky (Sawyer) Sims",
    branch: "Sawyer",
    parents: ["lawrence-sawyer", "cleda-brown"],
    spouses: ["tod-sims"],
    children: ["richard-sims-1", "ron-sims", "robin-sims", "randy-sims", "richard-sims-2"]
  },
  {
    id: "tod-sims",
    name: "Tod Sims",
    branch: "Sawyer",
    parents: [],
    spouses: ["becky-sawyer"],
    children: ["richard-sims-1", "ron-sims", "robin-sims", "randy-sims", "richard-sims-2"]
  },
  {
    id: "richard-sims-1",
    name: "Richard Sims",
    branch: "Sawyer",
    parents: ["becky-sawyer", "tod-sims"],
    spouses: [],
    children: []
  },
  {
    id: "ron-sims",
    name: "Ron Sims",
    branch: "Sawyer",
    parents: ["becky-sawyer", "tod-sims"],
    spouses: [],
    children: []
  },
  {
    id: "robin-sims",
    name: "Robin Sims",
    branch: "Sawyer",
    parents: ["becky-sawyer", "tod-sims"],
    spouses: [],
    children: []
  },
  {
    id: "randy-sims",
    name: "Randy Sims",
    branch: "Sawyer",
    parents: ["becky-sawyer", "tod-sims"],
    spouses: [],
    children: []
  },
  {
    id: "richard-sims-2",
    name: "Richard Sims (second)",
    branch: "Sawyer",
    parents: ["becky-sawyer", "tod-sims"],
    spouses: [],
    children: []
  },

  {
    id: "noel-sawyer",
    name: "Noel (Sawyer) Babbitt",
    branch: "Sawyer",
    parents: ["lawrence-sawyer", "cleda-brown"],
    spouses: ["mr-babbitt"],
    children: ["dan-babbitt", "darren-babbitt"]
  },
  {
    id: "mr-babbitt",
    name: "Mr. Babbitt",
    branch: "Sawyer",
    parents: [],
    spouses: ["noel-sawyer"],
    children: ["dan-babbitt", "darren-babbitt"]
  },
  {
    id: "dan-babbitt",
    name: "Dan Babbitt",
    branch: "Sawyer",
    parents: ["noel-sawyer", "mr-babbitt"],
    spouses: [],
    children: []
  },
  {
    id: "darren-babbitt",
    name: "Darren Babbitt",
    branch: "Sawyer",
    parents: ["noel-sawyer", "mr-babbitt"],
    spouses: [],
    children: []
  },

  {
    id: "tom-sawyer",
    name: "Tom Sawyer",
    branch: "Sawyer",
    parents: ["lawrence-sawyer", "cleda-brown"],
    spouses: ["debbie-sawyer"],
    children: ["heidi-sawyer", "trevor-sawyer"]
  },
  {
    id: "debbie-sawyer",
    name: "Debbie Sawyer",
    branch: "Sawyer",
    parents: [],
    spouses: ["tom-sawyer"],
    children: ["heidi-sawyer", "trevor-sawyer"]
  },
  {
    id: "heidi-sawyer",
    name: "Heidi Sawyer",
    branch: "Sawyer",
    parents: ["tom-sawyer", "debbie-sawyer"],
    spouses: [],
    children: []
  },
  {
    id: "trevor-sawyer",
    name: "Trevor Sawyer",
    branch: "Sawyer",
    parents: ["tom-sawyer", "debbie-sawyer"],
    spouses: [],
    children: []
  }
];
