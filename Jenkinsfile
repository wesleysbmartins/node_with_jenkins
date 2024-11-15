pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
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
                tool name: 'Node Version', type: 'nodejs'
                sh 'npm cache clean --force && npm install'
            }
        }
    }
}
