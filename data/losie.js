export const losie = [

  // LOSIE ROOT LINE
  {
    id: "george-leo-losie",
    name: "George Leo Losie",
    branch: "Losie",
    parents: ["john-wesley-losie", "eleanor-waite"],
    spouses: ["esther-alice-bearss"],
    children: [
      "sarah-e-losie",
      "john-e-losie",
      "asenath-ann-losie",
      "bertha-alma-losie",
      "lizanna-a-losie",
      "anna-a-lizanna-losie",
      "ellen-a-losie",
      "elon-albert-losie",
      "earl-judson-losie"
    ]
  },

  {
    id: "esther-alice-bearss",
    name: "Esther Alice Bearss",
    branch: "Bearss",
    parents: ["ephraim-bearss", "sarah-roszell"],
    spouses: ["george-leo-losie"],
    children: [
      "sarah-e-losie",
      "john-e-losie",
      "asenath-ann-losie",
      "bertha-alma-losie",
      "lizanna-a-losie",
      "anna-a-lizanna-losie",
      "ellen-a-losie",
      "elon-albert-losie",
      "earl-judson-losie"
    ]
  },

  {
    id: "earl-judson-losie",
    name: "Earl Judson Losie",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-alice-bearss"],
    spouses: ["ethel-m-wood"],
    children: [
      "earl-judson-losie-jr",
      "george-malcom-losie",
      "charles-ferris-losie",
      "james-elon-losie"
    ]
  },

  {
    id: "ethel-m-wood",
    name: "Ethel M. Wood",
    branch: "Wood",
    parents: ["malcom-wood", "margaret-adeline-caspar"],
    spouses: ["earl-judson-losie"],
    children: [
      "earl-judson-losie-jr",
      "george-malcom-losie",
      "charles-ferris-losie",
      "james-elon-losie"
    ]
  },

  // CHILDREN OF EARL & ETHEL
  {
    id: "earl-judson-losie-jr",
    name: "Earl Judson Losie Jr.",
    branch: "Losie",
    parents: ["earl-judson-losie", "ethel-m-wood"],
    spouses: ["ellen-losie", "joan-t-szczepanski"],
    children: []
  },

  {
    id: "ellen-losie",
    name: "Ellen Losie",
    branch: "Losie",
    parents: [],
    spouses: ["earl-judson-losie-jr"],
    children: []
  },

  {
    id: "joan-t-szczepanski",
    name: "Joan T. Szczepanski",
    branch: "Szczepanski",
    parents: [],
    spouses: ["earl-judson-losie-jr"],
    children: []
  },

  {
    id: "george-malcom-losie",
    name: "George Malcom Losie",
    branch: "Losie",
    parents: ["earl-judson-losie", "ethel-m-wood"],
    spouses: ["dorothy-lucille-schwartz"],
    children: []
  },

  {
    id: "dorothy-lucille-schwartz",
    name: "Dorothy Lucille Schwartz",
    branch: "Schwartz",
    parents: [],
    spouses: ["george-malcom-losie"],
    children: []
  },

  {
    id: "charles-ferris-losie",
    name: "Charles Ferris Losie",
    branch: "Losie",
    parents: ["earl-judson-losie", "ethel-m-wood"],
    spouses: ["betty-mae-bruner"],
    children: []
  },

  {
    id: "betty-mae-bruner",
    name: "Betty Mae Bruner",
    branch: "Bruner",
    parents: [],
    spouses: ["charles-ferris-losie"],
    children: []
  },

  {
    id: "james-elon-losie",
    name: "James Elon Losie",
    branch: "Losie",
    parents: ["earl-judson-losie", "ethel-m-wood"],
    spouses: ["mildred-ilene-bearance"],
    children: []
  },

  {
    id: "mildred-ilene-bearance",
    name: "Mildred Ilene Bearance",
    branch: "Bearance",
    parents: ["charlotte-anne-nicholson", "john-b-bearance"],
    spouses: ["james-elon-losie"],
    children: []
  },

  // GEORGE LEO LOSIE SIBLINGS
  {
    id: "sarah-e-losie",
    name: "Sarah E. Losie",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-alice-bearss"],
    spouses: [],
    children: []
  },

  {
    id: "john-e-losie",
    name: "John E. Losie",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-alice-bearss"],
    spouses: [],
    children: []
  },

  {
    id: "asenath-ann-losie",
    name: "Asenath Ann Losie",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-alice-bearss"],
    spouses: [],
    children: []
  },

  {
    id: "bertha-alma-losie",
    name: "Bertha Alma Losie",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-alice-bearss"],
    spouses: [],
    children: []
  },

  {
    id: "lizanna-a-losie",
    name: "Lizanna A. Losie",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-alice-bearss"],
    spouses: [],
    children: []
  },

  {
    id: "anna-a-lizanna-losie",
    name: "Anna A. (Lizanna) Losie",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-alice-bearss"],
    spouses: [],
    children: []
  },

  {
    id: "ellen-a-losie",
    name: "Ellen A. Losie",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-alice-bearss"],
    spouses: [],
    children: []
  },

  {
    id: "elon-albert-losie",
    name: "Elon Albert Losie",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-alice-bearss"],
    spouses: [],
    children: []
  },

  // BEARSS / ROSZELL LINE
  {
    id: "ephraim-bearss",
    name: "Ephraim Burss / Bearss",
    branch: "Bearss",
    parents: [],
    spouses: ["sarah-roszell"],
    children: ["esther-alice-bearss"]
  },

  {
    id: "sarah-roszell",
    name: "Sarah Roszell",
    branch: "Roszell",
    parents: [],
    spouses: ["ephraim-bearss"],
    children: ["esther-alice-bearss"]
  },

  // WOOD / CASPAR LINE
  {
    id: "malcom-wood",
    name: "Malcom Wood",
    branch: "Wood",
    parents: [],
    spouses: ["margaret-adeline-caspar"],
    children: ["ethel-m-wood"]
  },

  {
    id: "margaret-adeline-caspar",
    name: "Margaret Adeline \"Addie\" Caspar",
    branch: "Caspar",
    parents: [],
    spouses: ["malcom-wood"],
    children: ["ethel-m-wood"]
  },

  // WOODMAN / LAMBERTON LINE (ancestors of Wood/Caspar side)
  {
    id: "samuel-d-woodman",
    name: "Samuel D. Woodman",
    branch: "Woodman",
    parents: [],
    spouses: ["ruth-elizabeth-lamberton"],
    children: []
  },

  {
    id: "ruth-elizabeth-lamberton",
    name: "Ruth Elizabeth Lamberton",
    branch: "Lamberton",
    parents: [],
    spouses: ["samuel-d-woodman"],
    children: []
  },

  // NICHOLSON / BEARANCE CONNECTION
  {
    id: "charlotte-anne-nicholson",
    name: "Charlotte Anne Nicholson",
    branch: "Nicholson",
    parents: [],
    spouses: ["john-b-bearance"],
    children: ["mildred-ilene-bearance"]
  },

  {
    id: "john-b-bearance",
    name: "John B. Bearance",
    branch: "Bearance",
    parents: [],
    spouses: ["charlotte-anne-nicholson"],
    children: ["mildred-ilene-bearance"]
  },

  // DEEP LOSEE / KOECK / VANFLAESBECK / DENTON LINE (summarized)
  {
    id: "laurens-corneliszen-koeck",
    name: "Laurens Corneliszen Koeck",
    branch: "Losee",
    parents: [],
    spouses: ["margrietje-barents-vanflaesbeck"],
    children: []
  },

  {
    id: "margrietje-barents-vanflaesbeck",
    name: "Margrietje Barents VanFlaesbeck",
    branch: "Losee",
    parents: [],
    spouses: ["laurens-corneliszen-koeck"],
    children: []
  },

  {
    id: "laurens-losee",
    name: "Laurens Losee",
    branch: "Losee",
    parents: [],
    spouses: [],
    children: []
  },

  {
    id: "jan-john-l-losee",
    name: "Jan \"John L.\" Losee",
    branch: "Losee",
    parents: [],
    spouses: [],
    children: []
  },

  {
    id: "lawrence-losee",
    name: "Lawrence Losee",
    branch: "Losee",
    parents: [],
    spouses: [],
    children: []
  },

  {
    id: "john-wesley-losie",
    name: "John Wesley Losie",
    branch: "Losie",
    parents: [],
    spouses: ["eleanor-waite"],
    children: ["george-leo-losie"]
  },

  {
    id: "eleanor-waite",
    name: "Eleanor Waite",
    branch: "Waite",
    parents: [],
    spouses: ["john-wesley-losie"],
    children: ["george-leo-losie"]
  }

];
