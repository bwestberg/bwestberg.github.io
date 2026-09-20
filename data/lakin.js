export const lakin = [
  {
    id: "john-hayes-lakin",
    name: "John Hayes Lakin (d. 1969)",
    branch: "Lakin",
    details: "",
    parents: [],
    spouses: ["mary-lakin"],
    children: ["harold-lakin"]
  },
  {
    id: "mary-lakin",
    name: "Mary Lakin",
    branch: "Lakin",
    details: "",
    parents: [],
    spouses: ["john-hayes-lakin"],
    children: ["harold-lakin"]
  },
  {
    id: "harold-lakin",
    name: "Harold D. Lakin",
    branch: "Lakin",
    details: "",
    parents: ["john-hayes-lakin", "mary-lakin"],
    spouses: ["betty-lakin"],
    children: ["roger-lakin", "jim-lakin", "douglas-lakin", "kenneth-lakin", "barbara-lakin"]
  },
  {
    id: "betty-lakin",
    name: "Betty Lakin",
    branch: "Lakin",
    details: "",
    parents: [],
    spouses: ["harold-lakin"],
    children: ["roger-lakin", "jim-lakin", "douglas-lakin", "kenneth-lakin", "barbara-lakin"]
  },
  {
    id: "roger-lakin",
    name: "Roger Lakin",
    branch: "Lakin",
    details: "",
    parents: ["harold-lakin", "betty-lakin"],
    spouses: ["carol-sawyer"],
    children: ["cheri-lakin", "tim-lakin"]
  },
  {
    id: "carol-sawyer",
    name: "Carol Ann Sawyer",
    branch: "Sawyer",
    details: "",
    parents: ["lawrence-sawyer", "cleda-brown"],
    spouses: ["roger-lakin"],
    children: ["cheri-lakin", "tim-lakin"]
  },
  {
    id: "cheri-lakin",
    name: "Cheri Ann Lakin",
    branch: "Lakin",
    details: "",
    parents: ["carol-sawyer", "roger-lakin"],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"]
  },
  {
    id: "tim-lakin",
    name: "Tim Lakin",
    branch: "Lakin",
    details: "",
    parents: ["carol-sawyer", "roger-lakin"],
    spouses: [],
    children: []
  }
];
