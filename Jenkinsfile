pipeline {
    stages {
        stage('Build and publish') {
            agent { 
                docker { image 'docker:dind' }
            }
            steps {
         
              echo "Empezando a buildear y subir"
              script {
                withDockerRegistry(credentialsId: 'ACLN-REGISTRY', url: 'https://index.docker.io/v1/') {
                    def customImage = docker.build("acln/cpq-front-v2:1.0.${env.BUILD_ID}");
                    customImage.push()
                }
              }
            }
        }
        stage('Build and publish') {
            agent { node { label 'master' } }
            steps {
              sh 'ls -a'
            }
        }
    }
}