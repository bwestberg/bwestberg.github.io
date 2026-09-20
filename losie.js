export const losie = [
  // 🔹 Deep Losee / Koeck / VanFlaesbeck / Denton line

  {
    id: "laurens-koeck",
    name: "Laurens Corneliszen Koeck (1640–1702)",
    branch: "Losie",
    parents: [],
    spouses: ["margrietje-vanflaesbeck"],
    children: ["grietje-kouk"]
  },
  {
    id: "margrietje-vanflaesbeck",
    name: "Margrietje Barents VanFlaesbeck (1658–1702)",
    branch: "Losie",
    parents: [],
    spouses: ["laurens-koeck"],
    children: ["grietje-kouk"]
  },
  {
    id: "grietje-kouk",
    name: "Grietje Margaret Kouk",
    branch: "Losie",
    parents: ["laurens-koeck", "margrietje-vanflaesbeck"],
    spouses: ["simon-losee"],
    children: ["laurens-losee"]
  },
  {
    id: "simon-losee",
    name: "Simon Losee",
    branch: "Losie",
    parents: [],
    spouses: ["grietje-kouk"],
    children: ["laurens-losee"]
  },
  {
    id: "laurens-losee",
    name: "Laurens Losee (1705–1754)",
    branch: "Losie",
    parents: ["simon-losee", "grietje-kouk"],
    spouses: ["rachael-delange"],
    children: ["jan-losee"]
  },
  {
    id: "rachael-delange",
    name: "Rachael DeLange",
    branch: "Losie",
    parents: [],
    spouses: ["laurens-losee"],
    children: ["jan-losee"]
  },
  {
    id: "jan-losee",
    name: "Jan “John L.” Losee (1738–1788)",
    branch: "Losie",
    parents: ["laurens-losee", "rachael-delange"],
    spouses: ["mary-renny"],
    children: ["lawrence-losee"]
  },
  {
    id: "mary-renny",
    name: "Mary Renny",
    branch: "Losie",
    parents: [],
    spouses: ["jan-losee"],
    children: ["lawrence-losee"]
  },
  {
    id: "lawrence-losee",
    name: "Lawrence Losee (1765–1820)",
    branch: "Losie",
    parents: ["jan-losee", "mary-renny"],
    spouses: ["jane-vanvoorhees"],
    children: ["john-wesley-losie"]
  },
  {
    id: "jane-vanvoorhees",
    name: "Jane Van Voorhees",
    branch: "Losie",
    parents: [],
    spouses: ["lawrence-losee"],
    children: ["john-wesley-losie"]
  },
  {
    id: "john-wesley-losie",
    name: "John Wesley Losie (1797–1865)",
    branch: "Losie",
    parents: ["lawrence-losee", "jane-vanvoorhees"],
    spouses: ["eleanor-waite"],
    children: ["george-leo-losie"]
  },
  {
    id: "eleanor-waite",
    name: "Eleanor Waite",
    branch: "Losie",
    parents: [],
    spouses: ["john-wesley-losie"],
    children: ["george-leo-losie"]
  },

  // 🔹 George Leo Losie & Esther Alice Bearss

  {
    id: "george-leo-losie",
    name: "George Leo Losie (1828–1880)",
    branch: "Losie",
    parents: ["john-wesley-losie", "eleanor-waite"],
    spouses: ["esther-bearss"],
    children: [
      "sarah-losie",
      "john-e-losie",
      "asenath-ann-losie",
      "bertha-alma-losie",
      "lizanna-a-losie",
      "anna-a-losie",
      "ellen-a-losie",
      "elon-albert-losie",
      "earl-judson-losie"
    ]
  },
  {
    id: "esther-bearss",
    name: "Esther Alice Bearss (1830–1918)",
    branch: "Bearss",
    parents: ["ephraim-bearss", "sarah-roszell"],
    spouses: ["george-leo-losie"],
    children: [
      "sarah-losie",
      "john-e-losie",
      "asenath-ann-losie",
      "bertha-alma-losie",
      "lizanna-a-losie",
      "anna-a-losie",
      "ellen-a-losie",
      "elon-albert-losie",
      "earl-judson-losie"
    ]
  },

  // Children of George Leo & Esther
  {
    id: "sarah-losie",
    name: "Sarah E. Losie (1854–1858)",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-bearss"],
    spouses: [],
    children: []
  },
  {
    id: "john-e-losie",
    name: "John E. Losie (1856–1858)",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-bearss"],
    spouses: [],
    children: []
  },
  {
    id: "asenath-ann-losie",
    name: "Asenath Ann Losie (1858–1880)",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-bearss"],
    spouses: [],
    children: []
  },
  {
    id: "bertha-alma-losie",
    name: "Bertha Alma Losie (1860–1900)",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-bearss"],
    spouses: [],
    children: []
  },
  {
    id: "lizanna-a-losie",
    name: "Lizanna A. Losie (1862–1880)",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-bearss"],
    spouses: [],
    children: []
  },
  {
    id: "anna-a-losie",
    name: "Anna A. (Lizanna) Losie (1862–1930+)",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-bearss"],
    spouses: [],
    children: []
  },
  {
    id: "ellen-a-losie",
    name: "Ellen A. Losie (1865–?)",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-bearss"],
    spouses: [],
    children: []
  },
  {
    id: "elon-albert-losie",
    name: "Elon Albert Losie (1865–1941)",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-bearss"],
    spouses: [],
    children: []
  },

  // 🔹 Earl Judson Losie & Ethel Wood

  {
    id: "earl-judson-losie",
    name: "Earl Judson Losie (1867–1938)",
    branch: "Losie",
    parents: ["george-leo-losie", "esther-bearss"],
    spouses: ["ethel-wood"],
    children: [
      "earl-judson-losie-jr",
      "george-malcom-losie",
      "charles-ferris-losie
