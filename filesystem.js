/**
 * FORD CODE — Fast Filesystem, Project Inspector & Undo Engine
 * Sub-millisecond project metadata analysis and checkpoint recovery
 */

import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';

export function getFastProjectMeta(dir = process.cwd()) {
  const home = os.homedir();
  const isHome = path.resolve(dir) === path.resolve(home);
  const isRoot = path.resolve(dir) === '/';
  const name = path.basename(path.resolve(dir)) || 'workspace';

  let gitBranch = 'none';
  try {
    gitBranch = execSync('git branch --show-current 2>/dev/null', { timeout: 200, cwd: dir }).toString().trim() || 'main';
  } catch {
    gitBranch = 'no-git';
  }

  // Fast bypass for Home Directory or Root Directory: never perform recursive scans
  if (isHome || isRoot) {
    return {
      name,
      gitBranch,
      totalFiles: 'Workspace (~)',
      primaryLang: 'General',
      isHome: true
    };
  }

  // Bounded shallow inspection (max 60 files, depth 1)
  let totalFiles = 0;
  let extCount = {};
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'build') continue;
      if (entry.isFile()) {
        totalFiles++;
        const ext = path.extname(entry.name).toLowerCase();
        if (ext) extCount[ext] = (extCount[ext] || 0) + 1;
      }
    }
  } catch {
    // fallback gracefully
  }

  const extMap = {
    '.ts': 'TypeScript',
    '.js': 'JavaScript',
    '.py': 'Python',
    '.go': 'Go',
    '.rs': 'Rust',
    '.java': 'Java',
    '.cpp': 'C++',
    '.c': 'C',
    '.html': 'HTML',
    '.css': 'CSS',
    '.json': 'JSON',
    '.md': 'Markdown'
  };

  let maxExt = '';
  let maxCount = 0;
  for (const [ext, count] of Object.entries(extCount)) {
    if (count > maxCount) {
      maxCount = count;
      maxExt = ext;
    }
  }
  const primaryLang = extMap[maxExt] || (totalFiles > 0 ? 'Multi-Language' : 'Empty Project');

  return {
    name,
    gitBranch,
    totalFiles: `${totalFiles}+ files`,
    primaryLang,
    isHome: false
  };
}

export class UndoSystem {
  static history = [];

  static record(filePath, originalContent) {
    this.history.push({
      filePath,
      originalContent,
      timestamp: new Date()
    });
    if (this.history.length > 20) this.history.shift();
  }

  static undo() {
    if (this.history.length === 0) {
      return { success: false, message: 'No recorded file changes to undo.' };
    }
    const last = this.history.pop();
    try {
      if (last.originalContent === null) {
        if (fs.existsSync(last.filePath)) fs.unlinkSync(last.filePath);
      } else {
        fs.writeFileSync(last.filePath, last.originalContent, 'utf-8');
      }
      return { success: true, message: `Reverted ${last.filePath} to previous state.` };
    } catch (err) {
      return { success: false, message: `Undo failed: ${err.message}` };
    }
  }
}

export function safeReadFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return { success: false, error: 'File does not exist' };
    const content = fs.readFileSync(filePath, 'utf-8');
    return { success: true, content };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export function safeWriteFile(filePath, content) {
  try {
    let original = null;
    if (fs.existsSync(filePath)) {
      original = fs.readFileSync(filePath, 'utf-8');
    }
    UndoSystem.record(filePath, original);
    fs.writeFileSync(filePath, content, 'utf-8');
    return { success: true, bytes: content.length };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export function safePatchFile(filePath, searchTarget, replacement) {
  try {
    if (!fs.existsSync(filePath)) return { success: false, error: 'File does not exist' };
    const content = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes(searchTarget)) {
      return { success: false, error: 'Target pattern not found in file' };
    }
    UndoSystem.record(filePath, content);
    const updated = content.replace(searchTarget, replacement);
    fs.writeFileSync(filePath, updated, 'utf-8');
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
