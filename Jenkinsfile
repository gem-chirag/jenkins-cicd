pipeline {
    agent any
    
    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build . -t jenkins-cicd'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                script {
                    sh 'docker run -d -p 3000:3000 jenkins-cicd'
                }
            }
        }
    }
}
