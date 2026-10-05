// Homepage behaviour, ported from the "Intelligence, orchestrated." reference
// (app.js + dashboard.js). Kept close to the original so the interaction
// design stays identical; every listener is bound to an AbortSignal so React
// can tear it down on unmount / client-side navigation.

const scenarios = {
  executive: {
    prompt: "“STIV, prepare tomorrow’s executive briefing.”",
    name: "EXECUTIVE WORKFLOW",
    run: "Run the briefing",
    ready: "Executive briefing ready",
    title: "Tomorrow, in focus.",
    steps: [
      ["STIV Memory", "Retrieving organizational context"],
      ["Marketing AI", "Analysing campaign performance"],
      ["Finance AI", "Reviewing financial performance"],
      ["Legal AI", "Reviewing pending agreements"],
      ["Executive AI", "Compiling executive insights"],
    ],
    summary: [
      ["MARKETING", "Campaign performance summarised"],
      ["FINANCE", "Financial variances highlighted"],
      ["LEGAL", "Pending agreements prioritised"],
    ],
    detail:
      "<h4>Executive briefing / Tomorrow</h4><dl><dt>Performance</dt><dd>The launch campaign is ready for a performance review. Marketing has prepared channel-level insights.</dd><dt>Finance</dt><dd>Three reconciliation items require the controller’s attention before the reporting close.</dd><dt>Legal</dt><dd>One supplier agreement awaits review of a non-standard renewal clause.</dd><dt>Next step</dt><dd>Confirm priorities with the division leads before circulating the briefing.</dd></dl>",
    governance: "Prepared for your review. The briefing has not been circulated.",
  },
  campaign: {
    prompt: "“STIV, coordinate our next product launch campaign.”",
    name: "CAMPAIGN WORKFLOW",
    run: "Coordinate the launch",
    ready: "Campaign plan ready",
    title: "A launch, in alignment.",
    steps: [
      ["STIV Memory", "Retrieving brand guidelines and product context"],
      ["Marketing AI", "Preparing campaign strategy and channel plan"],
      ["Finance AI", "Checking the proposed campaign budget"],
      ["Sales AI", "Lining up follow-up for launch enquiries"],
      ["Executive AI", "Preparing the launch decision summary"],
    ],
    summary: [
      ["STRATEGY", "A shared campaign direction"],
      ["CONTENT", "Social and email drafts coordinated"],
      ["CONTROL", "Budget and launch awaiting approval"],
    ],
    detail:
      "<h4>Product launch / Coordinated plan</h4><dl><dt>Direction</dt><dd>Build the launch around one product benefit, aligned with the company’s brand guidelines.</dd><dt>Channels</dt><dd>Social content introduces the product. Email provides the detail and a clear next step.</dd><dt>Sequence</dt><dd>Prepare teaser content, review launch-day assets, then follow with a product explainer.</dd><dt>Review</dt><dd>Marketing approves the assets; Finance confirms the proposed budget before publication.</dd></dl>",
    governance:
      "Drafts are ready for human review. No content is published and no budget is committed.",
  },
  contract: {
    prompt: "“STIV, review this supplier agreement against our playbook.”",
    name: "CONTRACT REVIEW WORKFLOW",
    run: "Review the agreement",
    ready: "Contract review ready",
    title: "The terms, made clear.",
    steps: [
      ["STIV Memory", "Retrieving the contract playbook and policies"],
      ["Legal AI", "Comparing clauses against approved positions"],
      ["Finance AI", "Reviewing payment terms and financial exposure"],
      ["Operations AI", "Checking delivery obligations and signatory context"],
      ["Executive AI", "Preparing the decision summary"],
    ],
    summary: [
      ["LEGAL", "Non-standard clauses highlighted"],
      ["FINANCE", "Payment exposure summarised"],
      ["DECISION", "Focused review for your legal team"],
    ],
    detail:
      "<h4>Supplier agreement / Review summary</h4><dl><dt>Renewal</dt><dd>The automatic renewal provision differs from the playbook. Legal should review the notice period.</dd><dt>Payment</dt><dd>Advance payment terms require Finance to confirm the proposed exposure.</dd><dt>Authority</dt><dd>Confirm the authorized signatory against the relevant corporate records.</dd><dt>Next step</dt><dd>Legal reviews the flagged clauses and proposed edits before any agreement is signed.</dd></dl>",
    governance: "Prepared for legal review. No agreement has been approved, signed or sent.",
  },
};

