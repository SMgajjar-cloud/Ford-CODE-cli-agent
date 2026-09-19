<div align="center">

```text
███████╗ ██████╗ ██████╗ ██████╗ 
██╔════╝██╔═══██╗██╔══██╗██╔══██╗
█████╗  ██║   ██║██████╔╝██║  ██║
██╔══╝  ██║   ██║██╔══██╗██║  ██║
██║     ╚██████╔╝██║  ██║██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═════╝ 
```

# FORD CODE
### Autonomous Senior AI Terminal Coding Agent

[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Commands](https://img.shields.io/badge/Commands-614%20Real%20Commands-0057B8?style=for-the-badge&logo=terminal&logoColor=white)](./COMMANDS.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-4DA6FF?style=for-the-badge)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-00FF88?style=for-the-badge)](./CONTRIBUTING.md)

*An autonomous CLI coding agent engineered for senior software development, repository understanding, self-correcting test loops, safe AST/diff patching, and developer productivity.*

---

[Quick Start](#-quick-start) •
[Starting FORD CODE](#-starting-ford-code) •
[Features](#-key-features) •
[600+ Commands](#-600-command-ecosystem) •
[Vehicle AI Models](#-ford-performance-vehicle-ai-showroom) •
[Architecture](#-architecture) •
[Documentation](#-documentation-library)

---

</div>

## 🏎️ Overview

**FORD CODE** is a terminal-native, autonomous AI software engineer designed to work directly in your codebase. Rather than functioning as a generic chatbot, it operates as a full-fledged CLI coding companion equipped with **614 real, hierarchical engineering commands**, an **autonomous multi-agent self-correction loop**, and an **irreversible-loss prevention safety engine**.

---

## ⚡ Starting FORD CODE

To launch the interactive coding agent from anywhere in your terminal, simply run:

```bash
ford code
```

*(You can also use `ford`, `ford start`, `ford-code`, or `ford chat`)*

```text
╭────────────────────────────────────────────────────────────────────────╮
│ Project:  my-app               Branch: main                            │
│ Files:    342                  Engine: mustang-gt                      │
│ Language: TypeScript           Commands: 614 Registered                │
╰────────────────────────────────────────────────────────────────────────╯

ford > /help
```

---

## 🚀 Quick Start

### 1. Installation

Clone and link the repository globally on your machine:

```bash
# Clone the repository
git clone https://github.com/ford-code/ford-code.git
cd ford-code

# Install dependencies and compile
npm install
npm run build

# Link globally to your system PATH
npm link
```

### 2. Verify Your Environment

Run the built-in system doctor:

```bash
ford doctor
```

```text
── [ FORD CODE SYSTEM DOCTOR & ENVIRONMENT DIAGNOSTICS ] ───────────────────────

 SYSTEM 
  ✔ Operating System     Linux / macOS / Windows
  ✔ Memory (RAM)         Available & healthy
  ✔ CPU                  Multi-core detected
  ✔ Shell                /bin/bash or zsh

 RUNTIME 
  ✔ Node.js              v18+ (Tested on v20, v22, v26)
  ✔ npm                  v9+
  ✔ Python 3             Detected
  ✔ Git                  v2.25+

 FORD AI ENGINE 
  ✔ Active Model         mustang-gt
  ✔ Active Provider      Gemini / Claude / DeepSeek / Ollama
```

### 3. Connect Your AI Engine

FORD CODE is provider-agnostic and supports local offline models as well as major cloud providers:

```bash
# Use local offline model via Ollama (Zero cloud dependencies)
ford config set provider ollama
ford config set model deepseek-coder:6.7b

# Or configure cloud engines (Gemini, Claude, Groq, OpenAI, DeepSeek)
ford config set provider deepseek
ford config set model deepseek-chat
```

---

## 🌟 Key Features

### 1. Autonomous Self-Correction Loop
When executing complex engineering tasks, FORD CODE runs a 4-stage autonomous cycle:
$$\text{Plan} \longrightarrow \text{Implement} \longrightarrow \text{Test} \longrightarrow \text{Analyze Failure} \longrightarrow \text{Fix} \longrightarrow \text{Verify}$$
If unit tests fail, the **FailureAnalyzer** pinpoints the exact file and line number from the stacktrace, synthesizes a fix patch, and verifies test passes.

### 2. Read-Before-Write Patch Engine & Instant Undo
- Files are inspected and validated before any modifications are written.
- Every change creates an atomic snapshot in `.ford/undo/`.
- Revert any modification instantly with:
  ```bash
  ford undo
  ```

### 3. 5-Tier Safety & Permission Architecture
Guards against accidental data loss and destructive operations:
- `READ_ONLY`: Blocks all file modifications.
- `SAFE_WRITE`: Allows non-destructive edits with automated undo checkpoints.
- `COMMAND_CONFIRMATION`: Prompts for non-whitelisted terminal commands.
- `DESTRUCTIVE_CONFIRMATION` *(Default)*: Strictly intercepts `rm -rf`, `git reset --hard`, `git clean -fd`, and destructive SQL queries.
- `FULLY_AUTONOMOUS`: Non-interactive automation mode for CI/CD pipelines.

### 4. Smart Repository Context Engine
Never blindsides the LLM with unnecessary files. Context is scored and ranked by:
1. Git working changes (staged and unstaged)
2. Extracted AST symbols (functions, classes, interfaces)
3. Keyword density in filenames and paths
4. Test suite relationships
5. Error locations and stacktrace pointers

### 5. Unix Pipe & Scripting Support
Pipe outputs directly into FORD CODE for analysis, code review, or debugging:

```bash
# Pipe git diff for senior code review
git diff | ford review

# Pipe runtime logs for error diagnosis
cat error.log | ford debug

# Output machine-readable JSON
ford --json project.stats
```

---

## 🏎️ Ford Performance Vehicle AI Showroom

FORD CODE packages 5 tuned vehicle model profiles:

| Vehicle Profile | Engine Spec | Velocity | Best Use Case |
| :--- | :--- | :--- | :--- |
| **Mustang GT** | 5.0L Coyote V8 (480 HP) | 180+ tok/s | Rapid streaming, quick bug fixes, terminal edits |
| **Bronco Raptor** | 3.0L EcoBoost (330 HP) | Balanced | Heavy refactoring, test suites, modular design |
| **Ford GT** | Carbon Twin-Turbo V6 (660 HP) | Deep Reasoning | Complex multi-file architecture, system redesign |
| **F-150 Raptor** | High-Output Twin-Turbo (450 HP) | 2M Token Context | Heavy payload ingestion, massive repositories |
| **Shelby GT500** | Predator Supercharged (760 HP) | Maximum Power | Zero-compromise security & performance audits |

Switch engines dynamically:
```bash
ford mustang-gt
ford bronco
ford ford-gt
ford raptor
ford shelby
```

---

## 📚 600+ Command Ecosystem

FORD CODE ships with **614 real commands and subcommands** across **34 engineering domains**:

```text
ford
├── agent         # Autonomous multi-step reasoning, planning, rollbacks, and benchmarks
├── chat          # Session transcripts, compaction, history search, and token counters
├── project       # Architecture mapping, language stats, dependency trees, and complexity
├── code          # Generation, refactoring, modernization, AST inspection, and typing
├── file          # Safe chunk patching, line replacements, checksums, and restores
├── search        # Text, regex, symbol, import, reference, and TODO/FIXME greps
├── debug         # Error stacktrace parsing, root cause analysis, and memory profiles
├── test          # Automated test execution, framework detection, and mock generation
├── build         # Multi-target compilation, bundle size budgets, and clean utilities
├── lint          # ESLint, Biome, and Prettier integration with auto-fix rules
├── git           # Branching, commits, diffs, blame, and merge conflict resolution
├── deps          # Dependency tree depth, CVE vulnerability audits, and license checks
├── docs          # OpenAPI, Markdown, JSDoc, and Architecture Decision Record (ADR) gen
├── security      # Hardcoded secret scanning, OWASP Top 10, and injection audits
├── perf          # CPU flamegraphs, memory retention leaks, and loop optimizations
├── db            # Schema design, migration scripts, mock databases, and SQL optimization
├── docker        # Hardened multi-stage Dockerfile generation and container inspection
├── ci            # GitHub Actions, GitLab CI workflows, and secret auditing
├── api           # REST/GraphQL endpoints, cURL generation, and route tables
├── env           # Environment variable validation, diffing, and secret scrubbing
├── workspace     # Multi-workspace switching, health audits, and snapshot locks
├── memory        # Persistent developer preferences and architectural conventions
├── plugin        # Community plugin manager, lifecycle hooks, and tool registration
├── mcp           # Model Context Protocol servers, resources, prompts, and tools
├── automate      # Cron automation, file triggers, and headless daemon runners
├── workflow      # Multi-step orchestration pipelines and execution templates
├── report        # Executive status, security, compliance, and coverage reports
├── export        # Session markdown, patch files, diffs, and AST JSON exports
├── create        # Project scaffolding (React 19, Next.js, FastAPI, Rust CLI, Go)
├── permissions   # 5-tier safety configuration and command whitelists
├── diff          # Colorized unified diffs, patch dry-runs, and check commands
├── undo          # Instant restoration from pre-modification snapshots
├── task          # Detached background process runner (dev servers, watchers)
└── completion    # Shell completions for Bash, Zsh, and Fish
```

📖 **[Read the Full Command Reference Manual (614 Commands)](./COMMANDS.md)**

---

## 🛠️ Multi-Agent Architecture

```text
                                 ╭───────────────────────╮
                                 │       Developer       │
                                 │     "ford code"       │
                                 ╰───────────┬───────────╯
                                             │
                                             ▼
                                 ╭───────────────────────╮
                                 │    FORD CLI Router    │
                                 ╰───────────┬───────────╯
                                             │
                      ┌──────────────────────┼──────────────────────┐
                      ▼                      ▼                      ▼
             ╭─────────────────╮   ╭─────────────────╮   ╭─────────────────╮
             │Interactive REPL │   │Command Registry │   │Autonomous Agent │
             │  (ford > prompt)│   │ (614 Commands)  │   │  Orchestrator   │
             ╰─────────────────╯   ╰────────┬────────╯   ╰────────┬────────╯
                                            │                     │
                      ┌─────────────────────┴─────────────────────┘
                      ▼
         ╭─────────────────────────╮
         │   Agent Runtime Loop    │
         │  Planner ──> Synthesizer│
         │  Test ──> Self-Correct  │
         ╰────────────┬────────────╯
                      │
     ┌────────────────┼────────────────┬────────────────┐
     ▼                ▼                ▼                ▼
╭─────────╮     ╭───────────╮    ╭───────────╮    ╭───────────╮
│Context  │     │Structured │    │Universal  │    │Permission │
│Engine & │     │Patch &    │    │Tool & MCP │    │& Safety   │
│Indexers │     │Undo Engine│    │Registry   │    │Manager    │
╰─────────╯     ╰───────────╯    ╰───────────╯    ╰───────────╯
```

---

## 📖 Documentation Library

- 📘 [Command Reference Manual (614 Commands)](./COMMANDS.md)
- ⚙️ [Configuration Guide](./CONFIGURATION.md)
- 🏗️ [System Architecture Specification](./ARCHITECTURE.md)
- 🔌 [Plugin Authoring Guide](./PLUGINS.md)
- 🌐 [Model Context Protocol (MCP) Guide](./MCP.md)
- 🛡️ [Security Policy & Safety Model](./SECURITY.md)
- 💻 [Installation Guide](./INSTALL.md)
- 🤝 [Contributing Guidelines](./CONTRIBUTING.md)

---

## 🧪 Test Suite

Run the automated test suite testing all 18 subsystems:

```bash
npm test
```

```text
TEST RESULTS: 86 PASSED | 0 FAILED
ALL 75+ SUBSYSTEM & LIFECYCLE TESTS PASSED WITH ZERO ANOMALIES
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">

**FORD CODE** — Built for developers who demand high velocity, precision, and safety.

</div>
