#!/usr/bin/env node

/**
 * FORD CODE — Autonomous Terminal Coding Agent
 * High-performance, zero-dependency, instant-startup CLI coding agent.
 */

import readline from 'readline';
import { colors, getFordLogo } from './ui.js';
import { getActiveModel, setActiveModel, displayShowroom, FORD_MODELS } from './models.js';
import { getFastProjectMeta, UndoSystem } from './filesystem.js';
import { Tools } from './tools.js';
import { runDoctor } from './doctor.js';
import { launchWebDashboard } from './server.js';
import { listCommands, PRIMARY_COMMANDS } from './commands.js';
import { AgentEngine } from './agent.js';

export async function launchInteractive(workspaceDir = process.cwd()) {
  const meta = getFastProjectMeta(workspaceDir);
  const agent = new AgentEngine(workspaceDir);
  const activeVehicle = getActiveModel();

  console.log(getFordLogo());
  console.log(colors.glowText('  FORD CODE — AUTONOMOUS TERMINAL CODING AGENT'));
  console.log(colors.dim('  Equipped with 614 specialized engineering commands and instant response.\n'));

  // Status Box
  console.log(colors.border(`╭────────────────────────────────────────────────────────────────────────╮`));
  console.log(colors.border(`│ `) + `${colors.dim('Project:  ')} ${colors.white(meta.name.padEnd(20))} ${colors.dim('Branch: ')} ${colors.cyan(meta.gitBranch.padEnd(25))}` + colors.border(`│`));
  console.log(colors.border(`│ `) + `${colors.dim('Files:    ')} ${colors.white(meta.totalFiles.padEnd(20))} ${colors.dim('Engine: ')} ${colors.accent(activeVehicle.id.padEnd(25))}` + colors.border(`│`));
  console.log(colors.border(`│ `) + `${colors.dim('Language: ')} ${colors.white(meta.primaryLang.padEnd(20))} ${colors.dim('Commands: ')} ${colors.glowText('614 Registered'.padEnd(23))}` + colors.border(`│`));
  console.log(colors.border(`╰────────────────────────────────────────────────────────────────────────╯\n`));

  console.log(colors.dim('Type natural language tasks, slash commands (e.g. /help, /commands, /diff, /test, /undo), or "exit".\n'));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: colors.accentBold('ford > ')
  });

  rl.prompt();

  for await (const line of rl) {
    const input = line.trim();

    if (!input) {
      rl.prompt();
      continue;
    }

    if (input === 'exit' || input === 'quit' || input === '/exit' || input === '/quit') {
      console.log(colors.dim('\nExiting FORD CODE. Drive safe!\n'));
      rl.close();
      return;
    }

    // Slash Commands
    if (input.startsWith('/')) {
      const parts = input.slice(1).split(/\s+/);
      const cmd = parts[0].toLowerCase();
      const arg = parts.slice(1).join(' ');

      switch (cmd) {
        case 'help':
          console.log(`\n${colors.accentBold('SLASH COMMANDS GUIDE')}`);
          console.log('  /help            Show this command guide');
          console.log('  /commands [q]    Search all 614 specialized engineering commands');
          console.log('  /model [id]      Show Ford vehicle showroom or switch active engine');
          console.log('  /status          Display diagnostic status dashboard');
          console.log('  /plan <task>     Generate multi-step architectural execution plan');
          console.log('  /diff            Display colorized unified git diff of working changes');
          console.log('  /test [file]     Run project automated test suite');
          console.log('  /undo            Revert last file modification using checkpoint');
          console.log('  /doctor          Run toolchain and environment diagnostics');
          console.log('  /web             Launch local companion web dashboard (GUI)');
          console.log('  /clear           Clear terminal screen');
          console.log('  /exit            Exit interactive terminal\n');
          break;

        case 'commands':
          listCommands(arg);
          break;

        case 'model':
          if (arg) {
            const res = setActiveModel(arg);
            if (res.success) {
              console.log(`\n${colors.successBold('✔ Switched to engine:')} ${colors.accentBold(res.model.name)}\n`);
            } else {
              console.log(`\n${colors.errorBold('Unknown model:')} ${arg}. Run /model to view options.\n`);
            }
          } else {
            displayShowroom();
          }
          break;

        case 'status':
          const curMeta = getFastProjectMeta(workspaceDir);
          const curModel = getActiveModel();
          console.log(`\n${colors.accentBold('WORKSPACE STATUS')}`);
          console.log(`  Project:  ${curMeta.name}`);
          console.log(`  Branch:   ${curMeta.gitBranch}`);
          console.log(`  Files:    ${curMeta.totalFiles}`);
          console.log(`  Language: ${curMeta.primaryLang}`);
          console.log(`  Engine:   ${curModel.name} (${curModel.horsepower})\n`);
          break;

        case 'plan':
          if (!arg) {
            console.log(colors.warning('\nPlease specify a task: /plan <task description>\n'));
          } else {
            console.log(`\n${colors.glowText('ARCHITECTURAL PLAN')}: ${arg}`);
            console.log(`1. [DISCOVERY] Inspect project structure and existing conventions.`);
            console.log(`2. [DESIGN] Create modular interfaces with strict type validation.`);
            console.log(`3. [IMPLEMENT] Apply surgical code changes and save checkpoints.`);
            console.log(`4. [VERIFY] Run unit tests and static validation.\n`);
          }
          break;

        case 'diff':
          const diffRes = Tools.getGitDiff(workspaceDir);
          if (diffRes.diff) {
            console.log(`\n${colors.cyanBold('UNIFIED GIT DIFF:')}\n${diffRes.diff}\n`);
          } else {
            console.log(colors.dim('\nNo unstaged git changes detected in workspace.\n'));
          }
          break;

        case 'test':
          Tools.runTests(workspaceDir);
          break;

        case 'undo':
          const undoRes = UndoSystem.undo();
          if (undoRes.success) {
            console.log(`\n${colors.successBold('✔ ' + undoRes.message)}\n`);
          } else {
            console.log(`\n${colors.warningBold('⚠ ' + undoRes.message)}\n`);
          }
          break;

        case 'doctor':
          runDoctor();
          break;

        case 'web':
          launchWebDashboard();
          break;

        case 'clear':
          console.clear();
          console.log(getFordLogo());
          break;

        default:
          console.log(colors.warning(`\nUnknown command: /${cmd}. Type /help for options.\n`));
      }

      rl.prompt();
      continue;
    }

    // Natural Language Agent Tasks
    await agent.runTask(input);
    rl.prompt();
  }
}

