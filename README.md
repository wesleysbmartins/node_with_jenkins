# NodeJs with Jekins [![My Skills](https://skillicons.dev/icons?i=nodejs,jest,docker,github,jenkins)](https://skillicons.dev)
Este é um projeto de estudos onde a ideia é implementar uma esteira de CI/CD usando Jenkins, uma ferramenta de automação extremamente poderosa e conhecida no mercado.

Temos uma aplicação simples, que é um servidor REST que recebe requisições e as retorna um resultado de sucesso. Com a implementação de testes usando Jest e o encapsulamento da aplicação em um container do Docker.

A ideia é que a cada merge na minha branch master a Pipeline seja executada, onde eu uso o GitHub Webhook para disparar uma request ao meu servidor do Jenkins e ele é resposável por iniciar a Pipeline, onde a esteira de CI/CD do Jenkins realiza a validação da versão, executa os testes e em caso de sucesso uma nova versão é colocada em produção.

Explore o meu **Jenkinsfile** para entender na prática o que esta sendo executado na minha pipeline.

```groovy
pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

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
```