pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Init') {
            steps {
               echo "Hello World!"
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/wesleysbmartins/node_with_jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {

            steps {
                script {
                    def imageName = 'node_with_jenkins:latest'
                    echo "Building Docker image: ${imageName}"
                    bat "docker build -t ${imageName} ."
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def containerName = 'node_with_jenkins_container'
                    def imageName = 'node_with_jenkins:latest'

                    echo "Stopping and removing existing container, if any"
                    bat "docker stop ${containerName} || echo 'No container to stop'"
                    bat "docker rm ${containerName} || echo 'No container to remove'"

                    echo "Deploying new container"
                    bat "docker run -d --name ${containerName} -p 5050:5050 ${imageName}"
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
