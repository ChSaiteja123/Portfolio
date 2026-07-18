pipeline {
  agent any
    tools{
        nodejs 'npm'
        
    }
  environment {
    AWS_REGION = 'us-east-1'
    ECR_REPOSITORY = 'devops-portfolio'
    IMAGE_TAG = "${env.BUILD_NUMBER}"
    K8S_NAMESPACE = 'default'
    SCANNER_HOME=tool 'sonar-scanner'
    APP_NAME = 'devops-portfolio'
    EKS_CLUSTER_NAME = 'my-eks-cluster'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main',
          url: "https://github.com/ChSaiteja123/Portfolio.git"
      }
    }
        stage("Sonarqube Analysis "){
            steps{
                withSonarQubeEnv('sonar') {
                    sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=portfolio \
                    -Dsonar.projectKey=portfolio '''
                }
            }
        }
        stage("quality gate"){
           steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'sonar' 
                }
            } 
        }
        stage('Install Dependencies') {
            steps {
                sh "npm install"
            }
        }        
        stage('TRIVY FS SCAN') {
            steps {
                sh "trivy fs . > trivyfs.txt"
            }
        }

    stage('Build App') {
      steps {
         sh 'chmod +x node_modules/.bin/vite'
        sh 'npm run build'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t ${APP_NAME}:${IMAGE_TAG} .'
      }
    }
    
    stage('Login to ECR') {
      steps {
          withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'aws-cred', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
        
          sh '''
            export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
            export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
            aws configure set region ${AWS_REGION}
            aws ecr describe-repositories --repository-names ${ECR_REPOSITORY} --region ${AWS_REGION} || aws ecr create-repository --repository-name ${ECR_REPOSITORY} --region ${AWS_REGION}
            aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin $(aws sts get-caller-identity --query Account --output text).dkr.ecr.${AWS_REGION}.amazonaws.com
          '''
        }
      }
    }

    stage('Push Image to ECR') {
      steps {
          withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'aws-cred', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]){
        sh """
          ACCOUNT_ID=\$(aws sts get-caller-identity --query Account --output text)
          ECR_URI=\${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}
          docker tag ${APP_NAME}:${IMAGE_TAG} \${ECR_URI}:${IMAGE_TAG}
          docker push \${ECR_URI}:${IMAGE_TAG}
          docker tag ${APP_NAME}:${IMAGE_TAG} \${ECR_URI}:latest
          docker push \${ECR_URI}:latest
        """
      }
      }
    }

    stage('Deploy to EKS') {
      steps {
        withCredentials([string(credentialsId: 'aws-cred')]) {
          sh """
            export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
            export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
            aws eks update-kubeconfig --name ${EKS_CLUSTER_NAME} --region ${AWS_REGION}
            ACCOUNT_ID=\$(aws sts get-caller-identity --query Account --output text)
            ECR_URI=\${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}
            sed -i "s|IMAGE_PLACEHOLDER|\${ECR_URI}:${IMAGE_TAG}|g" k8s/deployment.yaml
            kubectl apply -f k8s/deployment.yaml
            kubectl apply -f k8s/service.yaml
            kubectl rollout status deployment/${APP_NAME} -n ${K8S_NAMESPACE}
          """
        }
      }
    }
  }
}