const sources = {
  campaign: { name: "Campaign performance summary", type: "Marketing / Sample document", excerpt: "Launch content is prepared for review. Channel performance should be reviewed before the next allocation decision.", scope: "Marketing and Executive", time: "09:38" },
  finance: { name: "Reporting close / Variance notes", type: "Finance / Sample report", excerpt: "Three reconciliation items need controller review before the reporting close.", scope: "Finance and Executive", time: "09:36" },
  legal: { name: "Supplier agreement / Review draft", type: "Legal / Sample agreement", excerpt: "The automatic renewal provision differs from the playbook. Review the notice period before approval.", scope: "Legal and Executive", time: "09:32" },
  policy: { name: "Internal approval policy", type: "STIV Memory / Sample policy", excerpt: "External communications, material financial actions and contract execution require the designated human approver.", scope: "Authorized workflow roles", time: "09:27" },
};

function buildItems() {
  const items = {
    executive: {
      role: "EXECUTIVE AI",
      title: "Tomorrow, in focus.",
      description: "A coordinated briefing for your next leadership conversation.",
      content: [
        ["Marketing", "Launch content is ready for review. Confirm the channel plan before publishing."],
        ["Finance", "Three reconciliation items require the controller’s attention before reporting close."],
        ["Legal", "One supplier agreement contains a non-standard renewal clause."],
        ["Recommended focus", "Review the launch, resolve reporting exceptions and confirm the supplier agreement’s renewal terms."],
      ],
      sources: ["campaign", "finance", "legal", "policy"],
      activity: [
        ["09:27", "STIV Memory retrieved approval policy", "Read access scoped to this workflow."],
        ["09:32", "Legal AI prepared agreement review", "Flagged renewal clause for human review."],
        ["09:36", "Finance AI prepared variance notes", "Controller review remains required."],
        ["09:38", "Marketing AI summarised campaign status", "Content has not been published."],
        ["09:41", "Executive AI compiled the briefing", "Ready for your review. No circulation."],
      ],
    },
    finance: {
      role: "FINANCE AI",
      title: "Reporting close, clarified.",
      description: "A draft variance summary with a traceable path back to source material.",
      content: [
        ["Reconciliation", "Three accounts have outstanding reconciliation items."],
        ["Review needed", "The controller should confirm the exceptions before finalizing the close."],
        ["Prepared output", "A focused summary brings the outstanding items and responsible reviewers into one place."],
      ],
      sources: ["finance", "policy"],
      activity: [
        ["09:27", "STIV Memory retrieved approval boundaries", "Finance permissions checked."],
        ["09:36", "Finance AI prepared variance notes", "Draft prepared from sample report."],
        ["09:38", "Summary attached to executive briefing", "Human review required."],
      ],
    },
    legal: {
      role: "LEGAL AI",
      title: "The agreement, examined.",
      description: "Review the flagged term, supporting policy and the human decision point.",
      approval: "legal",
      content: [
        ["Flagged clause", "Automatic renewal differs from the approved contract playbook."],
        ["Proposed next step", "Legal should review the notice period and prepare a suitable position before returning the agreement."],
        ["Authority", "Only the designated human approver may approve the review. Contract execution remains a separate action."],
      ],
      sources: ["legal", "policy"],
      activity: [
        ["09:27", "STIV Memory retrieved the approval policy", "Role-scoped document access."],
        ["09:30", "Legal AI compared the agreement", "Non-standard renewal term identified."],
        ["09:32", "Review package prepared", "Awaiting a human decision."],
      ],
    },
    knowledge: {
      role: "STIV MEMORY",
      title: "Context, with provenance.",
      description: "The organizational knowledge behind this sample workflow.",
      content: [
        ["Knowledge layer", "STIV Memory makes relevant company context available to authorized AI capabilities."],
        ["Retrieved policy", "The internal approval policy defines who reviews consequential actions."],
        ["Boundaries", "Context is scoped to the role and purpose of the workflow. Access does not automatically extend across every division."],
      ],
      sources: ["policy"],
      activity: [
        ["09:26", "Workflow requested policy context", "Purpose: prepare an executive briefing."],
        ["09:27", "STIV Memory retrieved the relevant policy", "Read-only context supplied to authorized roles."],
      ],
    },
    approvals: {
      role: "HUMAN CONTROL",
      title: "The decisions stay with you.",
      description: "Inspect three prepared requests and try the sample approval flow.",
      content: [],
      sources: ["campaign", "finance", "legal", "policy"],
      activity: [],
    },
    audit: {
      role: "WORKFLOW GOVERNANCE",
      title: "Every step, accounted for.",
      description: "Follow the sequence from retrieved context to prepared work and human review.",
      content: [
        ["Traceable by design", "A source, a role and a human decision point accompany the workflow."],
        ["Read before action", "The sample agents prepare outputs. External actions remain behind their approval gates."],
      ],
      sources: ["policy", "campaign", "finance", "legal"],
      activity: [],
    },
  };
  items.audit.activity = items.executive.activity;
  items.approvals.activity = items.executive.activity;
  return items;
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export function initHome(root, { roles }) {
  const ac = new AbortController();
  const signal = ac.signal;
  const timers = new Set();
  const $ = (s) => root.querySelector(s);
  const $$ = (s) => [...root.querySelectorAll(s)];
  const on = (el, type, fn) => el && el.addEventListener(type, fn, { signal });
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  $$(".reveal").forEach((e) => observer.observe(e));

  // Platform constellation
  const notes = $(".connection-note");
  $$(".node").forEach((n) =>
    on(n, "click", () => {
      $$(".node").forEach((x) => x.classList.remove("active"));
      n.classList.add("active");
      notes.textContent = n.dataset.note;
    }),
  );

  // Workforce tabs (markup is server-rendered; this wires selection)
  const tabs = $("#workforce-tabs");
  const tabButtons = [...tabs.children];
  function selectRole(i) {
    const r = roles[i];
    tabButtons.forEach((b, j) => {
      b.setAttribute("aria-selected", String(j === i));
      b.tabIndex = j === i ? 0 : -1;
    });
    $("#workforce-detail").setAttribute("aria-labelledby", "role-" + i);
    $("#role-label").textContent = r.trait.toUpperCase();
    $("#role-title").textContent = r.name;
    $("#role-description").textContent = r.description;
    $(".detail-symbol").textContent = r.symbol;
    const link = $("#role-link");
    link.setAttribute("href", r.href);
    link.textContent = "Explore " + r.name;
    $("#role-tasks").replaceChildren(
      ...r.tasks.map((t) => {
        const e = document.createElement("span");
        e.className = "task";
        e.textContent = t;
        return e;
      }),
    );
  }
  tabButtons.forEach((b, i) => {
    on(b, "click", () => selectRole(i));
    on(b, "mouseenter", () => {
      if (matchMedia("(hover:hover)").matches) selectRole(i);
    });
    on(b, "keydown", (e) => {
      let j = i;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") j = (i + 1) % roles.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") j = (i + roles.length - 1) % roles.length;
      else if (e.key === "Home") j = 0;
      else if (e.key === "End") j = roles.length - 1;
      else return;
      e.preventDefault();
      selectRole(j);
      tabButtons[j].focus();
    });
  });

  // Integrations
  $$("[data-integration]").forEach((b) =>
    on(b, "click", () => {
      $$("[data-integration]").forEach((x) => x.classList.remove("selected"));
      b.classList.add("selected");
      $("#integration-note").textContent = b.dataset.integrationNote || b.dataset.integration + " / scoped connection to STIV";
    }),
  );

  // Orchestration demo
  const run = $("#run"),
    steps = $("#steps"),
    briefing = $("#briefing"),
    status = $("#demo-status"),
    scenarioTabs = $$(".scenario-tab");
  let selectedScenario = "executive",
    runGeneration = 0,
    active = false;
  const core = (state, scenario) =>
    window.dispatchEvent(new CustomEvent("stiv:core", { detail: { state, scenario } }));
  const wait = (ms) =>
    new Promise((r) => {
      const t = setTimeout(() => {
        timers.delete(t);
        r();
      }, ms);
      timers.add(t);
    });

  function chooseScenario(key) {
    if (!scenarios[key]) return;
    selectedScenario = key;
    runGeneration++;
    active = false;
    const s = scenarios[key];
    scenarioTabs.forEach((b) => {
      const selected = b.dataset.scenario === key;
      b.setAttribute("aria-selected", String(selected));
      b.tabIndex = selected ? 0 : -1;
    });
    $("#scenario-panel").setAttribute("aria-labelledby", "scenario-" + key);
    $("#scenario-prompt").textContent = s.prompt;
    $("#workflow-name").textContent = s.name;
    $("#workflow-count").textContent = s.steps.length + " capabilities · Human governed";
    briefing.hidden = true;
    briefing.querySelector("details").open = false;
    steps.replaceChildren();
    status.textContent = "Ready when you are.";
    run.disabled = false;
    run.textContent = s.run;
    core("idle", key);
  }
  scenarioTabs.forEach((b, i) => {
    on(b, "click", () => chooseScenario(b.dataset.scenario));
    on(b, "keydown", (e) => {
      let next = i;
      if (e.key === "ArrowRight") next = (i + 1) % scenarioTabs.length;
      else if (e.key === "ArrowLeft") next = (i + scenarioTabs.length - 1) % scenarioTabs.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = scenarioTabs.length - 1;
      else return;
      e.preventDefault();
      chooseScenario(scenarioTabs[next].dataset.scenario);
      scenarioTabs[next].focus();
    });
  });
  on(run, "click", async () => {
    if (active) return;
    active = true;
    const generation = ++runGeneration,
      s = scenarios[selectedScenario];
    run.disabled = true;
    run.textContent = "Orchestrating…";
    briefing.hidden = true;
    briefing.querySelector("details").open = false;
    steps.replaceChildren();
    status.textContent = "Coordinating your AI workforce";
    core("working", selectedScenario);
    for (let i = 0; i < s.steps.length; i++) {
      if (generation !== runGeneration || signal.aborted) return;
      const row = document.createElement("div");
      row.className = "step current";
      const icon = document.createElement("span");
      icon.className = "step-icon";
      icon.textContent = i + 1;
      const name = document.createElement("strong");
      name.textContent = s.steps[i][0];
      const task = document.createElement("small");
      task.textContent = s.steps[i][1];
      row.append(icon, name, task);
      steps.appendChild(row);
      await wait(reduced ? 80 : 950);
      if (generation !== runGeneration || signal.aborted) return;
      row.className = "step done";
      icon.textContent = "✓";
    }
    $("#result-label").textContent = s.ready.toUpperCase() + " ✓";
    $("#result-title").textContent = s.title;
    $("#result-summary").replaceChildren(
      ...s.summary.map(([label, text]) => {
        const div = document.createElement("div"),
          small = document.createElement("small"),
          p = document.createElement("p");
        small.textContent = label;
        p.textContent = text;
        div.append(small, p);
        return div;
      }),
    );
    $("#result-detail").innerHTML =
      s.detail + '<span class="source-tag">ILLUSTRATIVE OUTPUT / NO CONNECTED BUSINESS DATA</span>';
    $("#result-governance").textContent = s.governance;
    briefing.hidden = false;
    status.textContent = s.ready + ". Awaiting your review.";
    run.textContent = "Replay workflow";
    run.disabled = false;
    active = false;
    core("ready", selectedScenario);
  });
  chooseScenario("executive");

  // Sample-workspace inspector dialog
  const dialog = $("#inspect-dialog"),
    panel = $("#inspect-panel"),
    dtabs = [...dialog.querySelectorAll("[data-detail-tab]")],
    approvals = { marketing: "pending", legal: "pending", finance: "pending" },
    items = buildItems();
  let current = "executive",
    tab = "overview";

  function approvalBlock(key) {
    const title = { marketing: "Campaign launch assets", finance: "Reporting close summary", legal: "Supplier agreement review" }[key];
    const pending = approvals[key] === "pending";
    return (
      '<div class="request-row"><div><span class="eyebrow">' + key.toUpperCase() + " / SAMPLE APPROVAL</span><h3>" + title + "</h3><p>" +
      (pending ? "Prepared for the designated human reviewer." : "Sample decision recorded for this page session.") +
      '</p></div><div class="request-actions">' +
      (pending
        ? '<button class="button primary" data-approve="' + key + '">Approve sample</button><button class="button quiet" data-return="' + key + '">Return for changes</button>'
        : '<span class="decision-tag">' + (approvals[key] === "approved" ? "Approved in sample" : "Returned for changes") + "</span>") +
      "</div></div>"
    );
  }
  function syncCounts() {
    const n = Object.values(approvals).filter((v) => v === "pending").length;
    $$(".approval-count").forEach((e) => (e.textContent = String(n).padStart(2, "0")));
    $("#priority-count").textContent = n ? n + " " + (n === 1 ? "priority." : "priorities.") : "Reviews complete.";
  }
  function render() {
    const item = items[current];
    $("#inspect-role").textContent = item.role;
    $("#inspect-title").textContent = item.title;
    $("#inspect-description").textContent = item.description;
    dtabs.forEach((b) => {
      const yes = b.dataset.detailTab === tab;
      b.setAttribute("aria-selected", String(yes));
      b.tabIndex = yes ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", "inspect-tab-" + tab);
    let html = "";
    if (tab === "overview") {
      if (current === "approvals") html = Object.keys(approvals).map(approvalBlock).join("");
      else {
        html = item.content.map(([title, text]) => '<section class="insight-block"><h3>' + esc(title) + "</h3><p>" + esc(text) + "</p></section>").join("");
        if (item.approval) html += approvalBlock(item.approval);
        html += '<button class="source-jump" data-switch="sources">Inspect the supporting sources</button>';
      }
    } else if (tab === "sources") {
      html =
        '<p class="panel-intro">Illustrative documents show how an insight can remain connected to its organizational context.</p>' +
        item.sources
          .map((key) => {
            const source = sources[key];
            return (
              '<details class="source-document"><summary><span class="source-icon">▤</span><span><strong>' + esc(source.name) + "</strong><small>" + esc(source.type) +
              '</small></span></summary><div class="source-excerpt"><p>' + esc(source.excerpt) + "</p><dl><dt>Access scope</dt><dd>" + esc(source.scope) +
              "</dd><dt>Retrieved</dt><dd>" + source.time + " / sample workflow</dd><dt>Action</dt><dd>Read-only context</dd></dl></div></details>"
            );
          })
          .join("");
    } else {
      html =
        '<ol class="audit-timeline">' +
        item.activity.map(([time, title, text]) => "<li><time>" + time + "</time><div><h3>" + esc(title) + "</h3><p>" + esc(text) + "</p></div></li>").join("") +
        "</ol>";
      if (current === "legal" || current === "approvals")
        html +=
          '<div class="audit-decision"><span class="eyebrow">HUMAN DECISIONS / THIS PAGE SESSION</span>' +
          Object.keys(approvals).map((k) => "<p>" + k.charAt(0).toUpperCase() + k.slice(1) + ": " + esc(approvals[k].replaceAll("-", " ")) + "</p>").join("") +
          "</div>";
    }
    panel.innerHTML = html;
    panel.querySelector("[data-switch]")?.addEventListener("click", () => {
      tab = "sources";
      render();
      dtabs[1].focus();
    });
    panel.querySelectorAll("[data-approve],[data-return]").forEach((button) =>
      button.addEventListener("click", () => {
        const key = button.dataset.approve ?? button.dataset.return;
        approvals[key] = button.dataset.approve ? "approved" : "returned";
        syncCounts();
        render();
        $("#inspect-status").textContent =
          (button.dataset.approve ? "Sample approval recorded." : "Sample request returned for changes.") + " No external action was taken.";
        panel.focus();
      }),
    );
  }
  $$("[data-inspect]").forEach((b) =>
    on(b, "click", () => {
      current = b.dataset.inspect;
      tab = current === "audit" ? "activity" : "overview";
      $("#inspect-status").textContent = "Illustrative data. No external action is taken.";
      render();
      dialog.showModal();
      document.body.classList.add("dialog-open");
    }),
  );
  dtabs.forEach((b, i) => {
    on(b, "click", () => {
      tab = b.dataset.detailTab;
      render();
    });
    on(b, "keydown", (e) => {
      let j = i;
      if (e.key === "ArrowRight") j = (i + 1) % dtabs.length;
      else if (e.key === "ArrowLeft") j = (i + dtabs.length - 1) % dtabs.length;
      else if (e.key === "Home") j = 0;
      else if (e.key === "End") j = dtabs.length - 1;
      else return;
      e.preventDefault();
      tab = dtabs[j].dataset.detailTab;
      render();
      dtabs[j].focus();
    });
  });
  on(dialog.querySelector(".dialog-close"), "click", () => dialog.close());
  on(dialog, "close", () => document.body.classList.remove("dialog-open"));
  on(dialog, "click", (e) => {
    if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
    }
  });

  return () => {
    ac.abort();
    observer.disconnect();
    timers.forEach(clearTimeout);
    if (dialog.open) dialog.close();
    document.body.classList.remove("dialog-open");
  };
}

// Progressively enhanced 3D STIV Core (ported from core.js). Mobile,
// reduced-motion and data-saver visitors keep the lightweight image.
export function shouldEnhanceCore() {
  return (
    matchMedia("(min-width: 900px)").matches &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !navigator.connection?.saveData
  );
}

export function initCore(root, T) {
  const ac = new AbortController();
  const signal = ac.signal;
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const desktop = matchMedia("(min-width: 900px)");
  const stages = [...root.querySelectorAll("[data-core-stage]")];
  const scenes = [];
  const observers = [];
  let pointerX = 0,
    pointerY = 0,
    working = 0,
    workingTarget = 0,
    hidden = document.hidden,
    lastTime = 0,
    frame = 0;
  const hero = root.querySelector(".hero");
  if (matchMedia("(pointer:fine)").matches && hero) {
    hero.addEventListener(
      "pointermove",
      (e) => {
        pointerX = (e.clientX / innerWidth - 0.5) * 0.35;
        pointerY = (e.clientY / innerHeight - 0.5) * 0.22;
      },
      { signal },
    );
    hero.addEventListener(
      "pointerleave",
      () => {
        pointerX = 0;
        pointerY = 0;
      },
      { signal },
    );
  }
  window.addEventListener(
    "stiv:core",
    (e) => {
      workingTarget = e.detail.state === "working" ? 1 : 0;
    },
    { signal },
  );

  // Studio light environment: broad, soft sources create silver reflections.
  function studioEnvironment(renderer) {
    const studio = new T.Scene();
    studio.background = new T.Color(0x121820);
    const panels = [
      [[0, 5, 0], [9, 1, 7], 0xe8edf5],
      [[5, 1, 2], [1, 8, 7], 0x738fae],
      [[-5, 2, -2], [1, 6, 8], 0xd9d3c9],
      [[0, 0, 6], [5, 7, 1], 0x778698],
      [[0, -4, 1], [8, 1, 6], 0x263749],
    ];
    for (const [p, size, color] of panels) {
      const mesh = new T.Mesh(new T.BoxGeometry(...size), new T.MeshBasicMaterial({ color }));
      mesh.position.set(...p);
      studio.add(mesh);
    }
    const pmrem = new T.PMREMGenerator(renderer);
    const texture = pmrem.fromScene(studio, 0.08).texture;
    pmrem.dispose();
    studio.traverse((o) => {
      if (o.isMesh) {
        o.geometry.dispose();
        o.material.dispose();
      }
    });
    return texture;
  }

  for (const host of stages) {
    let renderer;
    try {
      renderer = new T.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    } catch {
      continue;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setClearColor(0x08090b, 0);
    renderer.outputColorSpace = T.SRGBColorSpace;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    const scene = new T.Scene(),
      camera = new T.PerspectiveCamera(34, 1, 0.1, 30);
    camera.position.z = 8.7;
    scene.environment = studioEnvironment(renderer);
    const object = new T.Group();
    scene.add(object);
    const material = new T.MeshPhysicalMaterial({ color: 0xa5afb9, metalness: 1, roughness: 0.23, clearcoat: 0.5, clearcoatRoughness: 0.22, envMapIntensity: 1.5, side: T.DoubleSide });
    const geometry = new T.TorusGeometry(1.53, 0.215, 14, 160);
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) positions.setZ(i, positions.getZ(i) * 0.24);
    geometry.computeVertexNormals();
    const ribbons = [];
    for (let i = 0; i < 7; i++) {
      const ribbon = new T.Mesh(geometry, material);
      ribbon.rotation.set((i - 3) * 0.23, (i - 3) * 0.29, (i - 3) * 0.13);
      ribbons.push(ribbon);
      object.add(ribbon);
    }
    // A narrow central band anchors the nested geometry as it unfolds.
    const inner = new T.Mesh(
      new T.TorusGeometry(1.03, 0.025, 8, 120),
      new T.MeshPhysicalMaterial({ color: 0x9bb6ce, metalness: 1, roughness: 0.28, envMapIntensity: 1.1 }),
    );
    inner.rotation.x = 0.28;
    object.add(inner);
    scene.add(new T.HemisphereLight(0xe6edf5, 0x182535, 2));
    const key = new T.DirectionalLight(0xfff2de, 3.5);
    key.position.set(-3, 5, 5);
    scene.add(key);
    const edge = new T.DirectionalLight(0x91b7dc, 2.5);
    edge.position.set(4, 0, -2);
    scene.add(edge);
    host.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("aria-hidden", "true");
    const state = { host, renderer, scene, camera, object, ribbons, inner, edge, visible: false, lost: false, type: host.dataset.coreStage, started: false };
    scenes.push(state);
    const resize = () => {
      const rect = host.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    observers.push(ro);
    resize();
    renderer.domElement.addEventListener(
      "webglcontextlost",
      (e) => {
        e.preventDefault();
        state.lost = true;
        host.classList.remove("ready");
        host.parentElement.classList.remove("has-3d");
      },
      { signal },
    );
    renderer.domElement.addEventListener(
      "webglcontextrestored",
      () => {
        state.lost = false;
        state.started = false;
      },
      { signal },
    );
    const io = new IntersectionObserver(
      (entries) => {
        state.visible = entries[0].isIntersecting;
        schedule();
      },
      { rootMargin: "100px" },
    );
    io.observe(host);
    observers.push(io);
  }

  function schedule() {
    if (!frame && !hidden && !signal.aborted && desktop.matches && !motion.matches && scenes.some((s) => s.visible && !s.lost))
      frame = requestAnimationFrame(render);
  }
  function render(now) {
    frame = 0;
    if (hidden || !desktop.matches || motion.matches || signal.aborted) return;
    if (now - lastTime < 33) {
      schedule();
      return;
    }
    lastTime = now;
    const time = now * 0.001;
    working += (workingTarget - working) * 0.025;
    for (const s of scenes) {
      if (!s.visible || s.lost) continue;
      const rect = s.host.parentElement.getBoundingClientRect();
      const progress = T.MathUtils.clamp((innerHeight * 0.8 - rect.top) / (rect.height + innerHeight * 0.5), 0, 1);
      const unfold = s.type === "unity" ? Math.sin(progress * Math.PI) * 0.11 : 0;
      const breath = 1 + Math.sin(time * 0.45) * 0.025;
      s.object.scale.setScalar(breath);
      s.object.rotation.x = 0.42 + Math.sin(time * 0.075) * 0.16 + pointerY;
      s.object.rotation.y = time * 0.055 + pointerX + progress * 0.45;
      s.object.rotation.z = -0.22 + Math.sin(time * 0.085) * 0.06;
      s.object.position.y = Math.sin(time * 0.4) * 0.045;
      s.ribbons.forEach((r, i) => {
        r.rotation.x = (i - 3) * (0.23 + unfold);
        r.rotation.y = (i - 3) * (0.29 + unfold * 0.7);
        r.position.z = (i - 3) * unfold * 0.14;
      });
      s.inner.rotation.z = time * 0.08;
      s.edge.intensity = 2.5 + working * 0.7;
      try {
        s.renderer.render(s.scene, s.camera);
        if (!s.started) {
          s.started = true;
          s.host.classList.add("ready");
          s.host.parentElement.classList.add("has-3d");
        }
      } catch {
        s.lost = true;
        s.host.classList.remove("ready");
        s.host.parentElement.classList.remove("has-3d");
      }
    }
    schedule();
  }
  document.addEventListener(
    "visibilitychange",
    () => {
      hidden = document.hidden;
      if (hidden && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else schedule();
    },
    { signal },
  );
  const disable = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    scenes.forEach((s) => {
      s.host.classList.remove("ready");
      s.host.parentElement.classList.remove("has-3d");
    });
  };
  motion.addEventListener(
    "change",
    (e) => {
      if (e.matches) {
        hidden = true;
        disable();
      } else {
        hidden = document.hidden;
        scenes.forEach((s) => (s.started = false));
        schedule();
      }
    },
    { signal },
  );
  desktop.addEventListener(
    "change",
    (e) => {
      if (!e.matches) {
        disable();
        scenes.forEach((s) => (s.visible = false));
      } else {
        scenes.forEach((s) => {
          const r = s.host.getBoundingClientRect();
          s.visible = r.bottom > 0 && r.top < innerHeight;
          s.started = false;
        });
        schedule();
      }
    },
    { signal },
  );
  schedule();

  return () => {
    ac.abort();
    if (frame) cancelAnimationFrame(frame);
    observers.forEach((o) => o.disconnect());
    scenes.forEach((s) => {
      s.scene.traverse((o) => {
        if (o.isMesh) {
          o.geometry.dispose();
          o.material.dispose();
        }
      });
      s.scene.environment?.dispose();
      s.renderer.dispose();
      s.renderer.forceContextLoss();
      s.renderer.domElement.remove();
      s.host.classList.remove("ready");
      s.host.parentElement.classList.remove("has-3d");
    });
  };
}
