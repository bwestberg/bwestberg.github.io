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

// TRUE ROOTS (your confirmed ancestors)
export const roots = {
  Westberg: "oscar-westberg",
  Losie: "john-wesley-losie",
  Sawyer: "lawrence-sawyer",
  Lakin: "daniel-lakin"
};
