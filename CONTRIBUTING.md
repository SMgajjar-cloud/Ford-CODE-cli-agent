# Contributing to FORD CODE

Thank you for your interest in contributing to **FORD CODE**!

## Development Guidelines

1. **Flat Architecture Requirement**:
   - To maintain instant portability and ensure GitHub web uploader compatibility, all core modules must remain directly in the project root without nested folders.
2. **Zero-Dependency Core**:
   - The core runtime must only use standard Node.js built-ins (`fs`, `path`, `readline`, `child_process`, `os`, `http`, `crypto`, `events`, `util`).
   - Do not introduce heavy npm dependencies that bloat cold startup time beyond 0.1 seconds.
3. **Verification**:
   - Run the automated test suite before opening a PR:
     ```bash
     node test-runner.js
     ```

## Submitting Pull Requests

1. Fork the repository on GitHub.
2. Create a feature branch: `git checkout -b feature/my-new-feature`.
3. Verify all tests pass: `node test-runner.js`.
4. Commit your changes: `git commit -m 'feat: add support for new feature'`.
5. Push to the branch: `git push origin feature/my-new-feature`.
6. Open a Pull Request.
