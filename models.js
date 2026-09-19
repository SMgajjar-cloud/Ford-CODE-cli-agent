/**
 * FORD CODE — Vehicle AI Models & Showroom
 * High-performance automotive-themed AI reasoning engines
 */

import { colors } from './ui.js';

export const FORD_MODELS = [
  {
    id: 'mustang-gt',
    name: 'Ford Mustang GT (5.0L V8 Engine)',
    engine: 'deepseek-chat',
    provider: 'DeepSeek V3',
    horsepower: '486 HP',
    torque: '418 lb-ft',
    context: '128K tokens',
    description: 'High-revving core coding, aggressive refactoring, and instant responses.'
  },
  {
    id: 'f150-lightning',
    name: 'Ford F-150 Lightning (Dual e-Motor)',
    engine: 'claude-3-7-sonnet',
    provider: 'Anthropic',
    horsepower: '580 HP',
    torque: '775 lb-ft',
    context: '200K tokens',
    description: 'Heavy architectural loads, massive codebases, and multi-file orchestration.'
  },
  {
    id: 'gt-supercar',
    name: 'Ford GT Supercar (3.5L EcoBoost Twin-Turbo)',
    engine: 'gpt-4o',
    provider: 'OpenAI',
    horsepower: '660 HP',
    torque: '550 lb-ft',
    context: '128K tokens',
    description: 'Maximum track velocity, multimodal diagnostics, and complex logic solving.'
  },
  {
    id: 'mach-e',
    name: 'Ford Mustang Mach-E GT (e-AWD)',
    engine: 'gemini-2.0-flash',
    provider: 'Google',
    horsepower: '480 HP',
    torque: '634 lb-ft',
    context: '1,000K tokens',
    description: 'Sub-second real-time streaming, massive documentation ingestion, and live tests.'
  },
  {
    id: 'bronco-raptor',
    name: 'Ford Bronco Raptor (High-Performance 4x4)',
    engine: 'deepseek-reasoner',
    provider: 'DeepSeek R1',
    horsepower: '418 HP',
    torque: '440 lb-ft',
    context: '64K tokens',
    description: 'Deep mathematical reasoning, complex debugging, and algorithmic problems.'
  },
  {
    id: 'explorer-ev',
    name: 'Ford Explorer EV (Zero-Emissions Local)',
    engine: 'ollama/qwen2.5-coder',
    provider: 'Ollama Local',
    horsepower: '340 HP',
    torque: '402 lb-ft',
    context: '32K tokens',
    description: '100% air-gapped privacy, zero cloud telemetry, and offline execution.'
  }
];

export let activeModel = FORD_MODELS[0];

export function getActiveModel() {
  return activeModel;
}

export function setActiveModel(id) {
  const found = FORD_MODELS.find(m => m.id === id.toLowerCase());
  if (found) {
    activeModel = found;
    return { success: true, model: found };
  }
  return { success: false, error: `Model '${id}' not found.` };
}

export function displayShowroom() {
  console.log(`\n${colors.glowText('═══════════════════════════ FORD VEHICLE SHOWROOM ═══════════════════════════')}\n`);
  for (const model of FORD_MODELS) {
    const isCurrent = model.id === activeModel.id;
    const marker = isCurrent ? colors.successBold(' [ACTIVE] ') : '          ';
    console.log(`${marker}${colors.accentBold(model.name)}`);
    console.log(`          ${colors.dim('ID:')} ${colors.cyan(model.id)}  ${colors.dim('Power:')} ${colors.yellow(model.horsepower)}  ${colors.dim('Context:')} ${colors.white(model.context)}`);
    console.log(`          ${colors.dim(model.description)}\n`);
  }
  console.log(`${colors.dim('To switch active engine, run:')} ${colors.accentBold('/model <model-id>')}\n`);
}
