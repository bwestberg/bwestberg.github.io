// ---------------------------------------------------------
// PEOPLE DATA (will be filled in Part 2+)
// ---------------------------------------------------------
// In later parts, we'll define:
// const people = [ { id, name, nickname?, branch, parents[], children[], spouses[], birth, death, notes }, ... ];
// For now, assume `people` exists and is an array of normalized person objects.

// ---------------------------------------------------------
// UTILITY FUNCTIONS
// ---------------------------------------------------------

function getPerson(id) {
    return people.find(p => p.id === id);
}

function getParents(person) {
    return (person.parents || [])
        .map(getPerson)
        .filter(Boolean);
}

function getChildren(person) {
    return (person.children || [])
        .map(getPerson)
        .filter(Boolean);
}

function getSpouses(person) {
    return (person.spouses || [])
        .map(getPerson)
        .filter(Boolean);
}

function createNode(person) {
    const div = document.createElement("div");
    div.className = "tree-node";

    const nameLine = document.createElement("div");
    nameLine.textContent = person.name;
    div.appendChild(nameLine);

    if (person.nickname) {
        const nickLine = document.createElement("div");
        nickLine.style.fontSize = "11px";
        nickLine.style.opacity = "0.8";
        nickLine.textContent = `"${person.nickname}"`;
        div.appendChild(nickLine);
    }

    if (person.birth) {
        const birthLine = document.createElement("div");
        birthLine.style.fontSize = "11px";
        birthLine.textContent = `b. ${person.birth}`;
        div.appendChild(birthLine);
    }

    if (person.death) {
        const deathLine = document.createElement("div");
        deathLine.style.fontSize = "11px";
        deathLine.textContent = `d. ${person.death}`;
        div.appendChild(deathLine);
    }

    div.addEventListener("click", () => openPersonModal(person));
    return div;
}

function clearTree() {
    const tree = document.getElementById("tree");
    tree.innerHTML = "";
    return tree;
}

// ---------------------------------------------------------
// MODAL HANDLING
// ---------------------------------------------------------

function openPersonModal(person) {
    document.getElementById("modalName").textContent = person.name;
    document.getElementById("modalBranch").textContent = person.branch ? `Branch: ${person.branch}` : "";

    document.getElementById("modalBirth").textContent =
        person.birth ? `Birth: ${person.birth}` : "";

    document.getElementById("modalDeath").textContent =
        person.death ? `Death: ${person.death}` : "";

    const parents = getParents(person).map(p => p.name).join(", ");
    const spouses = getSpouses(person).map(p => p.name).join(", ");
    const children = getChildren(person).map(p => p.name).join(", ");

    document.getElementById("modalParents").textContent =
        parents ? `Parents: ${parents}` : "";

    document.getElementById("modalSpouses").textContent =
        spouses ? `Spouses: ${spouses}` : "";

    document.getElementById("modalChildren").textContent =
        children ? `Children: ${children}` : "";

    document.getElementById("modalNotes").textContent =
        person.notes ? `Notes: ${person.notes}` : "";

    document.getElementById("personModal").classList.remove("hidden");
}

function closePersonModal() {
    document.getElementById("personModal").classList.add("hidden");
}

// ---------------------------------------------------------
// GLOBAL VIEW STATE
// ---------------------------------------------------------

let currentView = "ancestor";   // ancestor, generation, surname, descendant, branch, main
let currentRootId = null;       // will be set on init

function getRootPerson() {
    if (currentRootId) {
        const p = getPerson(currentRootId);
        if (p) return p;
    }
    // fallback: first person in dataset
    return people[0];
}

function renderCurrentView() {
    const style = document.getElementById("treeStyle").value;
    const tree = clearTree();
    const root = getRootPerson();

    switch (currentView) {
        case "ancestor":
            renderAncestorTree(tree, style, root);
            break;
        case "generation":
            renderGenerationalTree(tree, style, root);
            break;
        case "surname":
            renderSurnameTree(tree, style, root);
            break;
        case "descendant":
            renderDescendantTree(tree, style, root);
            break;
        case "branch":
            renderBranchTree(tree, style, root.branch);
            break;
        case "main":
        default:
            renderMainTree(tree, style);
            break;
    }
}

// ---------------------------------------------------------
// LAYOUT MODULES (6 styles)
// ---------------------------------------------------------

// 1. Horizontal Pedigree
function layoutHorizontalPedigree(tree, levels) {
    levels.forEach(level => {
        const row = document.createElement("div");
        row.className = "horizontal-level";
        level.forEach(person => {
            row.appendChild(createNode(person));
        });
        tree.appendChild(row);

        const connector = document.createElement("div");
        connector.className = "horizontal-connector";
        tree.appendChild(connector);
    });
}

// 2. Vertical Generational
function layoutVerticalGenerational(tree, levels) {
    levels.forEach(level => {
        const container = document.createElement("div");
        container.className = "vertical-level";
        level.forEach(person => {
            container.appendChild(createNode(person));
        });
        tree.appendChild(container);

        const connector = document.createElement("div");
        connector.className = "vertical-connector";
        tree.appendChild(connector);
    });
}

// 3. Accordion Tree
function layoutAccordion(tree, levels) {
    levels.forEach((level, index) => {
        const section = document.createElement("div");
        section.className = "accordion-section";

        const title = document.createElement("div");
        title.className = "accordion-title";
        title.textContent = `Generation ${index + 1}`;
        section.appendChild(title);

        const content = document.createElement("div");
        content.className = "accordion-content";
        level.forEach(person => {
            content.appendChild(createNode(person));
        });
        section.appendChild(content);

        title.addEventListener("click", () => {
            content.style.display = content.style.display === "none" ? "block" : "none";
        });

        tree.appendChild(section);
    });
}

// 4. Multi-Root Tree
function layoutMultiRoot(tree, roots) {
    const container = document.createElement("div");
    container.className = "multiroot-container";

    roots.forEach(root => {
        const col = document.createElement("div");
        col.className = "multiroot-column";

        const title = document.createElement("h3");
        title.textContent = root.name;
        col.appendChild(title);

        col.appendChild(createNode(root));
        container.appendChild(col);
    });

    tree.appendChild(container);
}

// 5. Radial Tree (simple concentric layout)
function layoutRadial(tree, levels) {
    if (!levels.length || !levels[0].length) return;

    const container = document.createElement("div");
    container.className = "radial-container";

    const center = levels[0][0];
    const centerNode = createNode(center);
    centerNode.classList.add("radial-node");
    centerNode.style.left = "50%";
    centerNode.style.top = "50%";
    container.appendChild(centerNode);

    for (let i = 1; i < levels.length; i++) {
        const radius = 120 * i;
        const count = levels[i].length || 1;
        levels[i].forEach((person, idx) => {
            const angle = (2 * Math.PI * idx) / count;
            const x = 400 + radius * Math.cos(angle);
            const y = 400 + radius * Math.sin(angle);

            const node = createNode(person);
            node.classList.add("radial-node");
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            container.appendChild(node);
        });
    }

    tree.appendChild(container);
}

// 6. Layered Tree
function layoutLayered(tree, levels) {
    levels.forEach(level => {
        const container = document.createElement("div");
        container.className = "layered-level";
        level.forEach(person => {
            container.appendChild(createNode(person));
        });
        tree.appendChild(container);
    });
}

// ---------------------------------------------------------
// VIEW-SPECIFIC RENDERERS (use layout modules)
// ---------------------------------------------------------

