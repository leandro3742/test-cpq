pipeline {
    agent none
    stages {
        stage('Build and publish') {
            agent { docker { image 'docker:dind' } }
            steps {
              script {
                withDockerRegistry(credentialsId: 'ACLN-REGISTRY', url: 'https://index.docker.io/v1/') {
                    def customImage = docker.build("acln/cpq-front-v2:1.0.${env.BUILD_ID}","-e CPQ-FRONT-IMAGE");
                    customImage.push();
                }
              }
            }
        }
        stage('K8S deployment') {
            agent { node { label 'master' } }
            environment {
                MY_KUBECONFIG = credentials('KUBE-CONFIG')
            }
            steps {
               echo "CHANGE FILE"
               sh "sed -i 's/<TAG>/${env.BUILD_ID}/' ./k8s/deployment.yml"
               sh 'cat $(pwd)/k8s/deployment.yml'
            //    sh "$HOME/bin/kubectl --kubeconfig $MY_KUBECONFIG apply -f ./k8s"
            }
        }
    }
}