/**
 * FORD CODE — Web Companion Dashboard Server
 * Local embedded browser UI companion on port 3456
 */

import http from 'http';
import { colors } from './ui.js';
import { getFastProjectMeta } from './filesystem.js';
import { getActiveModel } from './models.js';

export function launchWebDashboard(port = 3456) {
  const meta = getFastProjectMeta();
  const model = getActiveModel();

  const server = http.createServer((req, res) => {
    if (req.url === '/api/status') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ meta, activeModel: model }));
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>FORD CODE — Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root { --bg: #07090e; --card: #0e121b; --border: #1a2336; --accent: #0088ff; --text: #e2e8f0; }
    body { background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace; margin: 0; padding: 2rem; }
    .header { border-bottom: 1px solid var(--border); padding-bottom: 1rem; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; }
    h1 { margin: 0; color: #fff; display: flex; align-items: center; gap: 10px; }
    .badge { background: #0088ff22; color: var(--accent); padding: 4px 10px; border-radius: 4px; font-size: 0.85rem; border: 1px solid var(--accent); }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
    .card { background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem; }
    .card h3 { margin-top: 0; color: var(--accent); font-size: 1rem; text-transform: uppercase; letter-spacing: 0.5px; }
    .stat { font-size: 1.8rem; font-weight: bold; margin: 0.5rem 0; color: #fff; }
    .terminal { background: #040508; border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem; font-family: monospace; color: #38bdf8; margin-top: 2rem; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🏎️ FORD CODE <span class="badge">v1.0.0</span></h1>
    <div>Interactive AI Coding Terminal Companion</div>
  </div>
  <div class="grid">
    <div class="card">
      <h3>Active Project</h3>
      <div class="stat">${meta.name}</div>
      <div>Branch: <strong>${meta.gitBranch}</strong></div>
    </div>
    <div class="card">
      <h3>Vehicle Engine</h3>
      <div class="stat">${model.name.split(' ')[1] || 'Mustang'}</div>
      <div>${model.horsepower} • ${model.context}</div>
    </div>
    <div class="card">
      <h3>Command Catalog</h3>
      <div class="stat">614</div>
      <div>Specialized Commands Across 34 Domains</div>
    </div>
  </div>
  <div class="terminal">
    <strong>FORD CODE RUNTIME ACTIVE</strong><br>
    Workspace: ${process.cwd()}<br>
    Terminal Command: <code>ford code</code><br>
    Status: All systems operational.
  </div>
</body>
</html>`);
  });

  server.listen(port, () => {
    console.log(`\n${colors.successBold('✔ FORD CODE Web Dashboard active on:')} ${colors.cyanBold(`http://localhost:${port}`)}\n`);
  });
}
