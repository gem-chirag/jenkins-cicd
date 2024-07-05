pipeline {
    agent any

    environment {
        DOCKER_HOST = "unix:///var/run/docker.sock"  // Set Docker socket path
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    dockerImage = docker.build('jenkins-cicd')  // Tag the image
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                script {
                    dockerImage.inside {
                        // Commands to run inside the container
                        sh 'docker run -d -p 3000:3000 --name my-app-container jenkins-cicd'
                    }
                }
            }
        }
    }
}
