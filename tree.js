import { people, roots } from "./data/master.js";

let currentLayout = "vertical";
let currentBranch = "All";
let focusPerson = null;
let zoomLevel = 1;

const MIN_ZOOM = 0.6;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.1;

function applyZoom() {
  const tree = document.getElementById("tree");
  const zoomDisplay = document.getElementById("zoom-reset");

  if (!tree) {
    return;
  }

  tree.style.transform = `scale(${zoomLevel})`;

  if (zoomDisplay) {
    zoomDisplay.textContent = `${Math.round(zoomLevel * 100)}%`;
  }
}

function setZoom(nextZoom) {
  zoomLevel = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));
  applyZoom();
}

function display(branch) {
  currentBranch = branch;

  const container = document.getElementById("tree");
  container.innerHTML = "";

  const byId = Object.fromEntries(people.map(p => [p.id, p]));

  const rootIds = focusPerson
    ? [focusPerson]
    : Array.isArray(roots[branch])
      ? roots[branch]
      : [roots[branch]];

  function createVerticalNode(person) {
    const node = document.createElement("div");
    node.className = "vertical-node";

    const block = document.createElement("div");
    block.className = "person-block";

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

    block.appendChild(personBox);

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

      block.appendChild(spouseContainer);
    }

    node.appendChild(block);

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

  rootIds.forEach(rootId => {
    const root = byId[rootId];

    if (!root) {
      return;
    }

    if (currentLayout === "vertical") {
      container.appendChild(createVerticalNode(root));
    } else {
      container.appendChild(createPedigreeNode(root));
    }
  });

  applyZoom();
}

document.getElementById("zoom-in").addEventListener("click", () => {
  setZoom(zoomLevel + ZOOM_STEP);
});

document.getElementById("zoom-out").addEventListener("click", () => {
  setZoom(zoomLevel - ZOOM_STEP);
});

document.getElementById("zoom-reset").addEventListener("click", () => {
  setZoom(1);
});

document.getElementById("tree-viewport").addEventListener("wheel", (event) => {
  if (!event.ctrlKey && !event.metaKey) {
    return;
  }

  event.preventDefault();
  const delta = event.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
  setZoom(zoomLevel + delta);
}, { passive: false });

document.querySelectorAll("#branch-menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    focusPerson = null;
    display(btn.dataset.branch);
  });
});

document.querySelectorAll("#layout-menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLayout = btn.dataset.layout;
    display(currentBranch);
  });
});

document.getElementById("clear-focus").addEventListener("click", () => {
  focusPerson = null;
  display(currentBranch);
});

display("All");
