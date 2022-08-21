pipeline {
    agent docker {
        image 'docker:dind'
    }
    stages {
        stage('Build and publish') {
            steps {
              script {
                withDockerRegistry(credentialsId: 'ACLN-REGISTRY', url: 'https://index.docker.io/v1/') {
                    def customImage = docker.build("acln/cpq-front-v2:1.0.${env.BUILD_ID}");
                    customImage.push()
                }
              }
            }
        }
    }
}