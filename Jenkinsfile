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
    }
}
