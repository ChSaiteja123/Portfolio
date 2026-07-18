pipeline {
  agent any

  environment {
    AWS_REGION = 'us-east-1'
    ECR_REPOSITORY = 'devops-portfolio'
    IMAGE_TAG = "${env.BUILD_NUMBER}"
    K8S_NAMESPACE = 'default'
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

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build App') {
      steps {
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
        withCredentials([string(credentialsId: 'aws-access-key-id', variable: 'AWS_ACCESS_KEY_ID'), string(credentialsId: 'aws-secret-access-key', variable: 'AWS_SECRET_ACCESS_KEY')]) {
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

    stage('Deploy to EKS') {
      steps {
        withCredentials([string(credentialsId: 'aws-access-key-id', variable: 'AWS_ACCESS_KEY_ID'), string(credentialsId: 'aws-secret-access-key', variable: 'AWS_SECRET_ACCESS_KEY')]) {
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