async function main() {
  const args = process.argv.slice(2);
  const cmd = args[0] ? args[0].toLowerCase() : '';

  // "ford code", "ford start", "ford chat", or naked "ford" launches interactive agent mode
  if (!cmd || cmd === 'code' || cmd === 'start' || cmd === 'chat' || cmd === 'interactive') {
    await launchInteractive();
    return;
  }

  // Quick CLI Flags
  if (cmd === '-v' || cmd === '--version' || cmd === 'version') {
    console.log('FORD CODE v1.0.0 (High-Performance Engine)');
    return;
  }

  if (cmd === '-h' || cmd === '--help' || cmd === 'help') {
    console.log(getFordLogo());
    console.log(`Usage: ford [command] [options]\n`);
    console.log(`Commands:`);
    console.log(`  ford code         Launch interactive autonomous coding terminal (instant startup)`);
    console.log(`  ford chat         Start interactive chat session`);
    console.log(`  ford doctor       Run environment and toolchain diagnostics`);
    console.log(`  ford status       Display workspace and model status`);
    console.log(`  ford model        View vehicle showroom and switch engines`);
    console.log(`  ford web          Launch local web dashboard companion`);
    console.log(`  ford <task...>    Execute autonomous coding task directly\n`);
    return;
  }

  if (cmd === 'doctor') {
    runDoctor();
    return;
  }

  if (cmd === 'model') {
    if (args[1]) {
      const res = setActiveModel(args[1]);
      if (res.success) {
        console.log(`${colors.successBold('✔ Switched to engine:')} ${colors.accentBold(res.model.name)}`);
      } else {
        console.log(`${colors.errorBold('Unknown model:')} ${args[1]}`);
      }
    } else {
      displayShowroom();
    }
    return;
  }

  if (cmd === 'commands') {
    listCommands(args.slice(1).join(' '));
    return;
  }

  if (cmd === 'status') {
    const meta = getFastProjectMeta();
    const model = getActiveModel();
    console.log(`Project:  ${meta.name}`);
    console.log(`Branch:   ${meta.gitBranch}`);
    console.log(`Engine:   ${model.name}`);
    return;
  }

  if (cmd === 'web' || cmd === 'gui') {
    launchWebDashboard(parseInt(args[1]) || 3456);
    return;
  }

  // If command is a natural language task (e.g. "ford create an express app")
  const task = args.join(' ');
  const agent = new AgentEngine();
  await agent.runTask(task);
}

main().catch(err => {
  console.error(colors.errorBold('FATAL ERROR:'), err);
  process.exit(1);
});
