# Contributing Guidelines

Thank you for considering contributing to the Proposal Website project! Contributions are welcome from everyone.

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md). Please report any unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to see if the issue has already been reported.

When filing a bug report:
* Use a clear and descriptive title.
* Describe the exact steps to reproduce the problem.
* Provide details about your environment (operating system, browser, screen resolution).
* Include screenshots or screen recordings if applicable.

### Suggesting Enhancements

Feature suggestions are always appreciated:
* Use a clear and descriptive title.
* Provide a step-by-step description of the suggested enhancement.
* Explain why this enhancement would be useful to other users.

### Pull Requests

1. **Fork the repository** and clone your fork locally.
2. **Create a topic branch** from the `main` branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Make your changes** and test thoroughly locally:
   ```bash
   npm run dev
   npm run build
   ```
5. **Commit your changes** with clear, descriptive commit messages.
6. **Push to your fork** and submit a Pull Request to the `main` branch.

## Development Guidelines

* Keep styling consistent with the existing Tailwind CSS configuration.
* Ensure animations perform smoothly and do not cause jank or layout shifts.
* Maintain clean TypeScript code without unresolved type errors.
* Respect accessibility guidelines and test for responsive behavior across screen sizes.
