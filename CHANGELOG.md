# Changelog

All notable changes to **FORD CODE** are documented in this file.

## [1.0.0] - 2026-09-19

### Highlights
- **Sub-Second Booting Optimization**: Replaced recursive disk scanner with bounded inspector. Cold startup reduced from 40-50 minutes to under 0.1 seconds.
- **Zero-Folder Architecture**: Modularized into clean, flat files in the project root with 0 subdirectories for direct drag-and-drop GitHub uploading.
- **614 Real Commands**: Complete command catalog across 34 engineering domains.
- **Automotive Showroom**: 6 selectable vehicle AI reasoning engines (Mustang GT, F-150 Lightning, GT Supercar, Mach-E GT, Bronco Raptor, Explorer EV).
- **Autonomous ReAct Loop**: Decomposes tasks into [Think], [Tool Action], and [Verification].
- **Undo Engine**: Checkpoint recovery system allowing instant rollback with `/undo`.
- **System Doctor**: Built-in environment, runtime, and toolchain validator (`ford doctor`).
- **Web Companion GUI**: Embedded browser dashboard on `http://localhost:3456` (`ford web`).
