import { people } from "./data/master.js";

const container = document.getElementById("tree");

function renderPerson(person) {
  const div = document.createElement("div");
  div.className = "person";
  div.innerHTML = `
    <h3>${person.name}</h3>
    <p><strong>Branch:</strong> ${person.branch}</p>
    <p><strong>Parents:</strong> ${person.parents.join(", ") || "None"}</p>
    <p><strong>Spouses:</strong> ${person.spouses.join(", ") || "None"}</p>
    <p><strong>Children:</strong> ${person.children.join(", ") || "None"}</p>
  `;
  return div;
}

people.forEach(p => container.appendChild(renderPerson(p)));
