import { people } from "./data/master.js";

const container = document.getElementById("tree");
const menu = document.getElementById("branch-menu");

// Render a single person card
function renderPerson(person) {
  const div = document.createElement("div");
  div.className = "person";
  div.innerHTML = `
    <h3>${person.name}</h3>
    <p><strong>Branch:</strong> ${person.branch}</p>
    <p><strong>Parents:</strong> ${person.parents.length ? person.parents.join(", ") : "None"}</p>
    <p><strong>Spouses:</strong> ${person.spouses.length ? person.spouses.join(", ") : "None"}</p>
    <p><strong>Children:</strong> ${person.children.length ? person.children.join(", ") : "None"}</p>
  `;
  return div;
}

// Display people by branch
function display(branch) {
  container.innerHTML = "";

  const filtered =
    branch === "All"
      ? people
      : people.filter(p => p.branch === branch);

  filtered.forEach(person => {
    container.appendChild(renderPerson(person));
  });
}

// Default view
display("All");

// Branch menu click handler
menu.addEventListener("click", event => {
  const branch = event.target.dataset.branch;
  if (branch) {
    display(branch);
  }
});
