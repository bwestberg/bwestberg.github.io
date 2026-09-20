export const losie = [

  {
    id: "earl-judson-losie",
    name: "Earl Judson Losie",
    branch: "Losie",
    parents: [],
    spouses: ["margaret-bearss"],
    children: [
      "earl-judson-losie-jr",
      "george-malcom-losie",
      "charles-ferris-losie"
    ]
  },

  {
    id: "margaret-bearss",
    name: "Margaret Bearss",
    branch: "Bearss",
    parents: [],
    spouses: ["earl-judson-losie"],
    children: [
      "earl-judson-losie-jr",
      "george-malcom-losie",
      "charles-ferris-losie"
    ]
  },

  {
    id: "earl-judson-losie-jr",
    name: "Earl Judson Losie Jr.",
    branch: "Losie",
    parents: ["earl-judson-losie", "margaret-bearss"],
    spouses: ["betty-jo-losie"],
    children: ["david-losie", "karen-losie"]
  },

  {
    id: "betty-jo-losie",
    name: "Betty Jo Losie",
    branch: "Losie",
    parents: [],
    spouses: ["earl-judson-losie-jr"],
    children: ["david-losie", "karen-losie"]
  },

  {
    id: "david-losie",
    name: "David Losie",
    branch: "Losie",
    parents: ["earl-judson-losie-jr", "betty-jo-losie"],
    spouses: [],
    children: []
  },

  {
    id: "karen-losie",
    name: "Karen Losie",
    branch: "Losie",
    parents: ["earl-judson-losie-jr", "betty-jo-losie"],
    spouses: [],
    children: []
  },

  {
    id: "george-malcom-losie",
    name: "George Malcom Losie",
    branch: "Losie",
    parents: ["earl-judson-losie", "margaret-bearss"],
    spouses: ["shirley-losie"],
    children: ["steven-losie", "linda-losie"]
  },

  {
    id: "shirley-losie",
    name: "Shirley Losie",
    branch: "Losie",
    parents: [],
    spouses: ["george-malcom-losie"],
    children: ["steven-losie", "linda-losie"]
  },

  {
    id: "steven-losie",
    name: "Steven Losie",
    branch: "Losie",
    parents: ["george-malcom-losie", "shirley-losie"],
    spouses: [],
    children: []
  },

  {
    id: "linda-losie",
    name: "Linda Losie",
    branch: "Losie",
    parents: ["george-malcom-losie", "shirley-losie"],
    spouses: [],
    children: []
  },

  {
    id: "charles-ferris-losie",
    name: "Charles Ferris Losie",
    branch: "Losie",
    parents: ["earl-judson-losie", "margaret-bearss"],
    spouses: ["joan-losie"],
    children: ["bruce-losie", "susan-losie"]
  },

  {
    id: "joan-losie",
    name: "Joan Losie",
    branch: "Losie",
    parents: [],
    spouses: ["charles-ferris-losie"],
    children: ["bruce-losie", "susan-losie"]
  },

  {
    id: "bruce-losie",
    name: "Bruce Losie",
    branch: "Losie",
    parents: ["charles-ferris-losie", "joan-losie"],
    spouses: [],
    children: []
  },

  {
    id: "susan-losie",
    name: "Susan Losie",
    branch: "Losie",
    parents: ["charles-ferris-losie", "joan-losie"],
    spouses: [],
    children: []
  }

];
