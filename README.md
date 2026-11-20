<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/assets/header-dark.png">
  <img src=".github/assets/header-light.png" alt="Zubair Zulifqar, Lead Software Engineer in Lahore. A floorplate with a wayfinding route between units, feeding a workflow node that branches yes and no." width="100%">
</picture>

## Zubair Zulifqar

**Lead Software Engineer** &nbsp;·&nbsp; Pynwheel &nbsp;·&nbsp; Lahore, Pakistan &nbsp;·&nbsp; [zubair-zulfiqar.vercel.app](https://zubair-zulfiqar.vercel.app)

Five years building SaaS products end to end: React/TypeScript frontends over Ruby on Rails and Python
backends. At EZO I led the workflow engine that replaced single-trigger automation rules and now runs
millions of executions a day across three products. At Pynwheel I lead the move of a property-tech
platform from server-rendered Rails to React, with interactive floor maps, plotting and shortest-path
wayfinding, plus the self-guided tour app built on the same codebase. Since 2022 I've reviewed pull
requests from 40+ engineers and run about 100 technical interviews. Most of my work starts where the
obvious solution stopped working.

<p>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-17160f?style=flat-square&logo=typescript&logoColor=white"/>
  <img alt="React" src="https://img.shields.io/badge/React-17160f?style=flat-square&logo=react&logoColor=white"/>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-17160f?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img alt="Rails" src="https://img.shields.io/badge/Rails-17160f?style=flat-square&logo=rubyonrails&logoColor=white"/>
  <img alt="Python" src="https://img.shields.io/badge/Python-17160f?style=flat-square&logo=python&logoColor=white"/>
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-17160f?style=flat-square&logo=postgresql&logoColor=white"/>
  <img alt="Redis" src="https://img.shields.io/badge/Redis-17160f?style=flat-square&logo=redis&logoColor=white"/>
  <img alt="Docker" src="https://img.shields.io/badge/Docker-17160f?style=flat-square&logo=docker&logoColor=white"/>
  <img alt="Claude Code" src="https://img.shields.io/badge/Claude_Code-17160f?style=flat-square&logo=anthropic&logoColor=white"/>
</p>

### Projects

Full-stack SaaS builds, each with a README that covers architecture, setup and status, and a test suite.
All run on synthetic data, and each one works locally in mock mode with no credentials.

- **[Othego](https://github.com/Zubair-Zulifqar/Othego)** &nbsp;`TypeScript` `RAG`<br>
  Customer-support chatbots grounded in a business's own content. An SSRF-hardened crawler, heading-aware chunking, BM25 and vector search merged with Reciprocal Rank Fusion, reranking, and cited answers with a confidence gate. Ships as a 5 kB Shadow-DOM widget, with Stripe billing and passkey sign-in.
- **[TestFiesta](https://github.com/Zubair-Zulifqar/TestFiesta)** &nbsp;`Vue` `Express` `OpenFGA`<br>
  Test management for QA teams: repositories, plans, runs and defects. Every organization gets its own PostgreSQL database, and authorization is relationship-based through OpenFGA. Also includes an AI copilot for test design, Jira and GitHub sync, and a CLI that uploads CI results.
- **[Waivs.ai](https://github.com/Zubair-Zulifqar/Waivs-AI)** &nbsp;`Next.js` `Supabase` `Vertex AI`<br>
  Clinical documentation for surgical teams. A recorded consultation becomes a transcript and then a source-cited draft note, which stays a draft until a clinician approves it. The database enforces that rule as well as the app, and a validator flags invented numbers instead of filling gaps.
- **[Tuck Advisors Platform](https://github.com/Zubair-Zulifqar/Tuck-Advisors-Platform)** &nbsp;`TypeScript` `Python`<br>
  An M&A advisory platform: a deal CRM, an AI research engine, explainable fit scoring, a CRM automation engine with approval gates, and a Manifest V3 deal workstation. Every AI claim is labelled *sourced*, *assessment* or *unknown*.
- **[StoryHEAT](https://github.com/Zubair-Zulifqar/StoryHEAT)** &nbsp;`Next.js` `Python`<br>
  Campaign storytelling research. AI drafts narratives from the facts a team supplies, real respondents test them in versioned surveys, and an audience heatmap shows what landed, with confidence intervals and small-cell suppression.
- **[Authentic Spark](https://github.com/Zubair-Zulifqar/Authentic-Spark)** &nbsp;`Next.js` `Quart`<br>
  An operations platform for agencies and campaigns: email planning, list buys with de-duplication and suppression, SMS compliance, ad review, QuickBooks invoicing and six schema-bound AI agents, under nine RBAC roles with strict tenant isolation.

### What I've shipped at work

The code is closed source, so here is what each system was and what it had to solve.

**A workflow engine that can branch** &nbsp;·&nbsp; `Rails` `React Flow` `Webhooks`
> Automation used to be one trigger paired with one sub-trigger. I led the multi-product initiative that
> replaced it with a node-based engine: branching decision logic, HTTP nodes and webhook triggers, with
> a run history for every branch. It now runs millions of executions a day across three products.
> [Case study ↗](https://zubair-zulfiqar.vercel.app/work/workflow-engine)

**Interactive maps and wayfinding for property tech** &nbsp;·&nbsp; `React` `TypeScript` `Rails` `Capacitor`
> A Rails product whose property, inventory and map screens had to become an application without the
> backend becoming a rewrite. Building and floor maps over SVG floor plans, with unit and amenity markers,
> manual and auto-plotting, hallway detection and shortest-path wayfinding. One front-end codebase serves
> web, iOS and Android.
> [Case study ↗](https://zubair-zulfiqar.vercel.app/work/pynwheel-maps)

**The sync job that took half a day** &nbsp;·&nbsp; `Rails` `MySQL` `Datadog`
> Device sync took 12 to 15 hours. I profiled it, removed N+1 queries and moved it to batched writes,
> and now it runs in under an hour.

**Exceptions that arrive as pull requests** &nbsp;·&nbsp; `Python` `Ollama` `Claude CLI`
> Production exceptions are classified, given a proposed fix and opened as a pull request, and a review
> daemon comments on PRs before a human opens the diff. The design work was in the boundaries: what the
> automation may do alone, and what it must hand to a human.
> [Case study ↗](https://zubair-zulfiqar.vercel.app/work/engineering-automation)

**Software visibility across 10M+ assets** &nbsp;·&nbsp; `Rails`
> Flags unused and unauthorized software installs across the enterprise assets AssetSonar tracks.

### Writing

- [Migrating a Rails product to React without rewriting the backend](https://zubair-zulfiqar.vercel.app/writing/rails-to-react-without-rewriting-the-backend): keep the Rails domain, put a JSON boundary in front of it, ship one screen at a time.
- [Designing workflow engines that can actually branch](https://zubair-zulfiqar.vercel.app/writing/workflow-engines-that-can-branch): run state, typed outputs, and a log that can explain a failure three branches deep.
- [What production AI agents need beyond prompts](https://zubair-zulfiqar.vercel.app/writing/what-production-ai-agents-need-beyond-prompts): production AI is mostly a boundaries problem.
- [How I approach performance problems in SaaS systems](https://zubair-zulfiqar.vercel.app/writing/how-i-approach-performance-problems-in-saas): profile first, change the data path second.
- [Designing complex map interfaces in React](https://zubair-zulfiqar.vercel.app/writing/designing-complex-map-interfaces-in-react): most of the bugs were coordinate systems.

### Also

AWS Certified Cloud Practitioner &nbsp;·&nbsp; Silver medal, ICPC Asia Topi Regional &nbsp;·&nbsp; BS Software Engineering, PUCIT (CGPA 3.80)

### Elsewhere

[Portfolio](https://zubair-zulfiqar.vercel.app) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/zubair-zulfiqar-17413226b/) &nbsp;·&nbsp; [Resume (PDF)](https://zubair-zulfiqar.vercel.app/Zubair_Zulfiqar_Resume.pdf) &nbsp;·&nbsp; [zubair03114698669@gmail.com](mailto:zubair03114698669@gmail.com)

<sub>Earlier work, from university: Android, Java, C# and C++. Mostly in the 2021–2024 repos below.</sub>
