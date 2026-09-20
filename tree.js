import { people } from "./data/master.js";

let currentLayout = "vertical";
let focusPerson = null;
let currentBranch = "All";

function display(branch) {
  currentBranch = branch;

  const container = document.getElementById("tree");
  container.innerHTML = "";

  const filtered = branch === "All"
    ? people
    : people.filter(p => p.branch === branch);

  const byId = Object.fromEntries(people.map(p => [p.id, p]));

  /* -----------------------------
     VERTICAL FAMILY VIEW
  ----------------------------- */
  function createVerticalNode(person) {
    const node = document.createElement("div");
    node.className = "vertical-node";

    const personBox = document.createElement("div");
    personBox.className = "person";
    personBox.innerHTML = `
      <div class="person-name">${person.name}</div>
      <div class="person-details">${person.details || ""}</div>
    `;

    personBox.addEventListener("click", () => {
      focusPerson = person.id;
      display(currentBranch);
    });

    node.appendChild(personBox);

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

  /* -----------------------------
     HORIZONTAL PEDIGREE VIEW
  ----------------------------- */
  function createPedigreeNode(person) {
    const node = document.createElement("div");
    node.className = "pedigree-node";

    const personBox = document.createElement("div");
    personBox.className = "person";
    personBox.innerHTML = `
      <div class="person-name">${person.name}</div>
      <div class="person-details">${person.details || ""}</div>
    `;

    personBox.addEventListener("click", () => {
      focusPerson = person.id;
      display(currentBranch);
    });

    node.appendChild(personBox);

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

  /* -----------------------------
     ROOT SELECTION (FOCUS MODE)
  ----------------------------- */
  let roots;

  if (focusPerson) {
    roots = [byId[focusPerson]];
  } else {
    roots = filtered.filter(p => !p.parents || p.parents.length === 0);
  }

  roots.forEach(root => {
    if (currentLayout === "vertical") {
      container.appendChild(createVerticalNode(root));
    } else {
      container.appendChild(createPedigreeNode(root));
    }
  });
}

/* Branch filter */
document.querySelectorAll("#branch-menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    focusPerson = null;
    display(btn.dataset.branch);
  });
});

/* Layout toggle */
document.querySelectorAll("#layout-menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLayout = btn.dataset.layout;
    display(currentBranch);
  });
});

/* Clear focus */
document.getElementById("clear-focus").addEventListener("click", () => {
  focusPerson = null;
  display("All");
});

/* Default */
display("All");
