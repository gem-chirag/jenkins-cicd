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
                sh 'npm test'
            }
        }
        stage('Deploy') {
            script{
                sh 'nohup npm start &'
            }
        }
    }
}
