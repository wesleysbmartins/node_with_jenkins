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

        stage('Deploy') {
            steps {
                echo 'Deploy step would go here'
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
