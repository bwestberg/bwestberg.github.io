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

    // Person box
    const personBox = document.createElement("div");
    personBox.className = "person";
    personBox.textContent = person.name;
    node.appendChild(personBox);

    // SPOUSE CONNECTOR
    if (person.spouses.length > 0) {
      const spouseContainer = document.createElement("div");
      spouseContainer.className = "spouse-container";

      person.spouses.forEach(spouseId => {
        const spouse = byId[spouseId];
        if (spouse) {
          const spouseBox = document.createElement("div");
          spouseBox.className = "spouse";
          spouseBox.textContent = spouse.name;
          spouseContainer.appendChild(spouseBox);
        }
      });

      node.appendChild(spouseContainer);
    }

    // CHILDREN
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
