/**
 * FORD CODE — Tool Suite & Process Execution Engine
 * Safe command execution, Git integration, and test automation
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { colors } from './ui.js';

export class Tools {
  static exec(cmd, cwd = process.cwd()) {
    try {
      const output = execSync(cmd, { cwd, timeout: 30000, stdio: ['pipe', 'pipe', 'pipe'] }).toString();
      return { success: true, output };
    } catch (err) {
      return {
        success: false,
        output: err.stdout ? err.stdout.toString() : '',
        error: err.stderr ? err.stderr.toString() : err.message
      };
    }
  }

  static getGitDiff(cwd = process.cwd()) {
    try {
      const diff = execSync('git diff 2>/dev/null', { cwd }).toString();
      return { success: true, diff };
    } catch {
      return { success: false, diff: '' };
    }
  }

  static getGitStatus(cwd = process.cwd()) {
    try {
      const status = execSync('git status --short 2>/dev/null', { cwd }).toString();
      return { success: true, status };
    } catch {
      return { success: false, status: '' };
    }
  }

  static runTests(cwd = process.cwd()) {
    let testCmd = 'npm test';
    if (fs.existsSync(path.join(cwd, 'pytest.ini')) || fs.existsSync(path.join(cwd, 'tests'))) {
      testCmd = 'pytest';
    } else if (fs.existsSync(path.join(cwd, 'Cargo.toml'))) {
      testCmd = 'cargo test';
    } else if (fs.existsSync(path.join(cwd, 'go.mod'))) {
      testCmd = 'go test ./...';
    }

    console.log(`\n${colors.accent('Running tests with:')} ${colors.boldText(testCmd)}\n`);
    try {
      execSync(testCmd, { stdio: 'inherit', cwd });
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }
}
