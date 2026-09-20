import { people } from "./data/master.js";

function display(branch) {
  const container = document.getElementById("tree");
  container.innerHTML = "";

  const filtered = branch === "All"
    ? people
    : people.filter(p => p.branch === branch);

  const byId = Object.fromEntries(people.map(p => [p.id, p]));

  function createNode(person) {
    const node = document.createElement("div");
    node.className = "node";
    node.innerHTML = `<div class="person">${person.name}</div>`;

    if (person.children.length > 0) {
      const childrenContainer = document.createElement("div");
      childrenContainer.className = "children";

      person.children.forEach(childId => {
        const child = byId[childId];
        if (child) {
          childrenContainer.appendChild(createNode(child));
        }
      });

      node.appendChild(childrenContainer);
    }

    return node;
  }

  // Top-level people (those with no parents)
  const roots = filtered.filter(p => p.parents.length === 0);

  roots.forEach(root => {
    container.appendChild(createNode(root));
  });
}

// Filter button logic
document.querySelectorAll("#branch-menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    display(btn.dataset.branch);
  });
});

// Default view
display("All");
