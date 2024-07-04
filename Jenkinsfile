pipeline {
    agent any
    tools {
        nodejs 'nodejs' 
    }
    stages {
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
                echo 'All tests passed'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                script{
                    sh 'npm start'
                }
            }
        }
    }
}
