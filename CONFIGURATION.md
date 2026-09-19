# FORD CODE — Configuration Guide

## Overview

FORD CODE operates completely out-of-the-box with **zero configuration required** in local/heuristic mode. You can optionally connect cloud AI engines or local Ollama models.

---

## 1. Supported AI Engines & Vehicle Models

| Model ID | Vehicle Name | Default Engine | Context Window | Best Suited For |
| :--- | :--- | :--- | :--- | :--- |
| `mustang-gt` *(default)* | Ford Mustang GT | `deepseek-chat` | 128K tokens | Fast daily coding, refactoring, tests |
| `f150-lightning` | Ford F-150 Lightning | `claude-3-7-sonnet` | 200K tokens | Architectural refactors, large files |
| `gt-supercar` | Ford GT Supercar | `gpt-4o` | 128K tokens | Complex algorithmic problem solving |
| `mach-e` | Ford Mustang Mach-E GT | `gemini-2.0-flash` | 1,000K tokens | Large codebase ingestion, multimodal |
| `bronco-raptor` | Ford Bronco Raptor | `deepseek-reasoner` | 64K tokens | Deep mathematical reasoning & logic |
| `explorer-ev` | Ford Explorer EV | `ollama/qwen2.5` | 32K tokens | 100% offline edge privacy |

To switch models in the terminal:
```bash
ford model <model-id>
# Or inside interactive mode:
/model <model-id>
```

---

## 2. Environment Variables

Create an `.env` file or export variables in your shell profile (`~/.bashrc` or `~/.zshrc`):

```bash
# DeepSeek (Default Mustang GT & Bronco Raptor)
export DEEPSEEK_API_KEY="your-deepseek-api-key"

# OpenAI (GT Supercar)
export OPENAI_API_KEY="your-openai-api-key"

# Anthropic (F-150 Lightning)
export ANTHROPIC_API_KEY="your-anthropic-api-key"

# Google Gemini (Mustang Mach-E GT)
export GEMINI_API_KEY="your-gemini-api-key"

# Web Companion Port
export FORD_WEB_PORT=3456
```

---

## 3. Offline Mode

If no API keys are detected, FORD CODE operates in **Offline / Local Mode** using its built-in code generators, template engines, and toolchain automations with zero internet connection required.
