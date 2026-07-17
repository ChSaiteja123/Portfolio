# Deployment Guide

This project can be deployed in multiple ways:

- Local container run with Docker
- Jenkins pipeline deployment to AWS EKS
- Kubernetes manifests deployment
- Helm chart deployment
- GitHub Actions deployment to AWS EKS

## 1. Docker Deployment

### Build image

```bash
docker build -t devops-portfolio .
```

### Run container

```bash
docker run -p 80:80 devops-portfolio
```

Open: http://localhost

---

## 2. Jenkins Deployment to AWS EKS

### Prerequisites

- Jenkins installed and running
- Docker available on Jenkins agent
- AWS CLI installed on Jenkins agent
- kubectl installed on Jenkins agent
- EKS cluster already created
- IAM permissions for ECR and EKS access

### Jenkins setup

Create these Jenkins credentials:

- `aws-access-key-id`
- `aws-secret-access-key`

Update the values in `Jenkinsfile`:

- `AWS_REGION`
- `ECR_REPOSITORY`
- `EKS_CLUSTER_NAME`

### Run pipeline

1. Create a new Pipeline job in Jenkins.
2. Point it to this repository.
3. Set the script path to `Jenkinsfile`.
4. Run the pipeline.

---

## 3. Kubernetes Deployment on AWS EKS

### Apply manifests

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

### Check resources

```bash
kubectl get pods
kubectl get svc
kubectl get ingress
```

### Access the app

Use the external address assigned by the LoadBalancer or Ingress controller.

---

## 4. Helm Deployment

### Install Helm chart

```bash
helm install devops-portfolio ./helm/devops-portfolio
```

### Upgrade release

```bash
helm upgrade devops-portfolio ./helm/devops-portfolio
```

### Uninstall release

```bash
helm uninstall devops-portfolio
```

> Update the image repository in `helm/devops-portfolio/values.yaml` before deploying.

---

## 5. GitHub Actions Deployment to EKS

### Prerequisites

- GitHub repository connected to this project
- AWS access keys stored as GitHub secrets:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`

### Update workflow

Edit `.github/workflows/deploy-eks.yml` and adjust:

- AWS region
- ECR repository name
- EKS cluster name

### Trigger deployment

Push changes to the `main` branch to trigger the workflow.

---

## 6. Notes

- The Docker image exposes port `80`.
- The Nginx container serves the built Vite app.
- For production, use a real domain and TLS certificate.
- For AWS ALB Ingress, ensure the AWS Load Balancer Controller is installed in the EKS cluster.
