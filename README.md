<p align="center">
<img src="images/banner.png" width="100%">
</p>

<h1 align="center">
🚀 DevSecOps CI/CD Pipeline for React Application
</h1>

<p align="center">
Production Ready • Jenkins • SonarQube • Trivy • Docker • AWS ECR • Amazon EKS
</p>
<p align="center">

<img src="https://skillicons.dev/icons?i=jenkins,docker,kubernetes,aws,react,nodejs,git,github,vscode"/>

</p>
<p align="center">

<img src="https://go-skill-icons.vercel.app/api/icons?i=jenkins,docker,kubernetes,aws,react,nodejs,git,github"/>

</p>
![GitHub last commit](https://img.shields.io/github/last-commit/ChSaiteja123/Portfolio)

![GitHub Repo stars](https://img.shields.io/github/stars/ChSaiteja123/Portfolio)

![GitHub forks](https://img.shields.io/github/forks/ChSaiteja123/Portfolio)

![GitHub issues](https://img.shields.io/github/issues/ChSaiteja123/Portfolio)

![GitHub License](https://img.shields.io/github/license/ChSaiteja123/Portfolio)

```text
██████████████████████████████████████
✅ Checkout

██████████████████████████████████████
✅ SonarQube Scan

██████████████████████████████████████
✅ Quality Gate

██████████████████████████████████████
✅ Trivy Scan

██████████████████████████████████████
✅ Docker Build

██████████████████████████████████████
✅ Push to AWS ECR

██████████████████████████████████████
✅ Deploy to Amazon EKS
---

#  Modern Architecture Diagram

```mermaid

Developer((Developer))

GitHub((GitHub))

Jenkins((Jenkins))

SonarQube((SonarQube))

Trivy((Trivy))

Docker((Docker))

ECR((AWS ECR))

EKS((Amazon EKS))

Users((Users))

Developer --> GitHub

GitHub --> Jenkins

Jenkins --> SonarQube

Jenkins --> Trivy

Jenkins --> Docker

Docker --> ECR

ECR --> EKS

EKS --> Users
```

##Sequence Diagram
```mermaid


sequenceDiagram

participant Dev

participant GitHub

participant Jenkins

participant SonarQube

participant Trivy

participant Docker

participant AWS ECR

participant Amazon EKS

Dev->>GitHub: Push Code

GitHub->>Jenkins: Trigger Pipeline

Jenkins->>SonarQube: Code Analysis

SonarQube-->>Jenkins: Quality Gate

Jenkins->>Trivy: Security Scan

Jenkins->>Docker: Build Image

Docker->>AWS ECR: Push Image

AWS ECR->>Amazon EKS: Pull Image

Amazon EKS-->>Dev: Deployment Successful


```
##flowchart LR

```mermaid

A[GitHub Push]

B[Checkout]

C[SonarQube]

D[Quality Gate]

E[Trivy Scan]

F[npm install]

G[Vite Build]

H[Docker Build]

I[AWS ECR]

J[EKS Deployment]

K[Application Live]

A --> B

B --> C

C --> D

D --> E

E --> F

F --> G

G --> H

H --> I

I --> J

J --> K

```
##Kubernetes Architecture

```mermaid


graph TD

Internet

ALB[AWS Load Balancer]

Service[Kubernetes Service]

Deployment[Deployment]

Pod1[React Pod]

Pod2[React Pod]

Pod3[React Pod]

Internet --> ALB

ALB --> Service

Service --> Deployment

Deployment --> Pod1

Deployment --> Pod2

Deployment --> Pod3

```
##AWS Infrastructure
```mermaid


graph LR

Developer

GitHub

Jenkins

Amazon_ECR

Amazon_EKS

EC2

Internet

Developer --> GitHub

GitHub --> Jenkins

Jenkins --> Amazon_ECR

Amazon_ECR --> Amazon_EKS

Amazon_EKS --> EC2

Internet --> Amazon_EKS


```

Portfolio
│
├── Jenkinsfile
├── Dockerfile
├── package.json
├── package-lock.json
├── vite.config.js
├── src/
├── public/
├── images/
│   ├── banner.png
│   ├── architecture.png
│   ├── pipeline.png
│   ├── sonar.png
│   ├── trivy.png
│   ├── docker.png
│   ├── ecr.png
│   ├── eks.png
│   ├── pods.png
│   └── app.png
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
└── README.md


| Jenkins                  | SonarQube             |
| ------------------------ | --------------------- |
| ![](images/pipeline.png) | ![](images/sonar.png) |
| Trivy                 | Docker                 |
| --------------------- | ---------------------- |
| ![](images/trivy.png) | ![](images/docker.png) |

| AWS ECR             | Amazon EKS          |
| ------------------- | ------------------- |
| ![](images/ecr.png) | ![](images/eks.png) |
| Kubernetes Pods      | Live Application    |
| -------------------- | ------------------- |
| ![](images/pods.png) | ![](images/app.png) |


# 📚 Table of Contents

Overview
Architecture
Pipeline Workflow
Pipeline Stages
Project Structure
AWS Infrastructure
Jenkins Pipeline
Deployment
Screenshots
Troubleshooting
Author



##🔐 DevSecOps Workflow
Developer
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins Pipeline
    │
    ├────────────► SonarQube
    │                 │
    │                 ▼
    │          Quality Gate
    │
    ├────────────► Trivy
    │                 │
    │                 ▼
    │         Security Scan
    │
    ▼
Docker Build
    │
    ▼
AWS ECR
    │
    ▼
Amazon EKS
    │
    ▼
Kubernetes Deployment
    │
    ▼
Pods
    │
    ▼
Live Application

## ✅ Features

- ✅ GitHub Integration
- ✅ Jenkins Pipeline
- ✅ SonarQube Analysis
- ✅ Quality Gate
- ✅ Trivy Security Scan
- ✅ Docker Image Build
- ✅ AWS ECR Push
- ✅ Amazon EKS Deployment
- ✅ Kubernetes Rollout
- ✅ Automated CI/CD


## 🌟 Highlights

- 🚀 End-to-End CI/CD Pipeline
- 🔒 DevSecOps Security Integration
- ☁️ AWS Cloud Native Deployment
- 🐳 Dockerized React Application
- ☸️ Kubernetes Orchestration
- 📦 Amazon ECR Image Registry
- 📈 Production-Ready Jenkins Pipeline
- 🔄 Automated Continuous Deployment

