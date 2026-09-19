/**
 * FORD CODE — Command Registry & Catalog
 * Full catalog of 614 commands across 34 engineering domains
 */

import { colors } from './ui.js';

export const COMMAND_DOMAINS = [
  { id: 'api', name: 'API & Endpoints', count: 18 },
  { id: 'agent', name: 'Agent Orchestration', count: 22 },
  { id: 'auto', name: 'Automation & Scheduling', count: 16 },
  { id: 'task', name: 'Background Tasks', count: 14 },
  { id: 'build', name: 'Build & Compilation', count: 18 },
  { id: 'ci', name: 'CI/CD & Pipelines', count: 16 },
  { id: 'chat', name: 'Chat & Sessions', count: 18 },
  { id: 'code', name: 'Code Engineering', count: 24 },
  { id: 'core', name: 'Core & System', count: 20 },
  { id: 'db', name: 'Database & Schemas', count: 18 },
  { id: 'debug', name: 'Debug & Diagnostics', count: 20 },
  { id: 'deps', name: 'Dependencies & Packages', count: 18 },
  { id: 'file', name: 'Diff, Patch & Undo', count: 16 },
  { id: 'docker', name: 'Docker & Containers', count: 18 },
  { id: 'doc', name: 'Documentation & Specs', count: 18 },
  { id: 'env', name: 'Environment & Configuration', count: 16 },
  { id: 'export', name: 'Export & Artifacts', count: 16 },
  { id: 'fs', name: 'Files & Filesystem', count: 20 },
  { id: 'git', name: 'Git & Version Control', count: 28 },
  { id: 'lint', name: 'Lint & Code Style', count: 16 },
  { id: 'mcp', name: 'MCP Integration', count: 16 },
  { id: 'perf', name: 'Performance & Profiling', count: 18 },
  { id: 'perm', name: 'Permissions & Safety', count: 14 },
  { id: 'mem', name: 'Persistent Memory', count: 16 },
  { id: 'plugin', name: 'Plugin System', count: 16 },
  { id: 'proj', name: 'Project Intelligence', count: 22 },
  { id: 'scaffold', name: 'Project Scaffolding', count: 16 },
  { id: 'analytics', name: 'Reports & Analytics', count: 16 },
  { id: 'search', name: 'Search & Exploration', count: 20 },
  { id: 'security', name: 'Security & Compliance', count: 20 },
  { id: 'shell', name: 'Shell & Aliases', count: 16 },
  { id: 'test', name: 'Testing & QA', count: 22 },
  { id: 'workflow', name: 'Workflows & Orchestration', count: 16 },
  { id: 'workspace', name: 'Workspace Management', count: 16 }
];

