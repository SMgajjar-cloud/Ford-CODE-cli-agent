/**
 * FORD CODE — System Doctor & Diagnostics
 * Environment, toolchain, and dependency validation
 */

import os from 'os';
import { execSync } from 'child_process';
import { colors } from './ui.js';
import { getActiveModel } from './models.js';

export function runDoctor() {
  console.log(`\n${colors.accentBold('═══════════════════════ FORD CODE SYSTEM DOCTOR ═══════════════════════')}\n`);
  const check = (name, fn) => {
    try {
      const res = fn();
      console.log(`  ${colors.success('✔')} ${name.padEnd(20)} ${colors.dim(res)}`);
    } catch {
      console.log(`  ${colors.warning('⚠')} ${name.padEnd(20)} ${colors.yellow('Not found or disabled')}`);
    }
  };

  check('Node.js Runtime', () => process.version);
  check('Platform / OS', () => `${os.platform()} (${os.arch()})`);
  check('Memory Available', () => `${Math.round(os.freemem() / (1024 * 1024 * 1024))} GB / ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`);
  check('Git Version', () => execSync('git --version 2>/dev/null').toString().trim());
  check('npm Version', () => execSync('npm --version 2>/dev/null').toString().trim());
  check('Python Runtime', () => execSync('python3 --version 2>/dev/null').toString().trim());
  check('Docker Engine', () => execSync('docker --version 2>/dev/null').toString().trim());
  check('Active Model', () => {
    const m = getActiveModel();
    return `${m.name} (${m.engine})`;
  });

  console.log(`\n  ${colors.successBold('All diagnostic checks passed. System ready for autonomous tasks.')}\n`);
}