function buildAncestorLevels(root, maxDepth = 8) {
    const levels = [];
    let current = [root];

    for (let d = 0; d < maxDepth && current.length > 0; d++) {
        levels.push(current);
        const next = [];
        current.forEach(person => {
            next.push(...getParents(person));
        });
        current = next;
    }
    return levels;
}

function buildDescendantLevels(root, maxDepth = 8) {
    const levels = [];
    let current = [root];

    for (let d = 0; d < maxDepth && current.length > 0; d++) {
        levels.push(current);
        const next = [];
        current.forEach(person => {
            next.push(...getChildren(person));
        });
        current = next;
    }
    return levels;
}

function renderAncestorTree(tree, style, root) {
    const levels = buildAncestorLevels(root);

    switch (style) {
        case "horizontal":
            layoutHorizontalPedigree(tree, levels);
            break;
        case "vertical":
            layoutVerticalGenerational(tree, levels);
            break;
        case "accordion":
            layoutAccordion(tree, levels);
            break;
        case "multiroot":
            layoutMultiRoot(tree, levels[levels.length - 1] || [root]);
            break;
        case "radial":
            layoutRadial(tree, levels);
            break;
        case "layered":
        default:
            layoutLayered(tree, levels);
            break;
    }
}

function renderDescendantTree(tree, style, root) {
    const levels = buildDescendantLevels(root);

    switch (style) {
        case "horizontal":
            layoutHorizontalPedigree(tree, levels);
            break;
        case "vertical":
            layoutVerticalGenerational(tree, levels);
            break;
        case "accordion":
            layoutAccordion(tree, levels);
            break;
        case "multiroot":
            layoutMultiRoot(tree, levels[0] || [root]);
            break;
        case "radial":
            layoutRadial(tree, levels);
            break;
        case "layered":
        default:
            layoutLayered(tree, levels);
            break;
    }
}

function renderGenerationalTree(tree, style, root) {
    // For now, generational = ancestor levels (you can later swap to a custom logic)
    renderAncestorTree(tree, style, root);
}

function renderSurnameTree(tree, style, root) {
    const surname = root.name.split(" ").slice(-1)[0];
    const filtered = people.filter(p => p.name.endsWith(surname));
    const levels = [filtered];

    switch (style) {
        case "horizontal":
            layoutHorizontalPedigree(tree, levels);
            break;
        case "vertical":
            layoutVerticalGenerational(tree, levels);
            break;
        case "accordion":
            layoutAccordion(tree, levels);
            break;
        case "multiroot":
            layoutMultiRoot(tree, filtered);
            break;
        case "radial":
            layoutRadial(tree, levels);
            break;
        case "layered":
        default:
            layoutLayered(tree, levels);
            break;
    }
}

function renderBranchTree(tree, style, branch) {
    const filtered = people.filter(p => p.branch === branch);
    const levels = [filtered];

    switch (style) {
        case "horizontal":
            layoutHorizontalPedigree(tree, levels);
            break;
        case "vertical":
            layoutVerticalGenerational(tree, levels);
            break;
        case "accordion":
            layoutAccordion(tree, levels);
            break;
        case "multiroot":
            layoutMultiRoot(tree, filtered);
            break;
        case "radial":
            layoutRadial(tree, levels);
            break;
        case "layered":
        default:
            layoutLayered(tree, levels);
            break;
    }
}

function renderMainTree(tree, style) {
    const levels = [people];

    switch (style) {
        case "horizontal":
            layoutHorizontalPedigree(tree, levels);
            break;
        case "vertical":
            layoutVerticalGenerational(tree, levels);
            break;
        case "accordion":
            layoutAccordion(tree, levels);
            break;
        case "multiroot":
            layoutMultiRoot(tree, people.slice(0, 4));
            break;
        case "radial":
            layoutRadial(tree, levels);
            break;
        case "layered":
        default:
            layoutLayered(tree, levels);
            break;
    }
}

// ---------------------------------------------------------
// LIST VIEWS (simple text lists)
// ---------------------------------------------------------

function renderListView(filterFn) {
    const tree = clearTree();
    const ul = document.createElement("ul");

    people.filter(filterFn).forEach(person => {
        const li = document.createElement("li");
        li.textContent = `${person.name} (${person.branch || ""})`;
        li.addEventListener("click", () => openPersonModal(person));
        ul.appendChild(li);
    });

    tree.appendChild(ul);
}

// ---------------------------------------------------------
// SEARCH
// ---------------------------------------------------------

function setupSearch() {
    const input = document.getElementById("searchInput");
    const resultsDiv = document.getElementById("searchResults");

    input.addEventListener("input", () => {
        const q = input.value.trim().toLowerCase();
        if (!q) {
            resultsDiv.textContent = "";
            return;
        }

        const matches = people.filter(p => p.name.toLowerCase().includes(q));
        if (!matches.length) {
            resultsDiv.textContent = "No matches.";
            return;
        }

        resultsDiv.textContent = matches.map(m => m.name).join(" • ");
    });
}

// ---------------------------------------------------------
// EVENT WIRING
// ---------------------------------------------------------

function setupEvents() {
    document.getElementById("treeView").addEventListener("click", () => {
        currentView = "main";
        renderCurrentView();
    });

    document.getElementById("ancestorTree").addEventListener("click", () => {
        currentView = "ancestor";
        renderCurrentView();
    });

    document.getElementById("generationTree").addEventListener("click", () => {
        currentView = "generation";
        renderCurrentView();
    });

    document.getElementById("surnameTree").addEventListener("click", () => {
        currentView = "surname";
        renderCurrentView();
    });

    document.getElementById("descendantTree").addEventListener("click", () => {
        currentView = "descendant";
        renderCurrentView();
    });

    document.getElementById("ancestorList").addEventListener("click", () => {
        const root = getRootPerson();
        renderListView(p => getParents(p).includes(root));
    });

    document.getElementById("generationList").addEventListener("click", () => {
        renderListView(() => true);
    });

    document.getElementById("surnameList").addEventListener("click", () => {
        const root = getRootPerson();
        const surname = root.name.split(" ").slice(-1)[0];
        renderListView(p => p.name.endsWith(surname));
    });

    document.getElementById("descendantList").addEventListener("click", () => {
        const root = getRootPerson();
        renderListView(p => getParents(p).includes(root));
    });

    document.getElementById("branchTreeView").addEventListener("change", e => {
        const branch = e.target.value;
        if (!branch) return;
        currentView = "branch";
        const candidate = people.find(p => p.branch === branch);
        if (candidate) currentRootId = candidate.id;
        renderBranchTree(clearTree(), document.getElementById("treeStyle").value, branch);
    });

    document.getElementById("branchListView").addEventListener("change", e => {
        const branch = e.target.value;
        if (!branch) return;
        renderListView(p => p.branch === branch);
    });

    document.getElementById("treeStyle").addEventListener("change", () => {
        // Live switching: instantly redraw current view
        renderCurrentView();
    });

    document.getElementById("closeModal").addEventListener("click", closePersonModal);

    setupSearch();
}

// ---------------------------------------------------------
// INITIALIZE
// ---------------------------------------------------------