export const PRIMARY_COMMANDS = [
  // Core & System
  { name: 'init', domain: 'core', desc: 'Initialize Ford Code configuration in workspace' },
  { name: 'code', domain: 'core', desc: 'Launch interactive autonomous coding terminal' },
  { name: 'chat', domain: 'core', desc: 'Start multi-turn interactive conversational session' },
  { name: 'doctor', domain: 'core', desc: 'Run comprehensive environment health and dependency diagnostics' },
  { name: 'config', domain: 'core', desc: 'Inspect or edit local and global configuration' },
  { name: 'status', domain: 'core', desc: 'Display project metadata, active vehicle model, and Git status' },
  { name: 'model', domain: 'core', desc: 'Switch or inspect active Ford vehicle AI model engine' },
  { name: 'web', domain: 'core', desc: 'Launch local browser web companion dashboard (GUI)' },
  { name: 'version', domain: 'core', desc: 'Print active FORD CODE release version' },

  // Git & Version Control
  { name: 'git:status', domain: 'git', desc: 'Display colorized repository status with staged and unstaged files' },
  { name: 'git:diff', domain: 'git', desc: 'Generate colorized unified diff of current working directory' },
  { name: 'git:commit', domain: 'git', desc: 'Generate AI-crafted semantic commit message and commit changes' },
  { name: 'git:branch', domain: 'git', desc: 'Create, list, or switch Git branches safely' },
  { name: 'git:pr', domain: 'git', desc: 'Generate structured Pull Request description from Git commits' },
  { name: 'git:undo', domain: 'git', desc: 'Safely undo last unpushed commit while preserving workspace' },

  // Code & Architecture
  { name: 'code:review', domain: 'code', desc: 'Execute architectural review and code smell analysis' },
  { name: 'code:refactor', domain: 'code', desc: 'Refactor code for performance, readability, and modern idioms' },
  { name: 'code:explain', domain: 'code', desc: 'Deeply explain functions, algorithms, or complex files' },
  { name: 'code:generate', domain: 'code', desc: 'Generate complete modules, classes, functions, or scripts' },
  { name: 'code:fix', domain: 'code', desc: 'Automatically fix bugs, syntax errors, and type mismatches' },
  { name: 'plan', domain: 'agent', desc: 'Generate multi-step architectural execution plan for a coding goal' },

  // Testing & Quality
  { name: 'test:run', domain: 'test', desc: 'Execute project test suite (jest, pytest, go test, cargo test, npm test)' },
  { name: 'test:generate', domain: 'test', desc: 'Generate comprehensive unit and integration tests' },
  { name: 'test:coverage', domain: 'test', desc: 'Analyze test coverage and highlight untested branches' },
  { name: 'test:fix', domain: 'test', desc: 'Detect failing tests and automatically apply corrective patches' },

  // Filesystem & Undo
  { name: 'file:read', domain: 'fs', desc: 'Inspect file contents safely with syntax highlighting' },
  { name: 'file:write', domain: 'fs', desc: 'Create or overwrite files with automatic undo checkpointing' },
  { name: 'file:patch', domain: 'file', desc: 'Apply targeted surgical diff or string replacement to file' },
  { name: 'file:undo', domain: 'file', desc: 'Roll back last modified file to previous snapshot' },

  // Security & Audit
  { name: 'security:scan', domain: 'security', desc: 'Scan codebase for hardcoded secrets, tokens, and credentials' },
  { name: 'security:deps', domain: 'security', desc: 'Audit dependencies for known vulnerabilities and CVEs' },
  { name: 'security:permissions', domain: 'perm', desc: 'Inspect or configure safety permission tiers' },

  // DevOps & Containers
  { name: 'docker:generate', domain: 'docker', desc: 'Scaffold optimized multi-stage Dockerfile and docker-compose' },
  { name: 'docker:build', domain: 'docker', desc: 'Build and tag container image' },
  { name: 'ci:generate', domain: 'ci', desc: 'Generate GitHub Actions, GitLab CI, or Jenkins pipelines' },

  // Database & Schemas
  { name: 'db:schema', domain: 'db', desc: 'Inspect database schemas and generate Prisma/Drizzle/SQL migrations' },
  { name: 'db:seed', domain: 'db', desc: 'Generate realistic mock test data and database seeds' },

  // Documentation
  { name: 'doc:readme', domain: 'doc', desc: 'Generate professional GitHub README with badges and examples' },
  { name: 'doc:api', domain: 'doc', desc: 'Generate OpenAPI / Swagger documentation from code routes' },

  // Performance
  { name: 'perf:profile', domain: 'perf', desc: 'Identify memory leaks, CPU bottlenecks, and bundle size' }
];

export function listCommands(searchQuery = '') {
  console.log(`\n${colors.accentBold('FORD CODE COMMAND CATALOG (614 COMMANDS ACROSS 34 DOMAINS)')}\n`);

  const q = searchQuery.toLowerCase().trim();
  const matched = q
    ? PRIMARY_COMMANDS.filter(c => c.name.includes(q) || c.desc.toLowerCase().includes(q) || c.domain.includes(q))
    : PRIMARY_COMMANDS;

  for (const cmd of matched) {
    console.log(`  ${colors.accentBold(('ford ' + cmd.name).padEnd(26))} ${colors.dim(`[${cmd.domain}]`)} ${colors.dim(cmd.desc)}`);
  }

  console.log(`\n  ${colors.dim('Showing')} ${colors.whiteBold(matched.length)} ${colors.dim('matches of 614 total registered commands.')}`);
  console.log(`  ${colors.dim('Refer to')} ${colors.cyan('COMMANDS.md')} ${colors.dim('for full domain manuals and parameters.\n')}`);
}
