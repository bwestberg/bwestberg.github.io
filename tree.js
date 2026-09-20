import { people } from "./data/master.js";

let currentLayout = "vertical";

function display(branch) {
  const container = document.getElementById("tree");
  container.innerHTML = "";

  const filtered = branch === "All"
    ? people
    : people.filter(p => p.branch === branch);

  const byId = Object.fromEntries(people.map(p => [p.id, p]));

  // -----------------------------
  // VERTICAL FAMILY VIEW
  // -----------------------------
  function createVerticalNode(person) {
    const node = document.createElement("div");
    node.className = "node vertical-node";

    const personBox = document.createElement("div");
    personBox.className = "person";
    personBox.textContent = person.name;

    personBox.addEventListener("click", () => {
      node.classList.toggle("collapsed");
    });

    node.appendChild(personBox);

    // Spouses
    if (person.spouses?.length > 0) {
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

    // Children
    if (person.children?.length > 0) {
      node.classList.add("has-children");

      const childrenContainer = document.createElement("div");
      childrenContainer.className = "children";

      person.children.forEach(childId => {
        const child = byId[childId];
        if (child) {
          childrenContainer.appendChild(createVerticalNode(child));
        }
      });

      node.appendChild(childrenContainer);
    }

    return node;
  }

  // -----------------------------
  // HORIZONTAL PEDIGREE VIEW
  // -----------------------------
  function createPedigreeNode(person) {
    const node = document.createElement("div");
    node.className = "pedigree-node";

    const personBox = document.createElement("div");
    personBox.className = "person";
    personBox.textContent = person.name;

    personBox.addEventListener("click", () => {
      node.classList.toggle("collapsed");
    });

    node.appendChild(personBox);

    // Parents (left)
    if (person.parents?.length > 0) {
      const parentContainer = document.createElement("div");
      parentContainer.className = "pedigree-parents";

      person.parents.forEach(parentId => {
        const parent = byId[parentId];
        if (parent) {
          parentContainer.appendChild(createPedigreeNode(parent));
        }
      });

      node.appendChild(parentContainer);
    }

    // Children (right)
    if (person.children?.length > 0) {
      const childContainer = document.createElement("div");
      childContainer.className = "pedigree-children";

      person.children.forEach(childId => {
        const child = byId[childId];
        if (child) {
          childContainer.appendChild(createPedigreeNode(child));
        }
      });

      node.appendChild(childContainer);
    }

    return node;
  }

  // -----------------------------
  // ROOTS
  // -----------------------------
  const roots = filtered.filter(p => !p.parents || p.parents.length === 0);

  roots.forEach(root => {
    if (currentLayout === "vertical") {
      container.appendChild(createVerticalNode(root));
    } else {
      container.appendChild(createPedigreeNode(root));
    }
  });
}

// Branch filter
document.querySelectorAll("#branch-menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    display(btn.dataset.branch);
  });
});

// Layout toggle
document.querySelectorAll("#layout-menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLayout = btn.dataset.layout;
    display("All");
  });
});

// Default
display("All");
