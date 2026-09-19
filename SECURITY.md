# Security Policy & Permission Tiers

## Security Model

FORD CODE incorporates proactive safety checks to protect codebases against accidental data loss and untrusted code execution:

1. **Undo Snapshots**: Any file edited or written by FORD CODE has its previous state automatically recorded in memory. You can instantly revert the change using the `/undo` slash command.
2. **Path Traversal Protection**: File operations are scoped to the current working workspace directory.
3. **No Hidden Telemetry**: FORD CODE does not phone home, track usage, or upload files to third-party telemetry servers.
4. **Environment Protection**: Secrets like API keys are kept in memory and never logged to stdout or saved in git diffs.

## Reporting Vulnerabilities

If you discover a security vulnerability within FORD CODE, please do not file a public issue. Instead, report it confidentially via GitHub Security Advisories or by contacting the repository maintainers.
