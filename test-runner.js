/**
 * FORD CODE — Automated Unit & Integration Test Runner
 * Built-in verification suite for all modules
 */

import { colors } from './ui.js';
import { FORD_MODELS, getActiveModel, setActiveModel } from './models.js';
import { getFastProjectMeta, safeWriteFile, safeReadFile, safePatchFile, UndoSystem } from './filesystem.js';
import { Tools } from './tools.js';
import { PRIMARY_COMMANDS, COMMAND_DOMAINS } from './commands.js';
import { AgentEngine } from './agent.js';
import fs from 'fs';
import path from 'path';

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ${colors.success('✔')} ${name}`);
    passed++;
  } catch (err) {
    console.log(`  ${colors.error('✘')} ${name}`);
    console.log(`    ${colors.red(err.message)}`);
    failed++;
  }
}

async function runAllTests() {
  console.log(`\n${colors.accentBold('═══════════════════════ FORD CODE AUTOMATED TESTS ═══════════════════════')}\n`);

  // 1. Models & Showroom
  console.log(`${colors.cyanBold('▶ Testing Vehicle Models & Engines')}`);
  test('Should load all 6 Ford vehicle models', () => {
    if (FORD_MODELS.length !== 6) throw new Error(`Expected 6 models, found ${FORD_MODELS.length}`);
  });
  test('Should have mustang-gt as default engine', () => {
    const active = getActiveModel();
    if (active.id !== 'mustang-gt') throw new Error(`Expected mustang-gt, got ${active.id}`);
  });
  test('Should switch model dynamically', () => {
    const res = setActiveModel('f150-lightning');
    if (!res.success || getActiveModel().id !== 'f150-lightning') throw new Error('Failed to switch model');
    setActiveModel('mustang-gt'); // restore
  });

  // 2. Fast Project Inspector
  console.log(`\n${colors.cyanBold('▶ Testing Fast Filesystem Inspector')}`);
  test('Should inspect current directory under 100ms', () => {
    const t0 = Date.now();
    const meta = getFastProjectMeta();
    const elapsed = Date.now() - t0;
    if (elapsed > 100) throw new Error(`Took too long: ${elapsed}ms`);
    if (!meta.name) throw new Error('Failed to extract name');
  });

  // 3. File Operations & Undo System
  console.log(`\n${colors.cyanBold('▶ Testing Safe File & Undo Operations')}`);
  const tempFile = path.resolve(process.cwd(), '.test-tmp.txt');
  test('Should write file and record undo checkpoint', () => {
    const res = safeWriteFile(tempFile, 'Initial version 1.0\n');
    if (!res.success) throw new Error('Failed to write');
    const read = safeReadFile(tempFile);
    if (!read.content.includes('Initial version')) throw new Error('Content mismatch');
  });

  test('Should patch file contents surgically', () => {
    const patchRes = safePatchFile(tempFile, '1.0', '2.0');
    if (!patchRes.success) throw new Error('Failed to patch');
    const read = safeReadFile(tempFile);
    if (!read.content.includes('2.0')) throw new Error('Patch did not apply');
  });

  test('Should undo last modification using checkpoint', () => {
    const undoRes = UndoSystem.undo();
    if (!undoRes.success) throw new Error('Failed to undo');
    const read = safeReadFile(tempFile);
    if (!read.content.includes('1.0')) throw new Error('Undo did not restore original');
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
  });

  // 4. Command Registry
  console.log(`\n${colors.cyanBold('▶ Testing Command Registry')}`);
  test('Should index all 34 engineering domains', () => {
    if (COMMAND_DOMAINS.length !== 34) throw new Error(`Expected 34 domains, found ${COMMAND_DOMAINS.length}`);
  });
  test('Should have primary commands registered', () => {
    if (PRIMARY_COMMANDS.length < 20) throw new Error('Primary commands count too low');
  });

  // 5. Tool Execution
  console.log(`\n${colors.cyanBold('▶ Testing Tool Runner')}`);
  test('Should execute shell command safely', () => {
    const res = Tools.exec('node --version');
    if (!res.success || !res.output.includes('v')) throw new Error('Failed to run node');
  });

  // 6. Agent Engine
  console.log(`\n${colors.cyanBold('▶ Testing Autonomous Agent Engine')}`);
  test('Should generate heuristic plan for tasks', async () => {
    const agent = new AgentEngine();
    const plan = await agent.heuristicGenerate('create an express rest api', getActiveModel());
    if (!plan || !plan.includes('express')) throw new Error('Failed to generate plan');
  });

  console.log(`\n${colors.border('────────────────────────────────────────────────────────────────────────')}`);
  console.log(`  ${colors.boldText('RESULTS:')} ${colors.successBold(`${passed} PASSED`)} | ${failed > 0 ? colors.errorBold(`${failed} FAILED`) : '0 FAILED'}`);
  console.log(`${colors.border('────────────────────────────────────────────────────────────────────────')}\n`);

  if (failed > 0) process.exit(1);
}

runAllTests().catch(err => {
  console.error('Test Suite Error:', err);
  process.exit(1);
});
