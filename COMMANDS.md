# FORD CODE — Command Reference Manual

Comprehensive reference of all **614 commands and subcommands** across **34 engineering domains**.

## Table of Contents

- [API & Endpoints (18)](#api-endpoints)
- [Agent Orchestration (22)](#agent-orchestration)
- [Automation & Scheduling (16)](#automation-scheduling)
- [Background Tasks (14)](#background-tasks)
- [Build & Compilation (18)](#build-compilation)
- [CI/CD & Pipelines (16)](#ci-cd-pipelines)
- [Chat & Sessions (18)](#chat-sessions)
- [Code Engineering (24)](#code-engineering)
- [Core & System (20)](#core-system)
- [Database & Schemas (18)](#database-schemas)
- [Debug & Diagnostics (20)](#debug-diagnostics)
- [Dependencies & Packages (18)](#dependencies-packages)
- [Diff, Patch & Undo (16)](#diff-patch-undo)
- [Docker & Containers (18)](#docker-containers)
- [Documentation & Specs (18)](#documentation-specs)
- [Environment & Configuration (16)](#environment-configuration)
- [Export & Artifacts (16)](#export-artifacts)
- [Files & Filesystem (20)](#files-filesystem)
- [Git & Version Control (28)](#git-version-control)
- [Lint & Code Style (16)](#lint-code-style)
- [MCP Integration (16)](#mcp-integration)
- [Performance & Profiling (18)](#performance-profiling)
- [Permissions & Safety (14)](#permissions-safety)
- [Persistent Memory (16)](#persistent-memory)
- [Plugin System (16)](#plugin-system)
- [Project Intelligence (22)](#project-intelligence)
- [Project Scaffolding (16)](#project-scaffolding)
- [Reports & Analytics (16)](#reports-analytics)
- [Search & Exploration (20)](#search-exploration)
- [Security & Compliance (20)](#security-compliance)
- [Shell & Aliases (16)](#shell-aliases)
- [Testing & QA (22)](#testing-qa)
- [Workflows & Orchestration (16)](#workflows-orchestration)
- [Workspace Management (16)](#workspace-management)

---

### <a id="api-endpoints"></a>API & Endpoints (18 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `api.inspect` | - | `SAFE_WRITE` | Inspect declared API routes and methods |
| `api.test` | - | `SAFE_WRITE` | Execute integration tests against API endpoints |
| `api.generate` | - | `SAFE_WRITE` | Scaffold new REST, GraphQL, or RPC endpoints |
| `api.docs` | - | `SAFE_WRITE` | Generate OpenAPI 3.1 documentation for endpoints |
| `api.schema` | - | `SAFE_WRITE` | Generate request / response validation schemas (Zod) |
| `api.endpoints` | - | `SAFE_WRITE` | List all detected API routes and HTTP methods |
| `api.mock` | - | `SAFE_WRITE` | Generate mock HTTP server for client testing |
| `api.curl` | - | `SAFE_WRITE` | Generate ready-to-run cURL commands for endpoints |
| `api.validate` | - | `SAFE_WRITE` | Validate payload serialization and status codes |
| `api.diff` | - | `SAFE_WRITE` | Detect breaking changes between API versions |
| `api.openapi` | - | `SAFE_WRITE` | Export OpenAPI specification JSON |
| `api.postman` | - | `SAFE_WRITE` | Generate Postman collection for API routes |
| `api.grpc` | - | `SAFE_WRITE` | Generate Protobuf schema and gRPC stubs |
| `api.routes` | - | `SAFE_WRITE` | Inspect URL routing table |
| `api.types` | - | `SAFE_WRITE` | Export TypeScript DTO types for API clients |
| `api.client` | - | `SAFE_WRITE` | Generate type-safe frontend API SDK client |
| `api.server` | - | `SAFE_WRITE` | Scaffold backend API server setup |
| `api.auth` | - | `SAFE_WRITE` | Implement JWT or OAuth2 authentication middleware |

### <a id="agent-orchestration"></a>Agent Orchestration (22 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `agent.run` | `agent`, `run-agent` | `SAFE_WRITE` | Run autonomous agent with multi-step reasoning and tool execution |
| `agent.plan` | `plan` | `SAFE_WRITE` | Generate non-destructive architectural plan without modifying files |
| `agent.execute` | - | `SAFE_WRITE` | Execute a pre-approved architectural plan |
| `agent.pause` | - | `SAFE_WRITE` | Pause current long-running autonomous agent cycle |
| `agent.resume` | - | `SAFE_WRITE` | Resume paused autonomous agent cycle |
| `agent.stop` | - | `SAFE_WRITE` | Abort active autonomous task |
| `agent.retry` | - | `SAFE_WRITE` | Retry last failed agent step with corrective context |
| `agent.history` | - | `SAFE_WRITE` | Inspect agent execution trajectory and reasoning trace |
| `agent.inspect` | - | `SAFE_WRITE` | Deep inspection of agent working memory and tool results |
| `agent.explain` | - | `SAFE_WRITE` | Explain reasoning decisions made during autonomous execution |
| `agent.benchmark` | - | `SAFE_WRITE` | Benchmark agent throughput and accuracy across test tasks |
| `agent.profile` | - | `SAFE_WRITE` | Profile agent token consumption across planning and execution |
| `agent.step` | - | `SAFE_WRITE` | Execute a single autonomous reasoning turn and await approval |
| `agent.rollback` | - | `SAFE_WRITE` | Rollback changes performed during last agent execution |
| `agent.delegate` | - | `SAFE_WRITE` | Delegate task to specialized subagent (Planner, Coder, Debugger, Tester, Reviewer) |
| `agent.fork` | - | `SAFE_WRITE` | Fork active agent context into experimental branch |
| `agent.monitor` | - | `SAFE_WRITE` | Real-time telemetry monitor of active agent tasks |
| `agent.eval` | - | `SAFE_WRITE` | Evaluate agent output against engineering rubric |
| `agent.role` | - | `SAFE_WRITE` | Set specialized agent persona (Architect, SRE, Security, Tester) |
| `agent.temperature` | - | `SAFE_WRITE` | Tune model temperature for determinism vs creativity |
| `agent.models` | - | `SAFE_WRITE` | View and select active Ford vehicle model engine |
| `agent.cars` | `cars`, `showroom` | `SAFE_WRITE` | Browse Ford Performance Vehicle AI model showroom |

### <a id="automation-scheduling"></a>Automation & Scheduling (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `automate.create` | - | `SAFE_WRITE` | Create an autonomous recurring task |
| `automate.run` | - | `SAFE_WRITE` | Run an automation task immediately |
| `automate.list` | - | `SAFE_WRITE` | List all registered automations |
| `automate.pause` | - | `SAFE_WRITE` | Pause an automation |
| `automate.resume` | - | `SAFE_WRITE` | Resume an automation |
| `automate.delete` | - | `SAFE_WRITE` | Delete an automation |
| `automate.inspect` | - | `SAFE_WRITE` | Inspect automation definition and trigger conditions |
| `automate.cron` | - | `SAFE_WRITE` | Schedule automation via cron expression |
| `automate.trigger` | - | `SAFE_WRITE` | Configure file watcher or git trigger |
| `automate.history` | - | `SAFE_WRITE` | View automation execution run history |
| `automate.task` | - | `SAFE_WRITE` | Wrap terminal command into an automation |
| `automate.watch` | - | `SAFE_WRITE` | Trigger agent actions on file modifications |
| `automate.notify` | - | `SAFE_WRITE` | Configure notifications on automation completion |
| `automate.logs` | - | `SAFE_WRITE` | View automation log outputs |
| `automate.validate` | - | `SAFE_WRITE` | Validate automation script syntax |
| `automate.retry` | - | `SAFE_WRITE` | Configure automatic retry logic |

### <a id="background-tasks"></a>Background Tasks (14 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `task.list` | - | `SAFE_WRITE` | List running background processes |
| `task.start` | - | `SAFE_WRITE` | Start long-running background command |
| `task.stop` | - | `SAFE_WRITE` | Stop background task by ID |
| `task.logs` | - | `SAFE_WRITE` | View logs from background task |
| `task.inspect` | - | `SAFE_WRITE` | Inspect background task state and resource metrics |
| `task.kill` | - | `SAFE_WRITE` | Force kill background task |
| `task.restart` | - | `SAFE_WRITE` | Restart background task |
| `task.wait` | - | `SAFE_WRITE` | Wait for background task to complete |
| `task.status` | - | `SAFE_WRITE` | Get exit status of task |
| `task.clear` | - | `SAFE_WRITE` | Clear stopped tasks from task list |
| `task.output` | - | `SAFE_WRITE` | Dump output buffer of task to file |
| `task.run` | - | `SAFE_WRITE` | Execute command synchronously and display result |
| `task.daemon` | - | `SAFE_WRITE` | Run daemon process in detached background mode |
| `task.monitor` | - | `SAFE_WRITE` | Real-time task monitoring dashboard |

### <a id="build-compilation"></a>Build & Compilation (18 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `build` | `b` | `SAFE_WRITE` | Compile, bundle, or scaffold project |
| `build.analyze` | - | `SAFE_WRITE` | Analyze bundle size and tree-shaking opportunities |
| `build.clean` | - | `SAFE_WRITE` | Remove dist, build, and output directories |
| `build.watch` | - | `SAFE_WRITE` | Start incremental build compiler in watch mode |
| `build.debug` | - | `SAFE_WRITE` | Build with source maps enabled for debugging |
| `build.release` | - | `SAFE_WRITE` | Execute optimized production release build |
| `build.profile` | - | `SAFE_WRITE` | Profile build times per plugin or module |
| `build.artifacts` | - | `SAFE_WRITE` | List output bundle artifacts and sizes |
| `build.size` | - | `SAFE_WRITE` | Audit bundle size against budget thresholds |
| `build.bundle` | - | `SAFE_WRITE` | Invoke bundler (esbuild, vite, webpack, rollup) |
| `build.compile` | - | `SAFE_WRITE` | Compile TypeScript or source code without bundling |
| `build.verify` | - | `SAFE_WRITE` | Verify build produces functional runnable outputs |
| `build.cache` | - | `SAFE_WRITE` | Manage compilation cache |
| `build.speed` | - | `SAFE_WRITE` | Analyze opportunities to speed up compilation |
| `build.target` | - | `SAFE_WRITE` | Set build output target (ES2022, Node, Browser) |
| `build.flags` | - | `SAFE_WRITE` | Configure custom compiler flags |
| `build.env` | - | `SAFE_WRITE` | Inspect environment variables used during build |
| `build.stats` | - | `SAFE_WRITE` | Display compilation timing statistics |

### <a id="ci-cd-pipelines"></a>CI/CD & Pipelines (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `ci.analyze` | - | `SAFE_WRITE` | Analyze CI/CD workflow configurations |
| `ci.validate` | - | `SAFE_WRITE` | Validate GitHub Actions or GitLab CI YAML syntax |
| `ci.generate` | - | `SAFE_WRITE` | Generate production CI/CD pipeline definition |
| `ci.fix` | - | `SAFE_WRITE` | Diagnose and fix failing CI pipeline steps |
| `ci.explain` | - | `SAFE_WRITE` | Explain CI pipeline architecture and dependencies |
| `pipeline.inspect` | - | `SAFE_WRITE` | Inspect pipeline execution stages and jobs |
| `ci.github` | - | `SAFE_WRITE` | Generate .github/workflows/ci.yml |
| `ci.gitlab` | - | `SAFE_WRITE` | Generate .gitlab-ci.yml definition |
| `ci.actions` | - | `SAFE_WRITE` | Audit GitHub Action security versions and pins |
| `ci.secrets` | - | `SAFE_WRITE` | Audit repository CI secret requirements |
| `ci.test` | - | `SAFE_WRITE` | Simulate CI pipeline locally using Act |
| `ci.matrix` | - | `SAFE_WRITE` | Configure multi-OS and multi-node test matrix |
| `ci.deploy` | - | `SAFE_WRITE` | Configure automated continuous deployment step |
| `ci.artifacts` | - | `SAFE_WRITE` | Configure pipeline build artifact retention |
| `ci.cache` | - | `SAFE_WRITE` | Configure package dependency caching for faster CI |
| `ci.trigger` | - | `SAFE_WRITE` | Trigger or retry remote CI workflow run |

### <a id="chat-sessions"></a>Chat & Sessions (18 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `chat` | - | `SAFE_WRITE` | Launch interactive terminal chat session (default) |
| `chat.new` | `new-chat` | `SAFE_WRITE` | Start a fresh conversation session |
| `chat.resume` | - | `SAFE_WRITE` | Resume previous conversation session by ID |
| `chat.rename` | - | `SAFE_WRITE` | Rename active or specified conversation session |
| `chat.export` | - | `SAFE_WRITE` | Export conversation history to Markdown transcript |
| `chat.delete` | - | `SAFE_WRITE` | Delete conversation session by ID |
| `chat.search` | - | `SAFE_WRITE` | Search past conversation messages for keyword |
| `chat.summarize` | - | `SAFE_WRITE` | Summarize active conversation into key takeaways |
| `chat.compact` | - | `SAFE_WRITE` | Compact conversation history to conserve context window |
| `chat.context` | - | `SAFE_WRITE` | Inspect exact prompt tokens and system instructions currently in chat |
| `chat.history` | - | `SAFE_WRITE` | List historical chat sessions |
| `chat.fork` | - | `SAFE_WRITE` | Fork current chat into a new branch |
| `chat.tokens` | - | `SAFE_WRITE` | Inspect token counts for current chat session |
| `chat.share` | - | `SAFE_WRITE` | Generate shareable transcript link or file |
| `chat.clear` | - | `SAFE_WRITE` | Clear terminal chat screen |
| `chat.save` | - | `SAFE_WRITE` | Force save active chat state to disk |
| `chat.load` | - | `SAFE_WRITE` | Load saved transcript from file |
| `chat.stats` | - | `SAFE_WRITE` | Display turn count, message sizes, and timings |

### <a id="code-engineering"></a>Code Engineering (24 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `code.generate` | `generate`, `gen` | `SAFE_WRITE` | Generate new source code implementation from natural language description |
| `code.edit` | `edit` | `SAFE_WRITE` | Apply surgical modifications to target code file |
| `code.explain` | `explain` | `SAFE_WRITE` | Deep senior engineer explanation of logic and architecture |
| `code.refactor` | `refactor`, `rf` | `SAFE_WRITE` | Refactor code for modularity, clean design, and typing |
| `code.optimize` | `optimize` | `SAFE_WRITE` | Optimize algorithms, memory usage, and execution speed |
| `code.modernize` | - | `SAFE_WRITE` | Upgrade legacy code to modern language idioms and syntax |
| `code.translate` | - | `SAFE_WRITE` | Translate code between languages (e.g. JS -> TS, Python -> Go) |
| `code.migrate` | - | `SAFE_WRITE` | Migrate code across major framework versions |
| `code.format` | - | `SAFE_WRITE` | Format source code according to project conventions |
| `code.inspect` | - | `SAFE_WRITE` | Inspect AST, symbols, and signature contracts |
| `code.compare` | - | `SAFE_WRITE` | Compare two code snippets or implementations |
| `code.annotate` | - | `SAFE_WRITE` | Add strict types, JSDoc, and inline explanations |
| `code.summarize` | - | `SAFE_WRITE` | Summarize code file purpose, public API, and side effects |
| `code.ast` | - | `SAFE_WRITE` | Inspect abstract syntax tree of target file |
| `code.symbols` | - | `SAFE_WRITE` | List all symbols in file or project |
| `code.types` | - | `SAFE_WRITE` | Audit TypeScript typing coverage and remove any types |
| `code.deadcode` | - | `SAFE_WRITE` | Find unused functions, classes, and variables |
| `code.duplicates` | - | `SAFE_WRITE` | Identify duplicate code blocks suitable for abstraction |
| `code.smells` | - | `SAFE_WRITE` | Detect anti-patterns and code smells |
| `code.conventions` | - | `SAFE_WRITE` | Check compliance with team coding conventions |
| `code.review` | `review` | `SAFE_WRITE` | Senior engineering review of code file or git diff |
| `code.fix` | `fix` | `SAFE_WRITE` | Automatically fix errors or warnings reported in code |
| `code.transform` | - | `SAFE_WRITE` | Apply codemod transformation across multiple files |
| `code.inline` | - | `SAFE_WRITE` | Inline small helper functions for performance |

### <a id="core-system"></a>Core & System (20 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `help` | `h` | `SAFE_WRITE` | Display help and command usage |
| `version` | `v`, `--version`, `-v` | `SAFE_WRITE` | Display Ford Code version and environment information |
| `status` | `st` | `SAFE_WRITE` | Display system telemetry, workspace stats, AI provider, and Git status |
| `doctor` | `doc-check` | `SAFE_WRITE` | Run full system environment diagnostics and tool health check |
| `config` | - | `SAFE_WRITE` | Inspect or display active configuration |
| `config.get` | - | `SAFE_WRITE` | Get a specific configuration setting value |
| `config.set` | - | `SAFE_WRITE` | Set a configuration key and value |
| `config.list` | - | `SAFE_WRITE` | List all configuration keys and values |
| `config.reset` | - | `SAFE_WRITE` | Reset configuration to default settings |
| `setup` | - | `SAFE_WRITE` | Interactive initial setup wizard for AI engines and workspace |
| `update` | - | `SAFE_WRITE` | Check and install updates for FORD CODE |
| `uninstall` | - | `SAFE_WRITE` | Cleanly remove local caches and Ford Code configuration |
| `reset` | - | `SAFE_WRITE` | Reset active session, cache, and project indexes |
| `diagnostics` | - | `SAFE_WRITE` | Run diagnostic health check on all connected engines and tools |
| `ping` | - | `SAFE_WRITE` | Send handshake ping to active AI provider to measure latency |
| `telemetry` | - | `SAFE_WRITE` | View token usage, tool execution counters, and latency stats |
| `logs` | - | `SAFE_WRITE` | Inspect recent structured application logs |
| `logs.clear` | - | `SAFE_WRITE` | Clear application logs from .ford/logs/ford.log |
| `info` | - | `SAFE_WRITE` | Display detailed metadata regarding active project |
| `whoami` | - | `SAFE_WRITE` | Display current engineer profile and permission level |

### <a id="database-schemas"></a>Database & Schemas (18 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `db.inspect` | - | `SAFE_WRITE` | Inspect project database schemas and ORM models |
| `db.schema` | - | `SAFE_WRITE` | Design relational (PostgreSQL, MySQL) or NoSQL schemas |
| `db.migrate` | - | `SAFE_WRITE` | Generate and execute schema migrations |
| `db.seed` | - | `SAFE_WRITE` | Generate deterministic mock seed data fixtures |
| `db.query` | - | `SAFE_WRITE` | Formulate optimized SQL or ORM queries |
| `db.diff` | - | `SAFE_WRITE` | Compare schema differences between environments |
| `db.optimize` | - | `SAFE_WRITE` | Optimize slow SQL queries with indexes and EXPLAIN plans |
| `db.explain` | - | `SAFE_WRITE` | Explain database query execution plan |
| `db.status` | - | `SAFE_WRITE` | Check database connectivity and migration status |
| `db.test` | - | `SAFE_WRITE` | Execute integration tests against test database |
| `db.rollback` | - | `SAFE_WRITE` | Rollback last applied schema migration |
| `db.index` | - | `SAFE_WRITE` | Recommend composite or B-tree indexes |
| `db.mock` | - | `SAFE_WRITE` | Generate in-memory SQLite / mock DB for tests |
| `db.models` | - | `SAFE_WRITE` | Generate Prisma, TypeORM, Drizzle, or SQLAlchemy models |
| `db.export` | - | `SAFE_WRITE` | Export schema DDL definition to SQL file |
| `db.backup` | - | `SAFE_WRITE` | Draft automated database backup script |
| `db.validate` | - | `SAFE_WRITE` | Validate foreign key constraints and schema relations |
| `db.entities` | - | `SAFE_WRITE` | List all mapped database entities and attributes |

### <a id="debug-diagnostics"></a>Debug & Diagnostics (20 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `debug` | - | `SAFE_WRITE` | Interactive senior debugging assistant |
| `debug.analyze` | - | `SAFE_WRITE` | Analyze error stacktrace or anomalous behavior |
| `debug.trace` | - | `SAFE_WRITE` | Trace data flow and execution path leading to error |
| `debug.logs` | - | `SAFE_WRITE` | Inspect error logs and pinpoint failure origin |
| `debug.stacktrace` | - | `SAFE_WRITE` | Parse and explain stacktrace with source line context |
| `debug.reproduce` | - | `SAFE_WRITE` | Formulate minimal reproduction test case for bug |
| `debug.fix` | - | `SAFE_WRITE` | Automatically diagnose and patch bug |
| `debug.watch` | - | `SAFE_WRITE` | Monitor terminal output and alert on exceptions |
| `debug.inspect` | - | `SAFE_WRITE` | Inspect runtime state and local variable scopes |
| `debug.breakpoints` | - | `SAFE_WRITE` | Recommend optimal breakpoint placements |
| `debug.memory` | - | `SAFE_WRITE` | Analyze heap usage and memory leaks |
| `debug.profile` | - | `SAFE_WRITE` | Profile execution bottlenecks and slow functions |
| `debug.isolate` | - | `SAFE_WRITE` | Isolate failing module from external dependencies |
| `debug.snapshot` | - | `SAFE_WRITE` | Capture snapshot of workspace state before debugging |
| `debug.syntax` | - | `SAFE_WRITE` | Validate syntax of all files and highlight parse errors |
| `debug.types` | - | `SAFE_WRITE` | Diagnose TypeScript compiler type errors |
| `debug.network` | - | `SAFE_WRITE` | Debug failed HTTP requests and API timeouts |
| `debug.concurrency` | - | `SAFE_WRITE` | Identify race conditions and async promise deadlocks |
| `debug.assertions` | - | `SAFE_WRITE` | Explain test assertion differences (expected vs actual) |
| `debug.rootcause` | - | `SAFE_WRITE` | Generate senior root cause analysis (RCA) report |

### <a id="dependencies-packages"></a>Dependencies & Packages (18 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `deps.list` | - | `SAFE_WRITE` | List all direct dependencies and installed versions |
| `deps.analyze` | - | `SAFE_WRITE` | Analyze dependency tree depth and package bloat |
| `deps.update` | - | `SAFE_WRITE` | Update dependencies to latest compatible versions |
| `deps.outdated` | - | `SAFE_WRITE` | Check for outdated packages against registry |
| `deps.audit` | - | `SAFE_WRITE` | Audit dependencies for known security CVE vulnerabilities |
| `deps.tree` | - | `SAFE_WRITE` | Display full hierarchical dependency tree |
| `deps.graph` | - | `SAFE_WRITE` | Generate visual dependency relationship graph |
| `deps.install` | - | `SAFE_WRITE` | Install project dependencies or add new package |
| `deps.remove` | - | `SAFE_WRITE` | Remove unused package and prune lockfile |
| `deps.lock` | - | `SAFE_WRITE` | Verify lockfile consistency with package manifest |
| `deps.explain` | - | `SAFE_WRITE` | Explain why a package is needed and what it does |
| `deps.unused` | - | `SAFE_WRITE` | Detect declared dependencies not imported anywhere |
| `deps.licenses` | - | `SAFE_WRITE` | Inspect license compliance (MIT, Apache, GPL) |
| `deps.clean` | - | `SAFE_WRITE` | Prune unused cached packages |
| `deps.dedupe` | - | `SAFE_WRITE` | Deduplicate duplicate package versions in node_modules |
| `deps.verify` | - | `SAFE_WRITE` | Verify package integrity and checksum hashes |
| `deps.check` | - | `SAFE_WRITE` | Check peer dependency warnings and mismatches |
| `deps.vulnerable` | - | `SAFE_WRITE` | List only vulnerable packages requiring patch |

### <a id="diff-patch-undo"></a>Diff, Patch & Undo (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `diff` | - | `SAFE_WRITE` | Display colorized unified diff of working tree changes |
| `diff.file` | - | `SAFE_WRITE` | Show diff for specific file |
| `diff.summary` | - | `SAFE_WRITE` | Show summary of modified files with added/removed line counts |
| `diff.check` | - | `SAFE_WRITE` | Check if working tree has any modifications |
| `diff.staged` | - | `SAFE_WRITE` | Show diff of staged changes |
| `diff.cached` | - | `SAFE_WRITE` | Alias for diff.staged |
| `patch.apply` | - | `SAFE_WRITE` | Apply unified patch to file |
| `patch.test` | - | `READ_ONLY` | Dry-run test patch applicability |
| `patch.reverse` | - | `SAFE_WRITE` | Reverse previously applied patch |
| `undo` | - | `SAFE_WRITE` | Undo last file modification using checkpoint snapshot |
| `undo.last` | - | `SAFE_WRITE` | Undo most recent file change |
| `undo.list` | - | `READ_ONLY` | List all available undo checkpoints |
| `undo.restore` | - | `SAFE_WRITE` | Restore file from specific checkpoint ID |
| `undo.clear` | - | `DESTRUCTIVE_CONFIRMATION` | Clear undo checkpoint history |
| `snapshot.create` | - | `SAFE_WRITE` | Create manual checkpoint snapshot |
| `snapshot.list` | - | `READ_ONLY` | List manual snapshots |

### <a id="docker-containers"></a>Docker & Containers (18 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `docker.inspect` | - | `SAFE_WRITE` | Inspect Dockerfile and container configuration |
| `docker.build` | - | `SAFE_WRITE` | Build container image using Docker or Podman |
| `docker.run` | - | `SAFE_WRITE` | Run project inside containerized environment |
| `docker.logs` | - | `SAFE_WRITE` | View logs from running project containers |
| `docker.compose` | - | `SAFE_WRITE` | Generate or validate docker-compose.yml |
| `docker.cleanup` | - | `SAFE_WRITE` | Clean unused containers, volumes, and dangling images |
| `docker.analyze` | - | `SAFE_WRITE` | Analyze image layer caching and size |
| `docker.push` | - | `SAFE_WRITE` | Push image to container registry |
| `docker.scan` | - | `SAFE_WRITE` | Scan container image for OS CVE vulnerabilities |
| `docker.prune` | - | `SAFE_WRITE` | Prune builder caches |
| `docker.env` | - | `SAFE_WRITE` | Configure environment variables inside container |
| `docker.file` | - | `SAFE_WRITE` | Generate production multi-stage Dockerfile |
| `docker.stop` | - | `SAFE_WRITE` | Stop active project containers |
| `docker.ps` | - | `SAFE_WRITE` | List running project containers |
| `docker.generate` | - | `SAFE_WRITE` | Generate complete Dockerfile and .dockerignore |
| `docker.lint` | - | `SAFE_WRITE` | Lint Dockerfile with Hadolint rules |
| `docker.security` | - | `SAFE_WRITE` | Harden Dockerfile (non-root user, read-only rootfs) |
| `docker.optimize` | - | `SAFE_WRITE` | Shrink container image size using Alpine or Distroless |

### <a id="documentation-specs"></a>Documentation & Specs (18 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `docs.generate` | - | `SAFE_WRITE` | Generate documentation for project or module |
| `docs.update` | - | `SAFE_WRITE` | Update existing documentation to reflect latest code |
| `docs.explain` | - | `SAFE_WRITE` | Generate architectural explanation documentation |
| `docs.api` | - | `SAFE_WRITE` | Generate comprehensive REST / GraphQL API reference |
| `docs.readme` | - | `SAFE_WRITE` | Generate or update production README.md with badges |
| `docs.changelog` | - | `SAFE_WRITE` | Generate CHANGELOG.md from git commit history |
| `docs.architecture` | - | `SAFE_WRITE` | Draft Architecture Decision Record (ADR) |
| `docs.examples` | - | `SAFE_WRITE` | Generate practical code usage examples |
| `docs.jsdoc` | - | `SAFE_WRITE` | Add strict JSDoc comments to public exports |
| `docs.swagger` | - | `SAFE_WRITE` | Generate OpenAPI / Swagger specification JSON/YAML |
| `docs.markdown` | - | `SAFE_WRITE` | Lint and format markdown documentation files |
| `docs.lint` | - | `SAFE_WRITE` | Check documentation for broken links and code blocks |
| `docs.preview` | - | `SAFE_WRITE` | Preview rendered documentation in terminal or browser |
| `docs.toc` | - | `SAFE_WRITE` | Generate table of contents for markdown files |
| `docs.types` | - | `SAFE_WRITE` | Document exported TypeScript types and interfaces |
| `docs.guide` | - | `SAFE_WRITE` | Create step-by-step developer onboarding guide |
| `docs.comments` | - | `SAFE_WRITE` | Review inline code comments for accuracy |
| `docs.diagram` | - | `SAFE_WRITE` | Generate Mermaid architecture diagrams |

### <a id="environment-configuration"></a>Environment & Configuration (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `env.inspect` | - | `SAFE_WRITE` | Inspect environment variables and active profiles |
| `env.validate` | - | `SAFE_WRITE` | Validate required environment variables against schema |
| `env.compare` | - | `SAFE_WRITE` | Compare .env with .env.example |
| `env.doctor` | - | `SAFE_WRITE` | Run system environment health check |
| `env.load` | - | `SAFE_WRITE` | Load environment variables from specified file |
| `env.export` | - | `SAFE_WRITE` | Export current environment variables safely |
| `env.set` | - | `SAFE_WRITE` | Set an environment variable |
| `env.unset` | - | `SAFE_WRITE` | Unset an environment variable |
| `env.diff` | - | `SAFE_WRITE` | Show diff between development and production env files |
| `env.sync` | - | `SAFE_WRITE` | Sync missing keys from .env.example into .env |
| `env.secrets` | - | `SAFE_WRITE` | Audit environment files for unencrypted secrets |
| `env.sample` | - | `SAFE_WRITE` | Generate clean .env.example without real secrets |
| `env.check` | - | `SAFE_WRITE` | Verify all required runtime variables are populated |
| `env.list` | - | `SAFE_WRITE` | List configured environment keys (values redacted) |
| `env.clean` | - | `SAFE_WRITE` | Remove unused or deprecated env vars |
| `env.audit` | - | `SAFE_WRITE` | Audit production readiness of env configuration |

### <a id="export-artifacts"></a>Export & Artifacts (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `export.session` | - | `SAFE_WRITE` | Export active conversation session to file |
| `export.patch` | - | `SAFE_WRITE` | Export proposed changes as a unified git patch file |
| `export.diff` | - | `SAFE_WRITE` | Export working tree changes as diff file |
| `export.report` | - | `SAFE_WRITE` | Export diagnostic report to file |
| `export.config` | - | `SAFE_WRITE` | Export active configuration settings to JSON |
| `export.projectmap` | - | `SAFE_WRITE` | Export architecture map to Markdown |
| `export.code` | - | `SAFE_WRITE` | Export concatenated codebase for LLM prompt ingestion |
| `export.ast` | - | `SAFE_WRITE` | Export AST representations to JSON |
| `export.context` | - | `SAFE_WRITE` | Export smart context payload to file |
| `export.memory` | - | `SAFE_WRITE` | Export stored memories to JSON file |
| `export.schema` | - | `SAFE_WRITE` | Export command catalog schema to JSON |
| `export.summary` | - | `SAFE_WRITE` | Export executive project summary |
| `export.logs` | - | `SAFE_WRITE` | Export application logs to archive |
| `export.tests` | - | `SAFE_WRITE` | Export test result report |
| `export.diagram` | - | `SAFE_WRITE` | Export Mermaid diagram image or text |
| `export.json` | - | `SAFE_WRITE` | Export project metadata as JSON |

### <a id="files-filesystem"></a>Files & Filesystem (20 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `file.read` | `cat`, `read` | `READ_ONLY` | Read and display contents of a file |
| `file.write` | `write` | `SAFE_WRITE` | Write full content to a file |
| `file.edit` | - | `SAFE_WRITE` | Replace exact content chunk with new content |
| `file.patch` | - | `SAFE_WRITE` | Apply structured patch to file and record undo checkpoint |
| `file.move` | `mv` | `SAFE_WRITE` | Move or rename a file |
| `file.copy` | `cp` | `SAFE_WRITE` | Copy a file to destination path |
| `file.rename` | - | `SAFE_WRITE` | Rename a file in workspace |
| `file.delete` | `rm` | `DESTRUCTIVE_CONFIRMATION` | Delete a file with confirmation guard |
| `file.restore` | - | `SAFE_WRITE` | Restore file from last undo checkpoint |
| `file.compare` | - | `READ_ONLY` | Compare two files and output unified diff |
| `file.watch` | - | `READ_ONLY` | Watch file or directory for modification events |
| `file.stats` | - | `READ_ONLY` | Display size, creation, and modification timestamps for file |
| `file.checksum` | - | `READ_ONLY` | Compute SHA256 checksum of target file |
| `file.linecount` | - | `READ_ONLY` | Count total lines, code lines, and blank lines in file |
| `file.permissions` | - | `READ_ONLY` | Inspect POSIX file mode and permissions |
| `file.find` | `find` | `READ_ONLY` | Find files matching glob or regex pattern |
| `file.touch` | - | `SAFE_WRITE` | Create empty file or update timestamp |
| `file.truncate` | - | `DESTRUCTIVE_CONFIRMATION` | Truncate file content to zero bytes |
| `file.head` | - | `READ_ONLY` | Display first N lines of file |
| `file.tail` | - | `READ_ONLY` | Display last N lines of file |

### <a id="git-version-control"></a>Git & Version Control (28 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `git.status` | - | `READ_ONLY` | Show status of working directory and staged files |
| `git.diff` | - | `READ_ONLY` | Show changes between working tree and index |
| `git.log` | - | `READ_ONLY` | Display recent git commit history |
| `git.show` | - | `READ_ONLY` | Show commit details and unified diff |
| `git.branch` | - | `READ_ONLY` | List or display current git branch |
| `git.checkout` | - | `SAFE_WRITE` | Switch branch or restore working tree files |
| `git.switch` | - | `SAFE_WRITE` | Switch branches |
| `git.merge` | - | `SAFE_WRITE` | Merge specified branch into current branch |
| `git.rebase` | - | `SAFE_WRITE` | Rebase current branch onto target branch |
| `git.stash` | - | `SAFE_WRITE` | Stash uncommitted changes in dirty working directory |
| `git.commit` | - | `SAFE_WRITE` | Create conventional commit from staged changes |
| `git.amend` | - | `SAFE_WRITE` | Amend previous commit |
| `git.cherrypick` | - | `SAFE_WRITE` | Apply changes introduced by existing commit |
| `git.tag` | - | `SAFE_WRITE` | Create, list, or verify git tags |
| `git.fetch` | - | `READ_ONLY` | Download objects and refs from remote repository |
| `git.pull` | - | `SAFE_WRITE` | Fetch and integrate remote changes into current branch |
| `git.push` | - | `COMMAND_CONFIRMATION` | Update remote refs along with associated objects |
| `git.remote` | - | `READ_ONLY` | Manage set of tracked repositories |
| `git.blame` | - | `READ_ONLY` | Show what revision and author last modified each line |
| `git.bisect` | - | `SAFE_WRITE` | Binary search to find commit that introduced a bug |
| `git.restore` | - | `SAFE_WRITE` | Restore working tree files from HEAD |
| `git.clean` | - | `DESTRUCTIVE_CONFIRMATION` | Remove untracked files from working directory |
| `git.worktree` | - | `SAFE_WRITE` | Manage multiple working trees attached to same repo |
| `git.archive` | - | `READ_ONLY` | Create archive of files from a named tree |
| `git.summarize` | - | `READ_ONLY` | Generate senior summary of recent commits and changes |
| `git.explain` | - | `READ_ONLY` | Explain intent and implications of a commit |
| `git.review` | - | `READ_ONLY` | Perform full code review of staged/unstaged changes |
| `git.conflict.resolve` | - | `SAFE_WRITE` | Analyze and resolve merge conflict markers |

### <a id="lint-code-style"></a>Lint & Code Style (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `lint` | - | `SAFE_WRITE` | Run project linter (ESLint, Biome, Ruff, Clippy) |
| `lint.fix` | - | `SAFE_WRITE` | Automatically fix auto-fixable lint rule violations |
| `lint.explain` | - | `SAFE_WRITE` | Explain rationale behind lint rule violation |
| `lint.config` | - | `SAFE_WRITE` | Inspect or generate linter configuration file |
| `lint.changed` | - | `SAFE_WRITE` | Lint only files modified in git working tree |
| `lint.all` | - | `SAFE_WRITE` | Run strict lint audit across entire repository |
| `lint.rules` | - | `SAFE_WRITE` | List enabled lint rules |
| `lint.suppress` | - | `SAFE_WRITE` | Add inline suppression comments with justifications |
| `lint.strict` | - | `SAFE_WRITE` | Run linter in zero-warnings strict mode |
| `lint.format` | - | `SAFE_WRITE` | Format files using Prettier or project formatter |
| `lint.check` | - | `SAFE_WRITE` | Check code formatting without modifying files |
| `lint.report` | - | `SAFE_WRITE` | Generate machine-readable lint report |
| `lint.staged` | - | `SAFE_WRITE` | Lint files currently staged in Git |
| `lint.custom` | - | `SAFE_WRITE` | Create custom ESLint or linter rule |
| `lint.diff` | - | `SAFE_WRITE` | Lint only changed lines in git diff |
| `lint.ci` | - | `SAFE_WRITE` | Execute lint check suitable for CI pipelines |

### <a id="mcp-integration"></a>MCP Integration (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `mcp.list` | - | `SAFE_WRITE` | List registered Model Context Protocol tools and servers |
| `mcp.connect` | - | `SAFE_WRITE` | Connect to an external MCP server via stdio or HTTP |
| `mcp.disconnect` | - | `SAFE_WRITE` | Disconnect from an MCP server |
| `mcp.inspect` | - | `SAFE_WRITE` | Inspect MCP tool schema and parameters |
| `mcp.tools` | - | `SAFE_WRITE` | List all tools exposed across all connected MCP servers |
| `mcp.resources` | - | `SAFE_WRITE` | List context resources exposed by MCP servers |
| `mcp.prompts` | - | `SAFE_WRITE` | List prompt templates exposed by MCP servers |
| `mcp.ping` | - | `SAFE_WRITE` | Ping connected MCP servers to test availability |
| `mcp.servers` | - | `SAFE_WRITE` | List all configured MCP servers |
| `mcp.call` | - | `SAFE_WRITE` | Manually invoke an MCP tool with JSON arguments |
| `mcp.config` | - | `SAFE_WRITE` | Inspect or edit .ford/mcp.json server configuration |
| `mcp.schema` | - | `SAFE_WRITE` | Display JSON schema for MCP integration |
| `mcp.test` | - | `SAFE_WRITE` | Test execution of registered MCP tools |
| `mcp.add` | - | `SAFE_WRITE` | Add new MCP server to configuration |
| `mcp.remove` | - | `SAFE_WRITE` | Remove MCP server from configuration |
| `mcp.refresh` | - | `SAFE_WRITE` | Refresh tool list from all connected MCP servers |

### <a id="performance-profiling"></a>Performance & Profiling (18 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `perf.analyze` | - | `SAFE_WRITE` | Analyze performance bottlenecks and slow paths |
| `perf.profile` | - | `SAFE_WRITE` | Capture and visualize CPU / heap profile |
| `perf.benchmark` | - | `SAFE_WRITE` | Run micro-benchmarks on critical functions |
| `perf.memory` | - | `SAFE_WRITE` | Detect memory retention leaks and excessive allocations |
| `perf.cpu` | - | `SAFE_WRITE` | Profile CPU-intensive loops and recursion |
| `perf.startup` | - | `SAFE_WRITE` | Optimize application startup time and initial evaluation |
| `perf.bundle` | - | `SAFE_WRITE` | Audit JavaScript bundle chunking and lazy-loading |
| `perf.optimize` | - | `SAFE_WRITE` | Apply senior performance optimizations to code |
| `perf.flamegraph` | - | `SAFE_WRITE` | Generate flamegraph visualization from profile |
| `perf.leaks` | - | `SAFE_WRITE` | Scan for dangling event listeners and timers |
| `perf.network` | - | `SAFE_WRITE` | Analyze API payload sizes and serialization latency |
| `perf.renders` | - | `SAFE_WRITE` | Optimize React / UI re-renders and memoization |
| `perf.latency` | - | `SAFE_WRITE` | Measure p50, p95, p99 request latencies |
| `perf.cache` | - | `SAFE_WRITE` | Design Redis / in-memory caching strategy |
| `perf.loops` | - | `SAFE_WRITE` | Refactor O(N^2) loops into hash lookups |
| `perf.queries` | - | `SAFE_WRITE` | Analyze N+1 database query problems |
| `perf.summary` | - | `SAFE_WRITE` | Executive summary of performance audit |
| `perf.report` | - | `SAFE_WRITE` | Export performance metrics report |

### <a id="permissions-safety"></a>Permissions & Safety (14 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `permissions` | - | `SAFE_WRITE` | Display active permission level and safety rules |
| `permissions.allow` | - | `SAFE_WRITE` | Allow command pattern in safety configuration |
| `permissions.deny` | - | `SAFE_WRITE` | Block command pattern in safety configuration |
| `permissions.reset` | - | `SAFE_WRITE` | Reset permissions to safe default confirmation mode |
| `permissions.status` | - | `SAFE_WRITE` | Display current safety guards status |
| `permissions.audit` | - | `SAFE_WRITE` | Audit requested commands against security policy |
| `permissions.list` | - | `SAFE_WRITE` | List all 5 permission levels and rules |
| `permissions.level` | - | `SAFE_WRITE` | Set permission level (READ_ONLY, SAFE_WRITE, FULLY_AUTONOMOUS) |
| `permissions.rules` | - | `SAFE_WRITE` | Display dangerous command regex patterns |
| `permissions.safe` | - | `SAFE_WRITE` | Enable safe write mode |
| `permissions.grant` | - | `SAFE_WRITE` | Grant temporary execution grant |
| `permissions.revoke` | - | `SAFE_WRITE` | Revoke temporary execution grant |
| `permissions.readonly` | - | `SAFE_WRITE` | Engage strict READ_ONLY mode |
| `permissions.autonomous` | - | `SAFE_WRITE` | Engage FULLY_AUTONOMOUS mode |

### <a id="persistent-memory"></a>Persistent Memory (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `memory.list` | - | `SAFE_WRITE` | List all remembered preferences and architecture decisions |
| `memory.search` | - | `SAFE_WRITE` | Search stored memories by keyword |
| `memory.inspect` | - | `SAFE_WRITE` | Inspect details of specific stored memory key |
| `memory.summarize` | - | `SAFE_WRITE` | Summarize all stored memories into prompt instructions |
| `memory.clear` | - | `SAFE_WRITE` | Clear stored memories |
| `memory.add` | - | `SAFE_WRITE` | Save a developer preference or architectural decision |
| `memory.remove` | - | `SAFE_WRITE` | Remove a stored memory item |
| `memory.export` | - | `SAFE_WRITE` | Export memories to JSON file |
| `memory.import` | - | `SAFE_WRITE` | Import memories from JSON file |
| `memory.prune` | - | `SAFE_WRITE` | Prune duplicate or outdated memory entries |
| `memory.stats` | - | `SAFE_WRITE` | Display memory usage metrics |
| `memory.project` | - | `SAFE_WRITE` | List project-scoped memory records |
| `memory.global` | - | `SAFE_WRITE` | List user-global memory records |
| `memory.preferences` | - | `SAFE_WRITE` | Display developer style preferences |
| `memory.decisions` | - | `SAFE_WRITE` | Display historical architectural decisions |
| `memory.conventions` | - | `SAFE_WRITE` | Display enforced naming and coding conventions |

### <a id="plugin-system"></a>Plugin System (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `plugin.list` | - | `SAFE_WRITE` | List installed Ford Code plugins |
| `plugin.search` | - | `SAFE_WRITE` | Search plugin marketplace |
| `plugin.install` | - | `SAFE_WRITE` | Install a Ford Code plugin from npm or local path |
| `plugin.remove` | - | `SAFE_WRITE` | Uninstall a plugin |
| `plugin.enable` | - | `SAFE_WRITE` | Enable an installed plugin |
| `plugin.disable` | - | `SAFE_WRITE` | Disable a plugin |
| `plugin.inspect` | - | `SAFE_WRITE` | Inspect plugin commands, tools, and hooks |
| `plugin.create` | - | `SAFE_WRITE` | Scaffold boilerplate for a new Ford Code plugin |
| `plugin.update` | - | `SAFE_WRITE` | Check and update installed plugins |
| `plugin.config` | - | `SAFE_WRITE` | Configure plugin-specific options |
| `plugin.validate` | - | `SAFE_WRITE` | Validate plugin manifest against schema |
| `plugin.hooks` | - | `SAFE_WRITE` | List active plugin lifecycle hooks |
| `plugin.tools` | - | `SAFE_WRITE` | List custom tools contributed by plugins |
| `plugin.commands` | - | `SAFE_WRITE` | List commands contributed by plugins |
| `plugin.publish` | - | `SAFE_WRITE` | Publish plugin to package registry |
| `plugin.reload` | - | `SAFE_WRITE` | Hot reload plugins without restarting CLI |

### <a id="project-intelligence"></a>Project Intelligence (22 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `project.init` | `init` | `SAFE_WRITE` | Initialize FORD CODE configuration in current repository |
| `project.detect` | - | `SAFE_WRITE` | Detect project languages, frameworks, and tools |
| `project.analyze` | - | `SAFE_WRITE` | Deep senior analysis of repository architecture and dependencies |
| `project.map` | - | `SAFE_WRITE` | Generate comprehensive project architecture map |
| `project.tree` | - | `SAFE_WRITE` | Render visual directory tree of workspace files |
| `project.stats` | - | `SAFE_WRITE` | Display total files, lines of code, and language distribution |
| `project.health` | - | `SAFE_WRITE` | Audit repository health, missing tests, and outdated dependencies |
| `project.dependencies` | - | `SAFE_WRITE` | List all direct and transitive dependencies |
| `project.architecture` | - | `SAFE_WRITE` | Evaluate architectural patterns (MVC, Clean, Microservices) |
| `project.structure` | - | `SAFE_WRITE` | Analyze folder hierarchy and modularity |
| `project.languages` | - | `SAFE_WRITE` | List all detected programming languages with usage percentages |
| `project.frameworks` | - | `SAFE_WRITE` | List all detected backend, frontend, and test frameworks |
| `project.complexity` | - | `SAFE_WRITE` | Calculate cyclomatic and cognitive complexity metrics |
| `project.graph` | - | `SAFE_WRITE` | Generate dependency and import graph |
| `project.deadcode` | - | `SAFE_WRITE` | Detect unused files and unreachable exports |
| `project.licenses` | - | `SAFE_WRITE` | Audit third-party dependency licenses |
| `project.audit` | - | `SAFE_WRITE` | Comprehensive audit of security, lint, test, and style |
| `project.clean` | - | `SAFE_WRITE` | Clean build artifacts, caches, and temporary files |
| `project.loc` | - | `SAFE_WRITE` | Lines of code breakdown by file extension |
| `project.overview` | - | `SAFE_WRITE` | Executive summary of repository purpose and structure |
| `project.validate` | - | `SAFE_WRITE` | Validate project configuration files (tsconfig, eslint, etc.) |
| `project.refresh` | - | `SAFE_WRITE` | Re-index entire project and update .ford/ metadata |

### <a id="project-scaffolding"></a>Project Scaffolding (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `create.reactapp` | `create-react` | `SAFE_WRITE` | Scaffold React 19 + TypeScript + Vite project |
| `create.nextapp` | `create-next` | `SAFE_WRITE` | Scaffold Next.js App Router project |
| `create.pythonapi` | `create-fastapi` | `SAFE_WRITE` | Scaffold FastAPI + Pydantic backend API |
| `create.cli` | `create-cli` | `SAFE_WRITE` | Scaffold modern TypeScript CLI tool with Commander |
| `create.nodeapi` | `create-express` | `SAFE_WRITE` | Scaffold Express + TypeScript microservice API |
| `create.rustcli` | `create-rust` | `SAFE_WRITE` | Scaffold high-performance Rust CLI with Clap |
| `create.goservice` | `create-go` | `SAFE_WRITE` | Scaffold idiomatic Go HTTP microservice |
| `create.expressapi` | - | `SAFE_WRITE` | Scaffold Express.js backend API |
| `create.vueapp` | - | `SAFE_WRITE` | Scaffold Vue 3 + Vite application |
| `create.svelteapp` | - | `SAFE_WRITE` | Scaffold SvelteKit modern application |
| `create.fastapi` | - | `SAFE_WRITE` | Scaffold Python FastAPI service |
| `create.microservice` | - | `SAFE_WRITE` | Scaffold cloud-native microservice architecture |
| `create.dockerfile` | - | `SAFE_WRITE` | Generate hardened Dockerfile template |
| `create.component` | - | `SAFE_WRITE` | Scaffold React or Vue UI component |
| `create.hook` | - | `SAFE_WRITE` | Scaffold custom React hook with tests |
| `create.test` | - | `SAFE_WRITE` | Scaffold test suite file for target module |

### <a id="reports-analytics"></a>Reports & Analytics (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `report.project` | - | `SAFE_WRITE` | Generate comprehensive project status report |
| `report.security` | - | `SAFE_WRITE` | Generate executive security report |
| `report.performance` | - | `SAFE_WRITE` | Generate performance and bottleneck analysis report |
| `report.tests` | - | `SAFE_WRITE` | Generate test coverage and test health report |
| `report.dependencies` | - | `SAFE_WRITE` | Generate dependency audit report |
| `report.git` | - | `SAFE_WRITE` | Generate git commit activity and contributor report |
| `report.architecture` | - | `SAFE_WRITE` | Generate system architecture and modularity report |
| `report.quality` | - | `SAFE_WRITE` | Generate code quality and maintainability index report |
| `report.coverage` | - | `SAFE_WRITE` | Generate detailed test branch coverage report |
| `report.compliance` | - | `SAFE_WRITE` | Generate license and compliance report |
| `report.export` | - | `SAFE_WRITE` | Export reports in HTML, Markdown, or JSON formats |
| `report.summary` | - | `SAFE_WRITE` | Print high-level executive dashboard summary |
| `report.markdown` | - | `SAFE_WRITE` | Export report formatted as Markdown document |
| `report.html` | - | `SAFE_WRITE` | Export report as standalone styled HTML file |
| `report.json` | - | `SAFE_WRITE` | Export report as structured JSON data |
| `report.terminal` | - | `SAFE_WRITE` | Display colorized terminal summary report |

### <a id="search-exploration"></a>Search & Exploration (20 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `search` | - | `SAFE_WRITE` | Fuzzy search across codebase files and symbols |
| `search.text` | - | `SAFE_WRITE` | Search exact text query in all project files |
| `search.regex` | - | `SAFE_WRITE` | Search regular expression pattern in project files |
| `search.files` | - | `SAFE_WRITE` | Search file names by glob or keyword |
| `search.symbols` | - | `SAFE_WRITE` | Search functions, classes, and types by name |
| `search.imports` | - | `SAFE_WRITE` | Find all files importing a specific package or module |
| `search.references` | - | `SAFE_WRITE` | Find all usages and references of an identifier |
| `search.definitions` | - | `SAFE_WRITE` | Locate definition site of a function or class |
| `search.usages` | - | `SAFE_WRITE` | List all call sites for target function |
| `search.todo` | - | `SAFE_WRITE` | Find all TODO comments across codebase |
| `search.fixme` | - | `SAFE_WRITE` | Find all FIXME comments across codebase |
| `search.errors` | - | `SAFE_WRITE` | Search code for throw statements, error classes, and panics |
| `search.diff` | - | `SAFE_WRITE` | Search inside working tree git diff for matching lines |
| `search.ast` | - | `SAFE_WRITE` | Search AST for specific node patterns |
| `search.duplicates` | - | `SAFE_WRITE` | Search for duplicated strings or logic blocks |
| `search.deps` | - | `SAFE_WRITE` | Search if a package is used anywhere in repository |
| `search.calls` | - | `SAFE_WRITE` | Find all outbound function calls from a module |
| `search.types` | - | `SAFE_WRITE` | Search TypeScript type and interface declarations |
| `search.exports` | - | `SAFE_WRITE` | List all public module exports |
| `search.strings` | - | `SAFE_WRITE` | Search hardcoded string literals across project |

### <a id="security-compliance"></a>Security & Compliance (20 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `security.scan` | - | `SAFE_WRITE` | Run full static security analysis on repository |
| `security.audit` | - | `SAFE_WRITE` | Audit codebase against OWASP Top 10 vulnerabilities |
| `security.dependencies` | - | `SAFE_WRITE` | Scan third-party packages for known CVEs |
| `security.secrets` | - | `SAFE_WRITE` | Scan for hardcoded API keys, tokens, and private keys |
| `security.permissions` | - | `SAFE_WRITE` | Audit file system and process execution permissions |
| `security.report` | - | `SAFE_WRITE` | Generate executive security posture report |
| `security.explain` | - | `SAFE_WRITE` | Explain identified vulnerability and risk level |
| `security.fix` | - | `SAFE_WRITE` | Apply automated fix patches for detected security findings |
| `security.cve` | - | `SAFE_WRITE` | Look up specific CVE advisory details |
| `security.sast` | - | `SAFE_WRITE` | Execute static application security testing rules |
| `security.owasp` | - | `SAFE_WRITE` | Validate application defenses against OWASP standards |
| `security.headers` | - | `SAFE_WRITE` | Audit HTTP security headers (CSP, HSTS, CORS) |
| `security.tokens` | - | `SAFE_WRITE` | Verify token expiration and signature validation logic |
| `security.keys` | - | `SAFE_WRITE` | Detect weak cryptography keys or deprecated ciphers |
| `security.sanitize` | - | `SAFE_WRITE` | Audit input sanitization and XSS defenses |
| `security.compliance` | - | `SAFE_WRITE` | Evaluate SOC2, HIPAA, or GDPR compliance controls |
| `security.crypto` | - | `SAFE_WRITE` | Verify hashing algorithms (bcrypt/argon2 vs md5/sha1) |
| `security.injection` | - | `SAFE_WRITE` | Audit SQL, command, and LDAP injection risks |
| `security.cors` | - | `SAFE_WRITE` | Inspect CORS policy configuration |
| `security.roles` | - | `SAFE_WRITE` | Audit RBAC permission checks in API handlers |

### <a id="shell-aliases"></a>Shell & Aliases (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `alias` | - | `SAFE_WRITE` | List all custom command aliases |
| `alias.add` | - | `SAFE_WRITE` | Add new custom command alias |
| `alias.remove` | - | `SAFE_WRITE` | Remove custom command alias |
| `alias.list` | - | `SAFE_WRITE` | List configured aliases |
| `alias.clear` | - | `SAFE_WRITE` | Clear custom aliases |
| `completion.bash` | - | `SAFE_WRITE` | Output Bash shell completion script |
| `completion.zsh` | - | `SAFE_WRITE` | Output Zsh shell completion script |
| `completion.fish` | - | `SAFE_WRITE` | Output Fish shell completion script |
| `completion.powershell` | - | `SAFE_WRITE` | Output PowerShell completion script |
| `shell.info` | - | `SAFE_WRITE` | Inspect active shell runtime environment |
| `shell.exec` | - | `SAFE_WRITE` | Execute shell command with timeout |
| `shell.pipe` | - | `SAFE_WRITE` | Pipe output from shell into FORD agent |
| `shell.history` | - | `SAFE_WRITE` | Display history of executed CLI commands |
| `shell.clear` | - | `SAFE_WRITE` | Clear terminal screen |
| `showroom` | - | `SAFE_WRITE` | Display the 5 Ford Vehicle-Powered AI Models showroom |
| `showroom.cars` | - | `SAFE_WRITE` | Browse Ford Performance Vehicle AI model lineup |

### <a id="testing-qa"></a>Testing & QA (22 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `test` | `t` | `SAFE_WRITE` | Run automated project test suite |
| `test.run` | - | `SAFE_WRITE` | Execute project test suite |
| `test.generate` | - | `SAFE_WRITE` | Generate comprehensive test cases for target module |
| `test.unit` | - | `SAFE_WRITE` | Generate and run unit tests with mocks |
| `test.integration` | - | `SAFE_WRITE` | Run or scaffold integration tests |
| `test.e2e` | - | `SAFE_WRITE` | Run Playwright or Cypress end-to-end tests |
| `test.coverage` | - | `SAFE_WRITE` | Run test suite with code coverage reporting |
| `test.watch` | - | `SAFE_WRITE` | Start test watcher for fast feedback loop |
| `test.failed` | - | `SAFE_WRITE` | Re-run only previously failing test cases |
| `test.retry` | - | `SAFE_WRITE` | Retry flaky tests up to specified count |
| `test.explain` | - | `SAFE_WRITE` | Explain test failure and suggest code correction |
| `test.mock` | - | `SAFE_WRITE` | Generate realistic mock data fixtures |
| `test.snapshot` | - | `SAFE_WRITE` | Update or verify test snapshot files |
| `test.benchmark` | - | `SAFE_WRITE` | Execute performance benchmark test suites |
| `test.mutate` | - | `SAFE_WRITE` | Perform mutation testing to assess test quality |
| `test.isolate` | - | `SAFE_WRITE` | Run target test in complete isolation |
| `test.fixtures` | - | `SAFE_WRITE` | Scaffold reusable test fixtures and seeders |
| `test.detect` | - | `SAFE_WRITE` | Detect test runner and framework in project |
| `test.summary` | - | `SAFE_WRITE` | Print executive test summary with pass rate |
| `test.flaky` | - | `SAFE_WRITE` | Detect non-deterministic flaky tests |
| `test.stress` | - | `SAFE_WRITE` | Run load and stress tests against API endpoints |
| `test.visual` | - | `SAFE_WRITE` | Perform visual regression test diffs |

### <a id="workflows-orchestration"></a>Workflows & Orchestration (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `workflow.create` | - | `SAFE_WRITE` | Create multi-step engineering workflow |
| `workflow.run` | - | `SAFE_WRITE` | Execute a multi-step workflow |
| `workflow.inspect` | - | `SAFE_WRITE` | Inspect steps and dependencies of workflow |
| `workflow.export` | - | `SAFE_WRITE` | Export workflow definition to YAML or JSON |
| `workflow.import` | - | `SAFE_WRITE` | Import workflow definition |
| `workflow.delete` | - | `SAFE_WRITE` | Delete a saved workflow |
| `workflow.validate` | - | `SAFE_WRITE` | Validate workflow graph for circular dependencies |
| `workflow.step` | - | `SAFE_WRITE` | Execute a single step within a workflow |
| `workflow.template` | - | `SAFE_WRITE` | Scaffold workflow from best-practice template |
| `workflow.status` | - | `SAFE_WRITE` | Show status of active or last workflow run |
| `workflow.history` | - | `SAFE_WRITE` | View historical workflow runs |
| `workflow.pause` | - | `SAFE_WRITE` | Pause executing workflow |
| `workflow.resume` | - | `SAFE_WRITE` | Resume paused workflow |
| `workflow.cancel` | - | `SAFE_WRITE` | Cancel executing workflow |
| `workflow.log` | - | `SAFE_WRITE` | View detailed workflow run logs |
| `workflow.list` | - | `SAFE_WRITE` | List all available workflow definitions |

### <a id="workspace-management"></a>Workspace Management (16 Commands)

| Command | Aliases | Permissions | Description |
| :--- | :--- | :--- | :--- |
| `workspace.list` | - | `SAFE_WRITE` | List tracked workspaces |
| `workspace.open` | - | `SAFE_WRITE` | Open specified directory as active workspace |
| `workspace.switch` | - | `SAFE_WRITE` | Switch active working directory |
| `workspace.clean` | - | `SAFE_WRITE` | Clean temporary workspace caches |
| `workspace.snapshot` | - | `SAFE_WRITE` | Capture snapshot of workspace state |
| `workspace.restore` | - | `SAFE_WRITE` | Restore workspace from previous snapshot |
| `workspace.lock` | - | `SAFE_WRITE` | Lock workspace against concurrent edits |
| `workspace.info` | - | `SAFE_WRITE` | Display current workspace root, size, and file counts |
| `workspace.root` | - | `SAFE_WRITE` | Print root directory path of workspace |
| `workspace.sync` | - | `SAFE_WRITE` | Sync workspace metadata and file index |
| `workspace.health` | - | `SAFE_WRITE` | Run health audit on active workspace |
| `workspace.temp` | - | `SAFE_WRITE` | Inspect scratch directory in .ford/cache |
| `workspace.backup` | - | `SAFE_WRITE` | Backup workspace files into zip or tar archive |
| `workspace.status` | - | `SAFE_WRITE` | Show workspace indexing status and memory footprint |
| `workspace.tree` | - | `SAFE_WRITE` | Display workspace file hierarchy |
| `workspace.rules` | - | `SAFE_WRITE` | Inspect project rules and agent guidelines |

