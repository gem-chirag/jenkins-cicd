pipeline {
    agent {
        docker {
            // Use Docker image with Docker CLI installed
            image 'docker:19.03.12'  // or the version you prefer
            args '-v /var/run/docker.sock:/var/run/docker.sock'  // Mount Docker socket
        }
    }
    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t jenkins-cicd .'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh 'docker run -d -p 3000:3000 --name my-app-container jenkins-cicd'
            }
        }
    }
}
