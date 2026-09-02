pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out StudySphere...'
            }
        }

        stage('Build') {
            steps {
                echo 'Building StudySphere...'
                bat 'if not exist index.html exit /b 1'
                bat 'if not exist style.css exit /b 1'
                bat 'if not exist script.js exit /b 1'
            }
        }

        stage('Test') {
            steps {
                echo 'Running StudySphere checks...'
                bat 'if not exist README.md exit /b 1'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment successful!'
            }
        }
    }
}
