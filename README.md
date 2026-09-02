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

-Member 1 — Dashboard & Frontend Development
Designed and developed the main StudySphere dashboard interface.
Implemented the student greeting, statistics cards, study progress indicators, and dashboard layout.
Worked on the overall frontend structure and user experience.
Created and managed the feature/dashboard branch.
Participated in Pull Request review and code quality checks for other team members.
-Member 2 — Task Management & JavaScript Development
Developed the Task Management module for creating, completing, deleting, and tracking study tasks.
Implemented task persistence using Local Storage.
Added dynamic task counters and interactive task functionality.
Created and managed the feature/tasks branch.
Participated in Pull Request review, testing, and validation of team contributions.
-Member 3 — Focus Timer & Study Notes
Developed the Pomodoro Focus Timer with start, reset, and countdown functionality.
Designed and implemented the Study Notes module.
Added Local Storage support to preserve notes between sessions.
Created and managed the feature/focus-notes branch.
Participated in Pull Request reviews and functional testing.
-Member 4 — UI Enhancement & DevOps
Implemented Dark Mode and improved the responsive design for desktop, tablet, and mobile devices.
Configured the project's Jenkins CI pipeline for automated build and testing workflows.
Maintained and improved project documentation through README.md.
Created and managed the feature/devops-ui branch.
Participated in Pull Request reviews, integration testing, and final quality checks.

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
