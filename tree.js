import { people } from "./data/master.js";

const container = document.getElementById("tree");
const menu = document.getElementById("branch-menu");

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

function display(branch) {
  container.innerHTML = "";

  const filtered =
    branch === "All"
      ? people
      : people.filter(p => p.branch === branch);

  filtered.forEach(p => container.appendChild(renderPerson(p)));
}

// default view
display("All");

// menu click handler
menu.addEventListener("click", e => {
  if (e.target.dataset.branch) {
    display(e.target.dataset.branch);
  }
});
