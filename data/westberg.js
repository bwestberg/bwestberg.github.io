export const westberg = [
  {
    id: "oscar-westberg",
    name: "Oscar Westberg",
    branch: "Westberg",
    details: "",
    parents: [],
    spouses: ["martha-westberg"],
    children: ["axel-westberg"]
  },
  {
    id: "martha-westberg",
    name: "Martha Westberg",
    branch: "Westberg",
    details: "",
    parents: [],
    spouses: ["oscar-westberg"],
    children: ["axel-westberg"]
  },
  {
    id: "axel-westberg",
    name: "Axel Westberg",
    branch: "Westberg",
    details: "",
    parents: ["oscar-westberg", "martha-westberg"],
    spouses: ["myrtle-westberg"],
    children: ["ron-westberg", "roger-westberg"]
  },
  {
    id: "myrtle-westberg",
    name: "Myrtle Westberg",
    branch: "Westberg",
    details: "",
    parents: [],
    spouses: ["axel-westberg"],
    children: ["ron-westberg", "roger-westberg"]
  },
  {
    id: "ron-westberg",
    name: "Ron Westberg",
    branch: "Westberg",
    details: "",
    parents: ["axel-westberg", "myrtle-westberg"],
    spouses: ["sandra-losie"],
    children: ["darren-westberg", "kyle-westberg", "brent-westberg"]
  },
  {
    id: "sandra-losie",
    name: "Sandra Jean (Losie) Westberg",
    branch: "Losie",
    details: "",
    parents: ["james-losie", "shirley-losie"],
    spouses: ["ron-westberg"],
    children: ["darren-westberg", "kyle-westberg", "brent-westberg"]
  },
  {
    id: "brent-westberg",
    name: "Brent Westberg",
    branch: "Westberg",
    details: "",
    parents: ["ron-westberg", "sandra-losie"],
    spouses: ["cheri-lakin"],
    children: ["rachel-westberg", "alyssa-westberg"]
  },
  {
    id: "cheri-lakin",
    name: "Cheri Ann (Lakin) Westberg",
    branch: "Lakin",
    details: "",
    parents: ["carol-sawyer", "roger-lakin"],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"]
  },
  {
    id: "rachel-westberg",
    name: "Rachel Westberg",
    branch: "Westberg",
    details: "",
    parents: ["brent-westberg", "cheri-lakin"],
    spouses: [],
    children: []
  },
  {
    id: "alyssa-westberg",
    name: "Alyssa Westberg",
    branch: "Westberg",
    details: "",
    parents: ["brent-westberg", "cheri-lakin"],
    spouses: [],
    children: []
  },
  {
    id: "roger-westberg",
    name: "Roger Westberg",
    branch: "Westberg",
    details: "",
    parents: ["axel-westberg", "myrtle-westberg"],
    spouses: [],
    children: []
  },
  {
    id: "darren-westberg",
    name: "Darren Westberg",
    branch: "Westberg",
    details: "",
    parents: ["ron-westberg", "sandra-losie"],
    spouses: [],
    children: []
  },
  {
    id: "kyle-westberg",
    name: "Kyle Westberg",
    branch: "Westberg",
    details: "",
    parents: ["ron-westberg", "sandra-losie"],
    spouses: [],
    children: []
  }
];
