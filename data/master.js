import { westberg } from "./westberg.js";
import { losie } from "./losie.js";
import { lakin } from "./lakin.js";
import { sawyer } from "./sawyer.js";

export const people = [
  ...westberg,
  ...losie,
  ...lakin,
  ...sawyer
];

// TRUE ROOTS
export const roots = {
  All: [
    "oscar-westberg",
    "john-wesley-losie",
    "john-hayes-lakin",
    "lawrence-sawyer"
  ],
  Westberg: "oscar-westberg",
  Losie: "john-wesley-losie",
  Sawyer: "lawrence-sawyer",
  Lakin: "john-hayes-lakin"
};