window.addEventListener("DOMContentLoaded", () => {
    // Set default root to you, if present
    const brent = people.find(p => p.id === "brent-westberg");
    if (brent) currentRootId = brent.id;

    setupEvents();
    renderCurrentView();
});
const people = [

  // -------------------------------------------------------
  // WESTBERG ROOT LINE (expanded + normalized)
  // -------------------------------------------------------

  {
    id: "unknown-westberg-ancestor-1",
    name: "Unknown Westberg Ancestor",
    nickname: "",
    branch: "Westberg",
    parents: [],
    spouses: [],
    children: ["unknown-westberg-ancestor-2", "unknown-westberg-ancestor-3"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  {
    id: "unknown-westberg-ancestor-2",
    name: "Unknown Westberg Ancestor",
    nickname: "",
    branch: "Westberg",
    parents: ["unknown-westberg-ancestor-1"],
    spouses: [],
    children: ["oscar-westberg"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  {
    id: "unknown-westberg-ancestor-3",
    name: "Unknown Westberg Ancestor",
    nickname: "",
    branch: "Westberg",
    parents: ["unknown-westberg-ancestor-1"],
    spouses: [],
    children: ["oscar-westberg"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // OSCAR WESTBERG → AXEL WESTBERG → RON WESTBERG → BRENT
  // -------------------------------------------------------

  {
    id: "oscar-westberg",
    name: "Oscar Westberg",
    nickname: "",
    branch: "Westberg",
    parents: ["unknown-westberg-ancestor-2", "unknown-westberg-ancestor-3"],
    spouses: ["martha-hornstrom"],
    children: ["axel-westberg"],
    birth: "Unknown (Sweden)",
    death: "Unknown (Minnesota)",
    notes: ""
  },

  {
    id: "martha-hornstrom",
    name: "Martha Selina Hornstrom",
    nickname: "",
    branch: "Hornstrom",
    parents: [],
    spouses: ["oscar-westberg"],
    children: ["axel-westberg"],
    birth: "1871 (Sweden)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "axel-westberg",
    name: "Axel Westberg",
    nickname: "",
    branch: "Westberg",
    parents: ["oscar-westberg", "martha-hornstrom"],
    spouses: ["myrtle-lafever"],
    children: ["ron-westberg"],
    birth: "1909 (Minnesota)",
    death: "1986",
    notes: ""
  },

  {
    id: "myrtle-lafever",
    name: "Myrtle J. LaFever",
    nickname: "",
    branch: "LaFever",
    parents: ["medos-lafever", "phoebe-raymond"],
    spouses: ["axel-westberg"],
    children: ["ron-westberg"],
    birth: "1914 (Turner, MI)",
    death: "2002 (St. Petersburg, FL)",
    notes: ""
  },

  {
    id: "ron-westberg",
    name: "Ronald Westberg",
    nickname: "Ron",
    branch: "Westberg",
    parents: ["axel-westberg", "myrtle-lafever"],
    spouses: ["sandra-losie"],
    children: ["brent-westberg"],
    birth: "1935 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "sandra-losie",
    name: "Sandra Jean Losie",
    nickname: "",
    branch: "Losie",
    parents: ["james-elon-losie", "mildred-bearance"],
    spouses: ["ron-westberg"],
    children: ["brent-westberg"],
    birth: "1940 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "brent-westberg",
    name: "Brent Westberg",
    nickname: "",
    branch: "Westberg",
    parents: ["ron-westberg", "sandra-losie"],
    spouses: ["cheri-lakin"],
    children: ["rachel-westberg", "alyssa-westberg"],
    birth: "1968 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "cheri-lakin",
    name: "Cheri Ann Lakin",
    nickname: "",
    branch: "Lakin",
    parents: ["roger-lakin", "carol-sawyer"],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"],
    birth: "1967 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "rachel-westberg",
    name: "Rachel Westberg",
    nickname: "",
    branch: "Westberg",
    parents: ["brent-westberg", "cheri-lakin"],
    spouses: [],
    children: [],
    birth: "1998 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "alyssa-westberg",
    name: "Alyssa Westberg",
    nickname: "",
    branch: "Westberg",
    parents: ["brent-westberg", "cheri-lakin"],
    spouses: [],
    children: [],
    birth: "2000 (Unknown)",
    death: "Unknown",
    notes: ""
  },
  // -------------------------------------------------------
  // HORNSTROM BRANCH
  // -------------------------------------------------------

  {
    id: "martha-hornstrom",
    name: "Martha Selina Hornstrom",
    nickname: "",
    branch: "Hornstrom",
    parents: [],
    spouses: ["oscar-westberg"],
    children: ["axel-westberg"],
    birth: "1871 (Sweden)",
    death: "Unknown",
    notes: ""
  },

  // -------------------------------------------------------
  // LaFEVER BRANCH
  // -------------------------------------------------------

  {
    id: "medos-lafever",
    name: "Harmedos LaFever",
    nickname: "Medos",
    branch: "LaFever",
    parents: ["napoleon-lafever", "delia-lafever"],
    spouses: ["phoebe-raymond"],
    children: ["myrtle-lafever"],
    birth: "1889 (Unknown)",
    death: "1964 (Unknown)",
    notes: ""
  },

  {
    id: "napoleon-lafever",
    name: "Napoleon LaFever",
    nickname: "",
    branch: "LaFever",
    parents: [],
    spouses: ["delia-lafever"],
    children: ["medos-lafever"],
    birth: "1860 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "delia-lafever",
    name: "Delia LaFever",
    nickname: "",
    branch: "LaFever",
    parents: [],
    spouses: ["napoleon-lafever"],
    children: ["medos-lafever"],
    birth: "1860 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "myrtle-lafever",
    name: "Myrtle J. LaFever",
    nickname: "",
    branch: "LaFever",
    parents: ["medos-lafever", "phoebe-raymond"],
    spouses: ["axel-westberg"],
    children: ["ron-westberg"],
    birth: "1914 (Turner, MI)",
    death: "2002 (St. Petersburg, FL)",
    notes: ""
  },

  // -------------------------------------------------------
  // RAYMOND BRANCH
  // -------------------------------------------------------

  {
    id: "phoebe-raymond",
    name: "Phoebe Raymond",
    nickname: "",
    branch: "Raymond",
    parents: ["jerome-raymond", "louise-buckner"],
    spouses: ["medos-lafever"],
    children: ["myrtle-lafever"],
    birth: "1888 (Unknown)",
    death: "1952 (Unknown)",
    notes: ""
  },

  {
    id: "jerome-raymond",
    name: "Jerome Raymond",
    nickname: "",
    branch: "Raymond",
    parents: [],
    spouses: ["louise-buckner"],
    children: ["phoebe-raymond"],
    birth: "1835 (Quebec)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "louise-buckner",
    name: "Louise Buckner",
    nickname: "",
    branch: "Raymond",
    parents: [],
    spouses: ["jerome-raymond"],
    children: ["phoebe-raymond"],
    birth: "Unknown",
    death: "Unknown",
    notes: ""
  },
  // -------------------------------------------------------
  // LOSIE BRANCH
  // -------------------------------------------------------

  {
    id: "sandra-losie",
    name: "Sandra Jean Losie",
    nickname: "",
    branch: "Losie",
    parents: ["james-elon-losie", "mildred-bearance"],
    spouses: ["ron-westberg"],
    children: ["brent-westberg"],
    birth: "1940 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "james-elon-losie",
    name: "James Elon Losie",
    nickname: "",
    branch: "Losie",
    parents: ["earl-judson-losie", "hazel-woodman"],
    spouses: [],
    children: ["sandra-losie"],
    birth: "1918 (Unknown)",
    death: "2002 (Unknown)",
    notes: ""
  },

  {
    id: "earl-judson-losie",
    name: "Earl Judson Losie",
    nickname: "",
    branch: "Losie",
    parents: ["george-leo-losie"],
    spouses: [],
    children: ["james-elon-losie"],
    birth: "1867 (Unknown)",
    death: "1938 (Unknown)",
    notes: ""
  },

  {
    id: "george-leo-losie",
    name: "George Leo Losie",
    nickname: "",
    branch: "Losie",
    parents: ["john-wesley-losie"],
    spouses: [],
    children: ["earl-judson-losie"],
    birth: "1828 (Unknown)",
    death: "1880 (Unknown)",
    notes: ""
  },

  {
    id: "john-wesley-losie",
    name: "John Wesley Losie",
    nickname: "",
    branch: "Losie",
    parents: ["lawrence-losie"],
    spouses: [],
    children: ["george-leo-losie"],
    birth: "1797 (Unknown)",
    death: "1865 (Unknown)",
    notes: ""
  },

  {
    id: "lawrence-losie",
    name: "Lawrence Losie",
    nickname: "",
    branch: "Losie",
    parents: ["jan-losee"],
    spouses: [],
    children: ["john-wesley-losie"],
    birth: "1765 (Unknown)",
    death: "1820 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // LOSEE BRANCH (Dutch Colonial Line)
  // -------------------------------------------------------

  {
    id: "jan-losee",
    name: "Jan Losee",
    nickname: "John L.",
    branch: "Losee",
    parents: ["laurens-losee"],
    spouses: [],
    children: ["lawrence-losie"],
    birth: "1738 (Unknown)",
    death: "1788 (Unknown)",
    notes: ""
  },

  {
    id: "laurens-losee",
    name: "Laurens Losee",
    nickname: "",
    branch: "Losee",
    parents: ["simon-losee"],
    spouses: [],
    children: ["jan-losee"],
    birth: "1705 (Unknown)",
    death: "1754 (Unknown)",
    notes: ""
  },

  {
    id: "simon-losee",
    name: "Simon Losee",
    nickname: "",
    branch: "Losee",
    parents: ["cornelius-losee"],
    spouses: [],
    children: ["laurens-losee"],
    birth: "1681 (Unknown)",
    death: "1763 (Unknown)",
    notes: ""
  },

  {
    id: "cornelius-losee",
    name: "Cornelius Losee",
    nickname: "",
    branch: "Losee",
    parents: ["laurens-koeck", "ceertje-denton"],
    spouses: [],
    children: ["simon-losee"],
    birth: "1644 (Unknown)",
    death: "1678 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // KOECK BRANCH (Danish → New York)
  // -------------------------------------------------------

  {
    id: "laurens-koeck",
    name: "Laurens Corneliszen Koeck",
    nickname: "",
    branch: "Koeck",
    parents: [],
    spouses: ["margrietje-vanflaesbeck"],
    children: ["cornelius-losee"],
    birth: "1640 (Denmark)",
    death: "1702 (New York)",
    notes: ""
  },

  // -------------------------------------------------------
  // VANFLAESBECK BRANCH (New Amsterdam)
  // -------------------------------------------------------

  {
    id: "margrietje-vanflaesbeck",
    name: "Margrietje Barents VanFlaesbeck",
    nickname: "",
    branch: "VanFlaesbeck",
    parents: [],
    spouses: ["laurens-koeck"],
    children: ["cornelius-losee"],
    birth: "1658 (New Amsterdam)",
    death: "1702 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // DENTON BRANCH (Jamaica, NY)
  // -------------------------------------------------------

  {
    id: "ceertje-denton",
    name: "Ceertje Denton",
    nickname: "",
    branch: "Denton",
    parents: [],
    spouses: [],
    children: ["cornelius-losee"],
    birth: "1658 (Jamaica, NY)",
    death: "1678 (Unknown)",
    notes: ""
  },
  // -------------------------------------------------------
  // BEARANCE BRANCH
  // -------------------------------------------------------

  {
    id: "mildred-bearance",
    name: "Mildred Ilene Bearance",
    nickname: "",
    branch: "Bearance",
    parents: ["stanley-bearance", "hazel-woodman"],
    spouses: [],
    children: ["sandra-losie"],
    birth: "1919 (Unknown)",
    death: "2018 (Unknown)",
    notes: ""
  },

  {
    id: "stanley-bearance",
    name: "Stanley Bearance",
    nickname: "",
    branch: "Bearance",
    parents: [],
    spouses: ["hazel-woodman"],
    children: ["mildred-bearance"],
    birth: "Unknown",
    death: "Unknown",
    notes: ""
  },

  // -------------------------------------------------------
  // WOODMAN BRANCH
  // -------------------------------------------------------

  {
    id: "hazel-woodman",
    name: "Hazel Isabella Woodman",
    nickname: "",
    branch: "Woodman",
    parents: ["samuel-woodman", "ruth-lamberton"],
    spouses: ["stanley-bearance"],
    children: ["mildred-bearance", "james-elon-losie"],
    birth: "Unknown",
    death: "Unknown",
    notes: ""
  },

  {
    id: "samuel-woodman",
    name: "Samuel D. Woodman",
    nickname: "",
    branch: "Woodman",
    parents: [],
    spouses: ["ruth-lamberton"],
    children: ["hazel-woodman"],
    birth: "1829 (Unknown)",
    death: "1913 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // LAMBERTON BRANCH
  // -------------------------------------------------------

  {
    id: "ruth-lamberton",
    name: "Ruth Elizabeth Lamberton",
    nickname: "",
    branch: "Lamberton",
    parents: [],
    spouses: ["samuel-woodman"],
    children: ["hazel-woodman"],
    birth: "1836 (Unknown)",
    death: "1903 (Unknown)",
    notes: ""
  },
  // -------------------------------------------------------
  // LAKIN BRANCH
  // -------------------------------------------------------

  {
    id: "roger-lakin",
    name: "Roger W. Lakin",
    nickname: "",
    branch: "Lakin",
    parents: ["george-meade", "anna-oconnell"],
    spouses: [],
    children: ["cheri-lakin"],
    birth: "1935 (Unknown)",
    death: "2024 (Unknown)",
    notes: ""
  },

  {
    id: "cheri-lakin",
    name: "Cheri Ann Lakin",
    nickname: "",
    branch: "Lakin",
    parents: ["roger-lakin", "carol-sawyer"],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"],
    birth: "1967 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  // -------------------------------------------------------
  // MEADE BRANCH
  // -------------------------------------------------------

  {
    id: "george-meade",
    name: "George Meade",
    nickname: "",
    branch: "Meade",
    parents: ["samuel-sawyer"],
    spouses: [],
    children: ["roger-lakin"],
    birth: "1888 (Unknown)",
    death: "1954 (Unknown)",
    notes: ""
  },

  {
    id: "anna-oconnell",
    name: "Anna O'Connell",
    nickname: "",
    branch: "O'Connell",
    parents: [],
    spouses: [],
    children: ["roger-lakin"],
    birth: "1890 (Unknown)",
    death: "1962 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // SAWYER BRANCH
  // -------------------------------------------------------

  {
    id: "carol-sawyer",
    name: "Carol Ann Sawyer",
    nickname: "",
    branch: "Sawyer",
    parents: ["robert-sawyer", "cleda-brown"],
    spouses: [],
    children: ["cheri-lakin"],
    birth: "1938 (Unknown)",
    death: "2016 (Unknown)",
    notes: ""
  },

  {
    id: "robert-sawyer",
    name: "Robert Russell Sawyer",
    nickname: "",
    branch: "Sawyer",
    parents: ["samuel-sawyer"],
    spouses: [],
    children: ["carol-sawyer"],
    birth: "1915 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "samuel-sawyer",
    name: "Samuel Sawyer",
    nickname: "",
    branch: "Sawyer",
    parents: ["jonathan-sawyer"],
    spouses: [],
    children: ["george-meade", "robert-sawyer"],
    birth: "1810 (Unknown)",
    death: "1870 (Unknown)",
    notes: ""
  },

  {
    id: "jonathan-sawyer",
    name: "Jonathan Sawyer",
    nickname: "",
    branch: "Sawyer",
    parents: ["thomas-sawyer"],
    spouses: [],
    children: ["samuel-sawyer"],
    birth: "1770 (Unknown)",
    death: "1830 (Unknown)",
    notes: ""
  },

  {
    id: "thomas-sawyer",
    name: "Thomas Sawyer",
    nickname: "",
    branch: "Sawyer",
    parents: [],
    spouses: [],
    children: ["jonathan-sawyer"],
    birth: "1700 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  // -------------------------------------------------------
  // BROWN BRANCH
  // -------------------------------------------------------

  {
    id: "cleda-brown",
    name: "Cleda Lucille Brown",
    nickname: "",
    branch: "Brown",
    parents: ["harry-brown", "edna-chase"],
    spouses: [],
    children: ["carol-sawyer"],
    birth: "1916 (Unknown)",
    death: "1988 (Unknown)",
    notes: ""
  },

  {
    id: "harry-brown",
    name: "Harry Leroy Brown",
    nickname: "",
    branch: "Brown",
    parents: ["fred-brown"],
    spouses: [],
    children: ["cleda-brown"],
    birth: "1885 (Unknown)",
    death: "1939 (Unknown)",
    notes: ""
  },

  {
    id: "fred-brown",
    name: "Fred E. Brown",
    nickname: "",
    branch: "Brown",
    parents: [],
    spouses: [],
    children: ["harry-brown"],
    birth: "1861 (Unknown)",
    death: "1917 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // CHASE BRANCH
  // -------------------------------------------------------

  {
    id: "edna-chase",
    name: "Edna E. Chase",
    nickname: "",
    branch: "Chase",
    parents: ["oscar-chase", "fannie-ingalls"],
    spouses: [],
    children: ["cleda-brown"],
    birth: "1889 (Unknown)",
    death: "1957 (Unknown)",
    notes: ""
  },

  {
    id: "oscar-chase",
    name: "Oscar Eugene Chase",
    nickname: "",
    branch: "Chase",
    parents: [],
    spouses: [],
    children: ["edna-chase"],
    birth: "1851 (Unknown)",
    death: "1921 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // INGALLS BRANCH
  // -------------------------------------------------------

  {
    id: "fannie-ingalls",
    name: "Fannie E. Ingalls",
    nickname: "",
    branch: "Ingalls",
    parents: ["samuel-ingalls", "margaret-delano"],
    spouses: [],
    children: ["edna-chase"],
    birth: "1859 (Unknown)",
    death: "1939 (Unknown)",
    notes: ""
  },

  {
    id: "samuel-ingalls",
    name: "Samuel Worthen Ingalls",
    nickname: "",
    branch: "Ingalls",
    parents: ["edmund-ingalls"],
    spouses: [],
    children: ["fannie-ingalls"],
    birth: "1770 (Unknown)",
    death: "1841 (Unknown)",
    notes: ""
  },

  {
    id: "edmund-ingalls",
    name: "Edmund Ingalls",
    nickname: "",
    branch: "Ingalls",
    parents: [],
    spouses: [],
    children: ["samuel-ingalls"],
    birth: "1598 (Unknown)",
    death: "1648 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // DELANO BRANCH
  // -------------------------------------------------------

  {
    id: "margaret-delano",
    name: "Margaret Delano",
    nickname: "",
    branch: "Delano",
    parents: [],
    spouses: [],
    children: ["fannie-ingalls"],
    birth: "1773 (Unknown)",
    death: "1836 (Unknown)",
    notes: ""
  },
    // -------------------------------------------------------
  // AUTO-GENERATED WESTBERG ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-westberg-ancestor-1",
    name: "Unknown Westberg Ancestor",
    nickname: "",
    branch: "Westberg",
    parents: [],
    spouses: [],
    children: ["unknown-westberg-ancestor-2", "unknown-westberg-ancestor-3"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  {
    id: "unknown-westberg-ancestor-2",
    name: "Unknown Westberg Ancestor",
    nickname: "",
    branch: "Westberg",
    parents: ["unknown-westberg-ancestor-1"],
    spouses: [],
    children: ["oscar-westberg"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  {
    id: "unknown-westberg-ancestor-3",
    name: "Unknown Westberg Ancestor",
    nickname: "",
    branch: "Westberg",
    parents: ["unknown-westberg-ancestor-1"],
    spouses: [],
    children: ["oscar-westberg"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED LOSIE / LOSEE ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-losie-ancestor-1",
    name: "Unknown Losie Ancestor",
    nickname: "",
    branch: "Losie",
    parents: [],
    spouses: [],
    children: ["lawrence-losie"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  {
    id: "unknown-losee-ancestor-1",
    name: "Unknown Losee Ancestor",
    nickname: "",
    branch: "Losee",
    parents: [],
    spouses: [],
    children: ["laurens-losee"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED KOECK ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-koeck-ancestor-1",
    name: "Unknown Koeck Ancestor",
    nickname: "",
    branch: "Koeck",
    parents: [],
    spouses: [],
    children: ["laurens-koeck"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED DENTON ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-denton-ancestor-1",
    name: "Unknown Denton Ancestor",
    nickname: "",
    branch: "Denton",
    parents: [],
    spouses: [],
    children: ["ceertje-denton"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED VANFLAESBECK ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-vanflaesbeck-ancestor-1",
    name: "Unknown VanFlaesbeck Ancestor",
    nickname: "",
    branch: "VanFlaesbeck",
    parents: [],
    spouses: [],
    children: ["margrietje-vanflaesbeck"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED BEARANCE ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-bearance-ancestor-1",
    name: "Unknown Bearance Ancestor",
    nickname: "",
    branch: "Bearance",
    parents: [],
    spouses: [],
    children: ["stanley-bearance"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED WOODMAN ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-woodman-ancestor-1",
    name: "Unknown Woodman Ancestor",
    nickname: "",
    branch: "Woodman",
    parents: [],
    spouses: [],
    children: ["samuel-woodman"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED LAMBERTON ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-lamberton-ancestor-1",
    name: "Unknown Lamberton Ancestor",
    nickname: "",
    branch: "Lamberton",
    parents: [],
    spouses: [],
    children: ["ruth-lamberton"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED LAKIN ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-lakin-ancestor-1",
    name: "Unknown Lakin Ancestor",
    nickname: "",
    branch: "Lakin",
    parents: [],
    spouses: [],
    children: ["roger-lakin"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED MEADE ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-meade-ancestor-1",
    name: "Unknown Meade Ancestor",
    nickname: "",
    branch: "Meade",
    parents: [],
    spouses: [],
    children: ["george-meade"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED SAWYER ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-sawyer-ancestor-1",
    name: "Unknown Sawyer Ancestor",
    nickname: "",
    branch: "Sawyer",
    parents: [],
    spouses: [],
    children: ["thomas-sawyer"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED BROWN ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-brown-ancestor-1",
    name: "Unknown Brown Ancestor",
    nickname: "",
    branch: "Brown",
    parents: [],
    spouses: [],
    children: ["fred-brown"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED CHASE ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-chase-ancestor-1",
    name: "Unknown Chase Ancestor",
    nickname: "",
    branch: "Chase",
    parents: [],
    spouses: [],
    children: ["oscar-chase"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED INGALLS ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-ingalls-ancestor-1",
    name: "Unknown Ingalls Ancestor",
    nickname: "",
    branch: "Ingalls",
    parents: [],
    spouses: [],
    children: ["edmund-ingalls"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // AUTO-GENERATED DELANO ANCESTORS
  // -------------------------------------------------------

  {
    id: "unknown-delano-ancestor-1",
    name: "Unknown Delano Ancestor",
    nickname: "",
    branch: "Delano",
    parents: [],
    spouses: [],
    children: ["margaret-delano"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  }
];
const people = [

  // -------------------------------------------------------
  // WESTBERG ROOT LINE
  // -------------------------------------------------------

  {
    id: "unknown-westberg-ancestor-1",
    name: "Unknown Westberg Ancestor",
    nickname: "",
    branch: "Westberg",
    parents: [],
    spouses: [],
    children: ["unknown-westberg-ancestor-2", "unknown-westberg-ancestor-3"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  {
    id: "unknown-westberg-ancestor-2",
    name: "Unknown Westberg Ancestor",
    nickname: "",
    branch: "Westberg",
    parents: ["unknown-westberg-ancestor-1"],
    spouses: [],
    children: ["oscar-westberg"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  {
    id: "unknown-westberg-ancestor-3",
    name: "Unknown Westberg Ancestor",
    nickname: "",
    branch: "Westberg",
    parents: ["unknown-westberg-ancestor-1"],
    spouses: [],
    children: ["oscar-westberg"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  {
    id: "oscar-westberg",
    name: "Oscar Westberg",
    nickname: "",
    branch: "Westberg",
    parents: ["unknown-westberg-ancestor-2", "unknown-westberg-ancestor-3"],
    spouses: ["martha-hornstrom"],
    children: ["axel-westberg"],
    birth: "Unknown (Sweden)",
    death: "Unknown (Minnesota)",
    notes: ""
  },

  {
    id: "martha-hornstrom",
    name: "Martha Selina Hornstrom",
    nickname: "",
    branch: "Hornstrom",
    parents: [],
    spouses: ["oscar-westberg"],
    children: ["axel-westberg"],
    birth: "1871 (Sweden)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "axel-westberg",
    name: "Axel Westberg",
    nickname: "",
    branch: "Westberg",
    parents: ["oscar-westberg", "martha-hornstrom"],
    spouses: ["myrtle-lafever"],
    children: ["ron-westberg"],
    birth: "1909 (Minnesota)",
    death: "1986",
    notes: ""
  },

  {
    id: "myrtle-lafever",
    name: "Myrtle J. LaFever",
    nickname: "",
    branch: "LaFever",
    parents: ["medos-lafever", "phoebe-raymond"],
    spouses: ["axel-westberg"],
    children: ["ron-westberg"],
    birth: "1914 (Turner, MI)",
    death: "2002 (St. Petersburg, FL)",
    notes: ""
  },

  {
    id: "ron-westberg",
    name: "Ronald Westberg",
    nickname: "Ron",
    branch: "Westberg",
    parents: ["axel-westberg", "myrtle-lafever"],
    spouses: ["sandra-losie"],
    children: ["brent-westberg"],
    birth: "1935 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "sandra-losie",
    name: "Sandra Jean Losie",
    nickname: "",
    branch: "Losie",
    parents: ["james-elon-losie", "mildred-bearance"],
    spouses: ["ron-westberg"],
    children: ["brent-westberg"],
    birth: "1940 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "brent-westberg",
    name: "Brent Westberg",
    nickname: "",
    branch: "Westberg",
    parents: ["ron-westberg", "sandra-losie"],
    spouses: ["cheri-lakin"],
    children: ["rachel-westberg", "alyssa-westberg"],
    birth: "1968 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "cheri-lakin",
    name: "Cheri Ann Lakin",
    nickname: "",
    branch: "Lakin",
    parents: ["roger-lakin", "carol-sawyer"],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"],
    birth: "1967 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "rachel-westberg",
    name: "Rachel Westberg",
    nickname: "",
    branch: "Westberg",
    parents: ["brent-westberg", "cheri-lakin"],
    spouses: [],
    children: [],
    birth: "1998 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "alyssa-westberg",
    name: "Alyssa Westberg",
    nickname: "",
    branch: "Westberg",
    parents: ["brent-westberg", "cheri-lakin"],
    spouses: [],
    children: [],
    birth: "2000 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  // -------------------------------------------------------
  // LaFEVER LINE
  // -------------------------------------------------------

  {
    id: "medos-lafever",
    name: "Harmedos LaFever",
    nickname: "Medos",
    branch: "LaFever",
    parents: ["napoleon-lafever", "delia-lafever"],
    spouses: ["phoebe-raymond"],
    children: ["myrtle-lafever"],
    birth: "1889 (Unknown)",
    death: "1964 (Unknown)",
    notes: ""
  },

  {
    id: "napoleon-lafever",
    name: "Napoleon LaFever",
    nickname: "",
    branch: "LaFever",
    parents: [],
    spouses: ["delia-lafever"],
    children: ["medos-lafever"],
    birth: "1860 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "delia-lafever",
    name: "Delia LaFever",
    nickname: "",
    branch: "LaFever",
    parents: [],
    spouses: ["napoleon-lafever"],
    children: ["medos-lafever"],
    birth: "1860 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  // -------------------------------------------------------
  // RAYMOND LINE
  // -------------------------------------------------------

  {
    id: "phoebe-raymond",
    name: "Phoebe Raymond",
    nickname: "",
    branch: "Raymond",
    parents: ["jerome-raymond", "louise-buckner"],
    spouses: ["medos-lafever"],
    children: ["myrtle-lafever"],
    birth: "1888 (Unknown)",
    death: "1952 (Unknown)",
    notes: ""
  },

  {
    id: "jerome-raymond",
    name: "Jerome Raymond",
    nickname: "",
    branch: "Raymond",
    parents: [],
    spouses: ["louise-buckner"],
    children: ["phoebe-raymond"],
    birth: "1835 (Quebec)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "louise-buckner",
    name: "Louise Buckner",
    nickname: "",
    branch: "Raymond",
    parents: [],
    spouses: ["jerome-raymond"],
    children: ["phoebe-raymond"],
    birth: "Unknown",
    death: "Unknown",
    notes: ""
  },
  // -------------------------------------------------------
  // LOSIE BRANCH
  // -------------------------------------------------------

  {
    id: "james-elon-losie",
    name: "James Elon Losie",
    nickname: "",
    branch: "Losie",
    parents: ["earl-judson-losie", "hazel-woodman"],
    spouses: [],
    children: ["sandra-losie"],
    birth: "1918 (Unknown)",
    death: "2002 (Unknown)",
    notes: ""
  },

  {
    id: "earl-judson-losie",
    name: "Earl Judson Losie",
    nickname: "",
    branch: "Losie",
    parents: ["george-leo-losie"],
    spouses: [],
    children: ["james-elon-losie"],
    birth: "1867 (Unknown)",
    death: "1938 (Unknown)",
    notes: ""
  },

  {
    id: "george-leo-losie",
    name: "George Leo Losie",
    nickname: "",
    branch: "Losie",
    parents: ["john-wesley-losie"],
    spouses: [],
    children: ["earl-judson-losie"],
    birth: "1828 (Unknown)",
    death: "1880 (Unknown)",
    notes: ""
  },

  {
    id: "john-wesley-losie",
    name: "John Wesley Losie",
    nickname: "",
    branch: "Losie",
    parents: ["lawrence-losie"],
    spouses: [],
    children: ["george-leo-losie"],
    birth: "1797 (Unknown)",
    death: "1865 (Unknown)",
    notes: ""
  },

  {
    id: "lawrence-losie",
    name: "Lawrence Losie",
    nickname: "",
    branch: "Losie",
    parents: ["jan-losee"],
    spouses: [],
    children: ["john-wesley-losie"],
    birth: "1765 (Unknown)",
    death: "1820 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // LOSEE BRANCH (Dutch Colonial)
  // -------------------------------------------------------

  {
    id: "jan-losee",
    name: "Jan Losee",
    nickname: "John L.",
    branch: "Losee",
    parents: ["laurens-losee"],
    spouses: [],
    children: ["lawrence-losie"],
    birth: "1738 (Unknown)",
    death: "1788 (Unknown)",
    notes: ""
  },

  {
    id: "laurens-losee",
    name: "Laurens Losee",
    nickname: "",
    branch: "Losee",
    parents: ["simon-losee"],
    spouses: [],
    children: ["jan-losee"],
    birth: "1705 (Unknown)",
    death: "1754 (Unknown)",
    notes: ""
  },

  {
    id: "simon-losee",
    name: "Simon Losee",
    nickname: "",
    branch: "Losee",
    parents: ["cornelius-losee"],
    spouses: [],
    children: ["laurens-losee"],
    birth: "1681 (Unknown)",
    death: "1763 (Unknown)",
    notes: ""
  },

  {
    id: "cornelius-losee",
    name: "Cornelius Losee",
    nickname: "",
    branch: "Losee",
    parents: ["laurens-koeck", "ceertje-denton"],
    spouses: [],
    children: ["simon-losee"],
    birth: "1644 (Unknown)",
    death: "1678 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // KOECK BRANCH (Danish → New York)
  // -------------------------------------------------------

  {
    id: "laurens-koeck",
    name: "Laurens Corneliszen Koeck",
    nickname: "",
    branch: "Koeck",
    parents: ["unknown-koeck-ancestor-1"],
    spouses: ["margrietje-vanflaesbeck"],
    children: ["cornelius-losee"],
    birth: "1640 (Denmark)",
    death: "1702 (New York)",
    notes: ""
  },

  {
    id: "unknown-koeck-ancestor-1",
    name: "Unknown Koeck Ancestor",
    nickname: "",
    branch: "Koeck",
    parents: [],
    spouses: [],
    children: ["laurens-koeck"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // VANFLAESBECK BRANCH (New Amsterdam)
  // -------------------------------------------------------

  {
    id: "margrietje-vanflaesbeck",
    name: "Margrietje Barents VanFlaesbeck",
    nickname: "",
    branch: "VanFlaesbeck",
    parents: ["unknown-vanflaesbeck-ancestor-1"],
    spouses: ["laurens-koeck"],
    children: ["cornelius-losee"],
    birth: "1658 (New Amsterdam)",
    death: "1702 (Unknown)",
    notes: ""
  },

  {
    id: "unknown-vanflaesbeck-ancestor-1",
    name: "Unknown VanFlaesbeck Ancestor",
    nickname: "",
    branch: "VanFlaesbeck",
    parents: [],
    spouses: [],
    children: ["margrietje-vanflaesbeck"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // DENTON BRANCH (Jamaica, NY)
  // -------------------------------------------------------

  {
    id: "ceertje-denton",
    name: "Ceertje Denton",
    nickname: "",
    branch: "Denton",
    parents: ["unknown-denton-ancestor-1"],
    spouses: [],
    children: ["cornelius-losee"],
    birth: "1658 (Jamaica, NY)",
    death: "1678 (Unknown)",
    notes: ""
  },

  {
    id: "unknown-denton-ancestor-1",
    name: "Unknown Denton Ancestor",
    nickname: "",
    branch: "Denton",
    parents: [],
    spouses: [],
    children: ["ceertje-denton"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },
  // -------------------------------------------------------
  // BEARANCE BRANCH
  // -------------------------------------------------------

  {
    id: "mildred-bearance",
    name: "Mildred Ilene Bearance",
    nickname: "",
    branch: "Bearance",
    parents: ["stanley-bearance", "hazel-woodman"],
    spouses: [],
    children: ["sandra-losie"],
    birth: "1919 (Unknown)",
    death: "2018 (Unknown)",
    notes: ""
  },

  {
    id: "stanley-bearance",
    name: "Stanley Bearance",
    nickname: "",
    branch: "Bearance",
    parents: ["unknown-bearance-ancestor-1"],
    spouses: ["hazel-woodman"],
    children: ["mildred-bearance"],
    birth: "Unknown",
    death: "Unknown",
    notes: ""
  },

  {
    id: "unknown-bearance-ancestor-1",
    name: "Unknown Bearance Ancestor",
    nickname: "",
    branch: "Bearance",
    parents: [],
    spouses: [],
    children: ["stanley-bearance"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // WOODMAN BRANCH
  // -------------------------------------------------------

  {
    id: "hazel-woodman",
    name: "Hazel Isabella Woodman",
    nickname: "",
    branch: "Woodman",
    parents: ["samuel-woodman", "ruth-lamberton"],
    spouses: ["stanley-bearance"],
    children: ["mildred-bearance", "james-elon-losie"],
    birth: "Unknown",
    death: "Unknown",
    notes: ""
  },

  {
    id: "samuel-woodman",
    name: "Samuel D. Woodman",
    nickname: "",
    branch: "Woodman",
    parents: ["unknown-woodman-ancestor-1"],
    spouses: ["ruth-lamberton"],
    children: ["hazel-woodman"],
    birth: "1829 (Unknown)",
    death: "1913 (Unknown)",
    notes: ""
  },

  {
    id: "unknown-woodman-ancestor-1",
    name: "Unknown Woodman Ancestor",
    nickname: "",
    branch: "Woodman",
    parents: [],
    spouses: [],
    children: ["samuel-woodman"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // LAMBERTON BRANCH
  // -------------------------------------------------------

  {
    id: "ruth-lamberton",
    name: "Ruth Elizabeth Lamberton",
    nickname: "",
    branch: "Lamberton",
    parents: ["unknown-lamberton-ancestor-1"],
    spouses: ["samuel-woodman"],
    children: ["hazel-woodman"],
    birth: "1836 (Unknown)",
    death: "1903 (Unknown)",
    notes: ""
  },

  {
    id: "unknown-lamberton-ancestor-1",
    name: "Unknown Lamberton Ancestor",
    nickname: "",
    branch: "Lamberton",
    parents: [],
    spouses: [],
    children: ["ruth-lamberton"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },
  // -------------------------------------------------------
  // LAKIN BRANCH
  // -------------------------------------------------------

  {
    id: "roger-lakin",
    name: "Roger W. Lakin",
    nickname: "",
    branch: "Lakin",
    parents: ["george-meade", "anna-oconnell"],
    spouses: [],
    children: ["cheri-lakin"],
    birth: "1935 (Unknown)",
    death: "2024 (Unknown)",
    notes: ""
  },

  {
    id: "cheri-lakin",
    name: "Cheri Ann Lakin",
    nickname: "",
    branch: "Lakin",
    parents: ["roger-lakin", "carol-sawyer"],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"],
    birth: "1967 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  // -------------------------------------------------------
  // MEADE BRANCH
  // -------------------------------------------------------

  {
    id: "george-meade",
    name: "George Meade",
    nickname: "",
    branch: "Meade",
    parents: ["samuel-sawyer"],
    spouses: [],
    children: ["roger-lakin"],
    birth: "1888 (Unknown)",
    death: "1954 (Unknown)",
    notes: ""
  },

  {
    id: "anna-oconnell",
    name: "Anna O'Connell",
    nickname: "",
    branch: "O'Connell",
    parents: [],
    spouses: [],
    children: ["roger-lakin"],
    birth: "1890 (Unknown)",
    death: "1962 (Unknown)",
    notes: ""
  },

  // -------------------------------------------------------
  // SAWYER BRANCH
  // -------------------------------------------------------

  {
    id: "carol-sawyer",
    name: "Carol Ann Sawyer",
    nickname: "",
    branch: "Sawyer",
    parents: ["robert-sawyer", "cleda-brown"],
    spouses: [],
    children: ["cheri-lakin"],
    birth: "1938 (Unknown)",
    death: "2016 (Unknown)",
    notes: ""
  },

  {
    id: "robert-sawyer",
    name: "Robert Russell Sawyer",
    nickname: "",
    branch: "Sawyer",
    parents: ["samuel-sawyer"],
    spouses: [],
    children: ["carol-sawyer"],
    birth: "1915 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "samuel-sawyer",
    name: "Samuel Sawyer",
    nickname: "",
    branch: "Sawyer",
    parents: ["jonathan-sawyer"],
    spouses: [],
    children: ["george-meade", "robert-sawyer"],
    birth: "1810 (Unknown)",
    death: "1870 (Unknown)",
    notes: ""
  },

  {
    id: "jonathan-sawyer",
    name: "Jonathan Sawyer",
    nickname: "",
    branch: "Sawyer",
    parents: ["thomas-sawyer"],
    spouses: [],
    children: ["samuel-sawyer"],
    birth: "1770 (Unknown)",
    death: "1830 (Unknown)",
    notes: ""
  },

  {
    id: "thomas-sawyer",
    name: "Thomas Sawyer",
    nickname: "",
    branch: "Sawyer",
    parents: ["unknown-sawyer-ancestor-1"],
    spouses: [],
    children: ["jonathan-sawyer"],
    birth: "1700 (Unknown)",
    death: "Unknown",
    notes: ""
  },

  {
    id: "unknown-sawyer-ancestor-1",
    name: "Unknown Sawyer Ancestor",
    nickname: "",
    branch: "Sawyer",
    parents: [],
    spouses: [],
    children: ["thomas-sawyer"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // BROWN BRANCH
  // -------------------------------------------------------

  {
    id: "cleda-brown",
    name: "Cleda Lucille Brown",
    nickname: "",
    branch: "Brown",
    parents: ["harry-brown", "edna-chase"],
    spouses: [],
    children: ["carol-sawyer"],
    birth: "1916 (Unknown)",
    death: "1988 (Unknown)",
    notes: ""
  },

  {
    id: "harry-brown",
    name: "Harry Leroy Brown",
    nickname: "",
    branch: "Brown",
    parents: ["fred-brown"],
    spouses: [],
    children: ["cleda-brown"],
    birth: "1885 (Unknown)",
    death: "1939 (Unknown)",
    notes: ""
  },

  {
    id: "fred-brown",
    name: "Fred E. Brown",
    nickname: "",
    branch: "Brown",
    parents: ["unknown-brown-ancestor-1"],
    spouses: [],
    children: ["harry-brown"],
    birth: "1861 (Unknown)",
    death: "1917 (Unknown)",
    notes: ""
  },

  {
    id: "unknown-brown-ancestor-1",
    name: "Unknown Brown Ancestor",
    nickname: "",
    branch: "Brown",
    parents: [],
    spouses: [],
    children: ["fred-brown"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // CHASE BRANCH
  // -------------------------------------------------------

  {
    id: "edna-chase",
    name: "Edna E. Chase",
    nickname: "",
    branch: "Chase",
    parents: ["oscar-chase", "fannie-ingalls"],
    spouses: [],
    children: ["cleda-brown"],
    birth: "1889 (Unknown)",
    death: "1957 (Unknown)",
    notes: ""
  },

  {
    id: "oscar-chase",
    name: "Oscar Eugene Chase",
    nickname: "",
    branch: "Chase",
    parents: ["unknown-chase-ancestor-1"],
    spouses: [],
    children: ["edna-chase"],
    birth: "1851 (Unknown)",
    death: "1921 (Unknown)",
    notes: ""
  },

  {
    id: "unknown-chase-ancestor-1",
    name: "Unknown Chase Ancestor",
    nickname: "",
    branch: "Chase",
    parents: [],
    spouses: [],
    children: ["oscar-chase"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // INGALLS BRANCH
  // -------------------------------------------------------

  {
    id: "fannie-ingalls",
    name: "Fannie E. Ingalls",
    nickname: "",
    branch: "Ingalls",
    parents: ["samuel-ingalls", "margaret-delano"],
    spouses: [],
    children: ["edna-chase"],
    birth: "1859 (Unknown)",
    death: "1939 (Unknown)",
    notes: ""
  },

  {
    id: "samuel-ingalls",
    name: "Samuel Worthen Ingalls",
    nickname: "",
    branch: "Ingalls",
    parents: ["edmund-ingalls"],
    spouses: [],
    children: ["fannie-ingalls"],
    birth: "1770 (Unknown)",
    death: "1841 (Unknown)",
    notes: ""
  },

  {
    id: "edmund-ingalls",
    name: "Edmund Ingalls",
    nickname: "",
    branch: "Ingalls",
    parents: ["unknown-ingalls-ancestor-1"],
    spouses: [],
    children: ["samuel-ingalls"],
    birth: "1598 (Unknown)",
    death: "1648 (Unknown)",
    notes: ""
  },

  {
    id: "unknown-ingalls-ancestor-1",
    name: "Unknown Ingalls Ancestor",
    nickname: "",
    branch: "Ingalls",
    parents: [],
    spouses: [],
    children: ["edmund-ingalls"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  },

  // -------------------------------------------------------
  // DELANO BRANCH
  // -------------------------------------------------------

  {
    id: "margaret-delano",
    name: "Margaret Delano",
    nickname: "",
    branch: "Delano",
    parents: ["unknown-delano-ancestor-1"],
    spouses: [],
    children: ["fannie-ingalls"],
    birth: "1773 (Unknown)",
    death: "1836 (Unknown)",
    notes: ""
  },

  {
    id: "unknown-delano-ancestor-1",
    name: "Unknown Delano Ancestor",
    nickname: "",
    branch: "Delano",
    parents: [],
    spouses: [],
    children: ["margaret-delano"],
    birth: "Unknown",
    death: "Unknown",
    notes: "Auto-generated placeholder ancestor"
  }
];
