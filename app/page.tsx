import Link from "next/link";
import Image from "next/image";
import HomeInteractions from "./components/home/HomeInteractions";
import LogoMark from "./components/Logo";
import { serializeJsonLd } from "./lib/json-ld";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
} from "./lib/site";
import {
  channels,
  connectedSystems,
  faqs,
  integrationsLeft,
  integrationsRight,
  modules,
  monitors,
  nodes,
  outcomes,
  roles,
} from "./lib/home-content";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/opengraph-image`,
  },
  inLanguage: "en",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const firstRole = roles[0];

  return (
    <div className="stiv-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" id="top">
        <div className="hero-art">
          <div className="core-stage core-stage-hero" data-core-stage="hero" aria-hidden="true" />
          <Image
            className="core hero-core"
            src="/core.webp"
            alt="STIV Core, a sculptural metallic intelligence object"
            width={1536}
            height={1024}
            priority
            unoptimized
          />
        </div>
        <div className="hero-copy">
          <div className="eyebrow intro">STIV / THE ORGANIZATIONAL INTELLIGENCE LAYER</div>
          <h1 className="intro">
            Intelligence,
            <br />
            <span>orchestrated.</span>
          </h1>
          <p className="intro">
            One AI command center connecting your people,
            <br className="desktop" /> knowledge, systems and AI workforce.
          </p>
          <div className="actions intro">
            <a className="button primary" href="#experience">
              Experience STIV
            </a>
            <Link className="button quiet" href="/contact">
              Book a Demo
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <span>BUILT FOR THE WAY YOUR ORGANIZATION THINKS.</span>
          <a href="#platform">
            SCROLL TO DISCOVER <span className="scroll-line" />
          </a>
          <span>EST. 2026 / SINGAPORE</span>
        </div>
      </section>

      {/* ── 01 Platform ──────────────────────────────────────── */}
      <section className="section unity" id="platform">
        <div className="section-top">
          <span className="eyebrow">01 / THE PLATFORM</span>
          <span className="eyebrow">SEVEN DIVISIONS. ONE DIRECTION.</span>
        </div>
        <div className="reveal">
          <h2>
            One intelligence.
            <br />
            <span>Across your entire organization.</span>
          </h2>
          <p className="lead">
            Specialists that understand their work.
            <br />A command layer that brings it all together.
          </p>
        </div>
        <div className="constellation constellation-7 reveal">
          <svg
            className="connections"
            viewBox="0 0 1000 460"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M150 60 Q350 70 500 230 M150 230 H500 M150 400 Q350 390 500 230 M850 60 Q650 70 500 230 M850 230 H500 M850 400 Q650 390 500 230 M500 440V230" />
          </svg>
          <div className="core-stage core-stage-unity" data-core-stage="unity" aria-hidden="true" />
          <Image
            className="core small-core"
            src="/core.webp"
            alt="STIV Core connects specialist AI capabilities"
            width={1536}
            height={1024}
            unoptimized
          />
          {nodes.map((n, i) => (
            <button key={n.name} type="button" className={`node n${i + 1}`} data-note={n.note}>
              {pad(i + 1)} <strong>{n.name}</strong>
              <small>{n.trait}</small>
            </button>
          ))}
        </div>
        <p className="connection-note" aria-live="polite">
          Select a capability to explore its role in the system.
        </p>
        <div className="unity-foot">
          <p>
            Purpose-built systems for Executive, Sales, Marketing, Finance, Operations, Legal and
            Support.
          </p>
          <p>
            License divisions independently. Bring them together through{" "}
            <Link href="/unified">
              <strong>STIV Unified.</strong>
            </Link>
          </p>
        </div>
      </section>

      {/* ── 02 Orchestration demo ────────────────────────────── */}
      <section className="section experience" id="experience">
        <div className="section-top">
          <span className="eyebrow">02 / ORCHESTRATION IN ACTION</span>
          <span className="eyebrow">INTERACTIVE PRODUCT DEMONSTRATION</span>
        </div>
        <div className="split-heading reveal">
          <h2>Watch STIV work.</h2>
          <p className="lead">
            One request. The right intelligence.
            <br />A coordinated result.
          </p>
        </div>
        <div
          className="scenario-selector reveal"
          role="tablist"
          aria-label="Choose an orchestration demonstration"
        >
          <button className="scenario-tab" id="scenario-executive" role="tab" aria-selected="true" aria-controls="scenario-panel" tabIndex={0} data-scenario="executive">
            <span>01</span> Executive briefing
          </button>
          <button className="scenario-tab" id="scenario-campaign" role="tab" aria-selected="false" aria-controls="scenario-panel" tabIndex={-1} data-scenario="campaign">
            <span>02</span> Campaign coordination
          </button>
          <button className="scenario-tab" id="scenario-contract" role="tab" aria-selected="false" aria-controls="scenario-panel" tabIndex={-1} data-scenario="contract">
            <span>03</span> Contract review
          </button>
        </div>
        <div className="terminal reveal" id="scenario-panel" role="tabpanel" aria-labelledby="scenario-executive">
          <div className="terminal-bar">
            <span>
              <LogoMark size={22} /> STIV <span className="muted">/ Command Center</span>
            </span>
            <span className="demo-label">DEMONSTRATION</span>
          </div>
          <div className="terminal-body">
            <aside className="mock-aside">
              <span className="eyebrow">WORKSPACE</span>
              <div className="side-active">◎ Orchestration</div>
              <div>▤ Memory</div>
              <div>◇ AI workforce</div>
              <div>⊞ Connected systems</div>
              <div>◷ Activity</div>
              <div className="aside-bottom">
                <span id="workflow-name">EXECUTIVE WORKFLOW</span>
                <br />
                <small id="workflow-count">5 capabilities · Human governed</small>
              </div>
            </aside>
            <div className="demo-main">
              <div className="prompt">
                <span className="avatar">J</span>
                <div>
                  <span className="eyebrow">YOUR REQUEST</span>
                  <p id="scenario-prompt">“STIV, prepare tomorrow’s executive briefing.”</p>
                </div>
              </div>
              <div id="steps" aria-live="polite" />
              <div id="briefing" hidden>
                <span className="eyebrow" id="result-label">
                  EXECUTIVE BRIEFING READY ✓
                </span>
                <h3 id="result-title">Tomorrow, in focus.</h3>
                <div className="brief-grid" id="result-summary" />
                <details className="sample-output">
                  <summary>
                    <strong>Review the prepared output</strong>
                  </summary>
                  <div id="result-detail" />
                </details>
                <p className="result-governance" id="result-governance">
                  Prepared for your review. Nothing is sent without approval.
                </p>
              </div>
              <div className="demo-footer">
                <span id="demo-status">Ready when you are.</span>
                <button className="button primary" id="run" type="button">
                  Run the briefing
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="caption">
          Illustrative workflow and sample outputs. Your systems stay under your control.
        </p>
      </section>

      {/* ── 03 Command Center ────────────────────────────────── */}
      <section className="section command" id="command-center">
        <div className="section-top">
          <span className="eyebrow">03 / THE STIV COMMAND CENTER</span>
          <span className="eyebrow">THE BIG PICTURE. EVERY DETAIL.</span>
        </div>
        <h2 className="reveal">
          Your organization.
          <br />
          <span>One command center.</span>
        </h2>
        <p className="lead reveal">
          The clarity to know what matters.
          <br />
          The intelligence to move it forward.
        </p>
        <div className="dashboard reveal">
          <div className="dashboard-top">
            <span className="wordmark">
              <LogoMark size={24} /> STIV
            </span>
            <span className="muted">Command Center / Executive overview</span>
            <span className="sample">SAMPLE WORKSPACE</span>
          </div>
          <div className="dashboard-content">
            <aside className="mock-aside">
              <span className="eyebrow">COMMAND</span>
              <div className="side-active">◎ Overview</div>
              <button className="dash-nav" type="button" data-inspect="executive">▤ Briefings</button>
              <a className="dash-nav" href="#workforce">◇ Divisions</a>
              <a className="dash-nav" href="#integrations">⊞ Systems</a>
              <button className="dash-nav" type="button" data-inspect="audit">◷ Audit trail</button>
            </aside>
            <div className="dashboard-main">
              <div className="dash-heading">
                <div>
                  <span className="eyebrow">EXECUTIVE OVERVIEW</span>
                  <h3>A clear view of what’s next.</h3>
                </div>
                <span className="muted">Today / 09:41</span>
              </div>
              <div className="dash-metrics">
                <div>
                  <small>WORKFLOWS COORDINATED</small>
                  <strong>
                    24<span>+6 this week</span>
                  </strong>
                  <div className="spark">
                    {Array.from({ length: 8 }, (_, i) => (
                      <i key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <small>AWAITING YOUR REVIEW</small>
                  <strong>
                    <span className="approval-count">03</span>
                    <span>Human approval</span>
                  </strong>
                  <p>Marketing · Legal · Finance</p>
                </div>
                <div>
                  <small>CONNECTED DIVISIONS</small>
                  <strong>
                    07<span>One command layer</span>
                  </strong>
                  <p>Context shared. Access scoped.</p>
                </div>
              </div>
              <div className="dash-bottom">
                <div>
                  <div className="panel-heading">
                    Intelligence stream <span>RECENT ACTIVITY</span>
                  </div>
                  <button className="stream interactive-stream" type="button" data-inspect="executive" aria-label="Inspect morning briefing compiled">
                    <span>09:41</span>
                    <span className="stream-copy">
                      <strong>Executive AI</strong>Morning briefing compiled
                    </span>
                    <small>Ready for review</small>
                  </button>
                  <button className="stream interactive-stream" type="button" data-inspect="finance" aria-label="Inspect variance summary prepared">
                    <span>09:38</span>
                    <span className="stream-copy">
                      <strong>Finance AI</strong>Variance summary prepared
                    </span>
                    <small>Draft</small>
                  </button>
                  <button className="stream interactive-stream" type="button" data-inspect="legal" aria-label="Inspect agreement review completed">
                    <span>09:32</span>
                    <span className="stream-copy">
                      <strong>Legal AI</strong>Agreement review completed
                    </span>
                    <small>Approval needed</small>
                  </button>
                  <button className="stream interactive-stream" type="button" data-inspect="knowledge" aria-label="Inspect policy context retrieved">
                    <span>09:27</span>
                    <span className="stream-copy">
                      <strong>STIV Memory</strong>Policy context retrieved
                    </span>
                    <small>Context available</small>
                  </button>
                </div>
                <div className="priorities">
                  <div className="panel-heading">Decisions that need you</div>
                  <h4>
                    <span id="priority-count">3 priorities.</span>
                    <br />
                    One clear next step.
                  </h4>
                  <p>Review the work your AI workforce has prepared.</p>
                  <button className="button quiet" type="button" data-inspect="approvals">
                    Review sample approvals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="caption dashboard-caption">
          Select an activity to inspect its output, sources and approval history. Sample workspace.
        </p>
      </section>

      {/* ── 04 Inside the Command Center ─────────────────────── */}
      <section className="section cc" id="capabilities">
        <div className="section-top">
          <span className="eyebrow">04 / INSIDE THE COMMAND CENTER</span>
          <span className="eyebrow">ASK IN PLAIN LANGUAGE</span>
        </div>
        <div className="split-heading reveal">
          <h2>
            Ask once.
            <br />
            <span>STIV handles the rest.</span>
          </h2>
          <p className="lead">
            Five kinds of work, one conversation. STIV reads, weighs, drafts and acts across your
            divisions — and every send, post or external action waits for your approval.
          </p>
        </div>

        <div className="cc-outcomes reveal">
          {outcomes.map((o, i) => (
            <div key={o.outcome} className="cc-outcome">
              <span className="eyebrow">
                {pad(i + 1)} / {o.outcome.toUpperCase()}
              </span>
              <h3>{o.outcome}</h3>
              <p className="cc-outcome-desc">{o.description}</p>
              <ul>
                {o.capabilities.map((c) => (
                  <li key={c.label}>
                    <strong>{c.label}</strong>
                    <small>{c.example}</small>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cc-split reveal">
          <div>
            <span className="eyebrow">ALWAYS WATCHING</span>
            <h3 className="cc-sub">
              It works while you don’t.
            </h3>
            <p className="cc-sub-lead">
              STIV runs on a schedule, not just on request — so the important things reach you
              before you go looking for them.
            </p>
          </div>
          <ol className="cc-monitors">
            {monitors.map((m) => (
              <li key={m.what}>
                <div>
                  <strong>{m.what}</strong>
                  <small>{m.detail}</small>
                </div>
                <span>{m.cadence.toUpperCase()}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="cc-modules reveal">
          <div className="cc-modules-head">
            <span className="eyebrow">THE WORKSPACE</span>
            <h3 className="cc-sub">Everything leadership runs, in one place.</h3>
          </div>
          <div className="cc-module-grid">
            {modules.map((g) => (
              <div key={g.group}>
                <span className="eyebrow">{g.group.toUpperCase()}</span>
                {g.items.map((m) => (
                  <div key={m.name} className="cc-module">
                    <strong>{m.name}</strong>
                    <small>{m.detail}</small>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 AI workforce ──────────────────────────────────── */}
      <section className="section" id="workforce">
        <div className="section-top">
          <span className="eyebrow">05 / YOUR AI WORKFORCE</span>
          <span className="eyebrow">SPECIALIZED BY DESIGN</span>
        </div>
        <h2 className="reveal">
          Meet your
          <br />
          <span>AI workforce.</span>
        </h2>
        <div className="workforce-layout reveal">
          <div className="workforce-list" role="tablist" aria-label="AI divisions" id="workforce-tabs">
            {roles.map((r, i) => (
              <button
                key={r.name}
                type="button"
                className="workforce-tab"
                id={`role-${i}`}
                role="tab"
                aria-controls="workforce-detail"
                aria-selected={i === 0}
                tabIndex={i === 0 ? 0 : -1}
              >
                <span>{pad(i + 1)}</span>
                {r.name}
              </button>
            ))}
          </div>
          <div className="workforce-detail" id="workforce-detail" role="tabpanel" tabIndex={0} aria-labelledby="role-0">
            <div className="detail-symbol" aria-hidden="true">
              {firstRole.symbol}
            </div>
            <span className="eyebrow" id="role-label">
              {firstRole.trait.toUpperCase()}
            </span>
            <h3 id="role-title">{firstRole.name}</h3>
            <p id="role-description">{firstRole.description}</p>
            <div id="role-tasks">
              {firstRole.tasks.map((t) => (
                <span key={t} className="task">
                  {t}
                </span>
              ))}
            </div>
            {roles.map((r, i) => (
              <Link
                key={r.href}
                className="text-link role-link"
                data-role-link={i}
                href={r.href}
                hidden={i !== 0}
              >
                Explore {r.name}
              </Link>
            ))}
            <span className="detail-footer">PART OF THE STIV INTELLIGENCE SYSTEM</span>
          </div>
        </div>
      </section>

      {/* ── 06 Memory ────────────────────────────────────────── */}
      <section className="section knowledge" id="knowledge">
        <div className="section-top">
          <span className="eyebrow">06 / STIV MEMORY</span>
          <span className="eyebrow">CONTEXT BECOMES CAPABILITY</span>
        </div>
        <div className="knowledge-layout">
          <div className="reveal">
            <h2>
              Intelligence that
              <br />
              understands
              <br />
              <span>your organization.</span>
            </h2>
            <p className="lead">
              STIV Memory is your organizational knowledge layer. Documents, conversations,
              meetings and decisions become context your AI workforce can search and work from —
              and every week it consolidates what it learned.
            </p>
            <p className="muted">Your playbooks. Your language. Your commitments. Your way of working.</p>
          </div>
          <div className="knowledge-visual reveal">
            <div className="knowledge-inputs">
              <span>▤ Documents</span>
              <span>☷ Conversations</span>
              <span>◷ Meetings</span>
              <span>≡ Decisions</span>
              <span>◇ Commitments</span>
            </div>
            <div className="knowledge-lines" />
            <div className="knowledge-core">
              <span>◈</span>
              <h3>MEMORY</h3>
              <small>ORGANIZATIONAL CONTEXT</small>
            </div>
            <div className="knowledge-output">
              Executive · Sales · Marketing · Finance · Operations · Legal · Support
              <br />
              <small>KNOWLEDGE IN THE FLOW OF WORK</small>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 Integrations ──────────────────────────────────── */}
      <section className="section" id="integrations">
        <div className="section-top">
          <span className="eyebrow">07 / CONNECTED INTELLIGENCE</span>
          <span className="eyebrow">NO MIGRATION REQUIRED</span>
        </div>
        <div className="split-heading reveal">
          <h2>
            Your systems.
            <br />
            <span>Connected.</span>
          </h2>
          <p className="lead">
            Build on what your business already runs.
            <br />
            Scope every connection to the work it needs to do.
          </p>
        </div>
        <div className="integration-network reveal">
          <div className="system-group">
            {integrationsLeft.map((it, i) => (
              <button key={it.label} type="button" data-integration={it.label} data-integration-note={it.note}>
                {it.label} <span>{pad(i + 1)}</span>
              </button>
            ))}
          </div>
          <div className="network-center">
            <div className="network-ring" />
            <LogoMark size={52} />
            <h3>STIV</h3>
            <p id="integration-note" aria-live="polite">
              One orchestration layer
            </p>
          </div>
          <div className="system-group">
            {integrationsRight.map((it, i) => (
              <button key={it.label} type="button" data-integration={it.label} data-integration-note={it.note}>
                {it.label} <span>{pad(i + 5)}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="cc-chips reveal">
          <div>
            <span className="eyebrow">CHANNELS</span>
            <p>
              {channels.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </p>
          </div>
          <div>
            <span className="eyebrow">SINGLE SIGN-ON INTO BUSINESS SYSTEMS</span>
            <p>
              {connectedSystems.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </p>
          </div>
        </div>
        <p className="caption">
          Standard and custom integrations are scoped during onboarding. Availability depends on
          your systems and license. <Link href="/integrations" className="caption-link">See integrations</Link>
        </p>
      </section>

      {/* ── 08 Human control ─────────────────────────────────── */}
      <section className="section security" id="security">
        <div className="section-top">
          <span className="eyebrow">08 / HUMAN CONTROL</span>
          <span className="eyebrow">AUTONOMY WITH ACCOUNTABILITY</span>
        </div>
        <div className="security-layout">
          <div className="reveal">
            <h2>
              AI that works with
              <br />
              your organization.
              <br />
              <span>Not around it.</span>
            </h2>
            <p className="lead">
              Intelligence moves the work forward.
              <br />
              Your people define the boundaries.
            </p>
            <Link className="text-link" href="/security">
              Explore security &amp; trust
            </Link>
          </div>
          <div className="governance reveal">
            <div className="approval-preview">
              <span className="eyebrow">CONTROL POINT / EXTERNAL ACTION</span>
              <h3>Campaign launch</h3>
              <p>
                Marketing AI has prepared the launch.
                <br />
                Your approval is required to proceed.
              </p>
              <div className="approval-status">
                <span>◈ Draft prepared</span>
                <span>Human review required</span>
              </div>
            </div>
            <details open>
              <summary>
                01 <strong>Permissions &amp; role-based access</strong>
              </summary>
              <p>Access is limited to the data and systems each role requires.</p>
            </details>
            <details>
              <summary>
                02 <strong>Human approvals</strong>
              </summary>
              <p>
                Every send, post and consequential external action passes through an approval gate
                — review, edit, approve or return it.
              </p>
            </details>
            <details>
              <summary>
                03 <strong>Audit trails</strong>
              </summary>
              <p>Trace recommendations, decisions and approvals to their source.</p>
            </details>
            <details>
              <summary>
                04 <strong>Data controls</strong>
              </summary>
              <p>Encryption in transit and at rest, with data residency options for regulated teams.</p>
            </details>
            <details>
              <summary>
                05 <strong>Adjustable autonomy</strong>
              </summary>
              <p>
                Set which actions need approval and widen autonomy only as verified outcomes
                support it.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── 09 Pricing ───────────────────────────────────────── */}
      <section className="section company" id="pricing">
        <div className="section-top">
          <span className="eyebrow">09 / BUILT FOR REAL ORGANIZATIONS</span>
          <span className="eyebrow">SINGAPORE / EST. 2026</span>
        </div>
        <div className="split-heading reveal">
          <h2>
            Start with a division.
            <br />
            <span>Think across the enterprise.</span>
          </h2>
          <p className="lead">
            STIV builds purpose-built software for each division. STIV Unified connects them in a
            bespoke command layer, with dedicated infrastructure and onboarding.
          </p>
        </div>
        <div className="licenses reveal">
          <div>
            <span className="eyebrow">SINGLE DIVISION</span>
            <h3>
              $1,500 <small>/ month</small>
            </h3>
            <p>
              One division · One workspace
              <br />
              Standard integrations · Email support
            </p>
          </div>
          <div>
            <span className="eyebrow">FULL SUITE</span>
            <h3>
              $8,200 <small>/ month</small>
            </h3>
            <p>
              Seven independent division systems
              <br />
              Unlimited workspaces · Custom integrations
              <br />
              Approval workflows · Priority support
            </p>
          </div>
          <div>
            <span className="eyebrow">STIV UNIFIED</span>
            <h3>By application</h3>
            <p>
              Custom pricing · Bespoke build
              <br />
              Dedicated infrastructure · White-glove onboarding
              <br />
              Dedicated success manager
            </p>
          </div>
        </div>
        <p className="caption">
          Published licensing from STIV. Confirm currency and current commercial terms in your
          private briefing.
        </p>
        <div className="company-links">
          <Link href="/pricing">Compare plans</Link>
          <Link href="/about">Our company</Link>
          <Link href="/solutions">Enterprise solutions</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/contact">Request a private briefing</Link>
        </div>
      </section>

      {/* ── 10 FAQ ───────────────────────────────────────────── */}
      <section className="section faq" id="faq">
        <div className="section-top">
          <span className="eyebrow">10 / QUESTIONS</span>
          <span className="eyebrow">ANSWERED PLAINLY</span>
        </div>
        <div className="faq-layout">
          <h2 className="reveal">
            Questions,
            <br />
            <span>answered.</span>
          </h2>
          <div className="faq-list reveal">
            {faqs.map((f, i) => (
              <details key={f.question} open={i === 0}>
                <summary>
                  {pad(i + 1)} <strong>{f.question}</strong>
                </summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final ────────────────────────────────────────────── */}
      <section className="final section">
        <div className="core-stage core-stage-final" data-core-stage="final" aria-hidden="true" />
        <Image className="core final-core" src="/core.webp" alt="" width={1536} height={1024} unoptimized />
        <span className="eyebrow reveal">STIV / INTELLIGENCE, ORCHESTRATED.</span>
        <h2 className="reveal">
          It doesn’t just answer.
          <br />
          <span>It acts.</span>
        </h2>
        <p className="lead reveal">
          Bring your organization’s intelligence, systems
          <br className="desktop" /> and AI workforce together with STIV.
        </p>
        <div className="actions reveal">
          <a className="button primary" href="#experience">
            Experience STIV
          </a>
          <Link className="button quiet" href="/contact">
            Book a Demo
          </Link>
        </div>
      </section>

      <dialog className="inspect-dialog" id="inspect-dialog" aria-labelledby="inspect-title">
        <div className="inspect-top">
          <span className="eyebrow">STIV / SAMPLE WORKSPACE</span>
          <button className="dialog-close" type="button" aria-label="Close workspace detail">
            ×
          </button>
        </div>
        <div className="inspect-heading">
          <span className="eyebrow" id="inspect-role" />
          <h2 id="inspect-title" />
          <p id="inspect-description" />
        </div>
        <div className="inspect-tabs" role="tablist" aria-label="Workspace detail">
          <button type="button" role="tab" aria-selected="true" aria-controls="inspect-panel" id="inspect-tab-overview" data-detail-tab="overview">
            Overview
          </button>
          <button type="button" role="tab" aria-selected="false" aria-controls="inspect-panel" id="inspect-tab-sources" data-detail-tab="sources" tabIndex={-1}>
            Sources
          </button>
          <button type="button" role="tab" aria-selected="false" aria-controls="inspect-panel" id="inspect-tab-activity" data-detail-tab="activity" tabIndex={-1}>
            Activity
          </button>
        </div>
        <div id="inspect-panel" role="tabpanel" tabIndex={0} aria-labelledby="inspect-tab-overview" />
        <div className="inspect-footer">
          <p id="inspect-status" aria-live="polite">
            Illustrative data. No external action is taken.
          </p>
          <Link className="text-link" href="/contact">
            Explore this with your organization
          </Link>
        </div>
      </dialog>

      <HomeInteractions />
    </div>
  );
}
