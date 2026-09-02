# StudySphere

StudySphere is a web-based student productivity dashboard for organizing academic work, maintaining focus, and tracking study progress in one place.

## Features

- Task management with completion tracking and local storage
- 25-minute Pomodoro focus timer
- Quick study notes saved locally in the browser
- Weekly progress and focus statistics
- Persistent dark mode
- Responsive layouts for laptop, tablet, and mobile screens

## Technologies Used

- HTML5
- CSS3 with responsive media queries
- Vanilla JavaScript
- Browser localStorage
- Jenkins Pipeline

## Team Members

- M1: Review and approve pull requests
- M4: DevOps integration, UI improvements, CI, and documentation

## Git Branching Strategy

The `main` branch contains reviewed, stable work. Each feature is developed on a named branch such as `feature/devops-ui`, then submitted as a pull request into `main`.

## Pull Request and Review Process

1. Create a feature branch from the latest `main` branch.
2. Implement and test the change, then commit it with a clear message.
3. Push the branch and open a pull request targeting `main`.
4. A different team member reviews the changes and confirms existing features still work.
5. Merge only after approval.

## Jenkins CI

The `Jenkinsfile` runs a simple CI pipeline that checks out the project, verifies the required HTML/CSS/JavaScript files, and reports a successful build and deployment stage.

## Deployment

The project is a static website and can be deployed through Jenkins to any static web host or web server. The repository's `main` branch is the source for reviewed deployment builds.
