pipeline {
    agent any
    tools {
        nodejs 'nodejs' // Use the name configured in Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Kill any existing node process
                    sh 'kill $(netstat -tuln | grep :3000) || true'
                    // Run the application in the background
                    sh 'nohup npm start &'
                }
            }
        }
    }
}
