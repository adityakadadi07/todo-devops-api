# Todo API – DevOps Automation and Deployment

## 1. Project Overview
This project demonstrates the DevOps lifecycle using a Todo REST API.
It covers source code management, continuous integration, automated
deployment, containerization, and container orchestration.

## 2. Technologies Used
- Node.js
- Express.js
- Git and GitHub
- Jenkins
- npm
- Ansible
- Docker
- Kubernetes
- Minikube

## 3. API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Checks application health |
| GET | /todos | Displays Todo tasks |
| POST | /todos | Adds a new Todo task |

## 4. Project Structure

- server.js – Main application
- package.json – Project dependencies and scripts
- Jenkinsfile – Jenkins CI pipeline
- Dockerfile – Docker image configuration
- ansible/ – Ansible inventory, playbook and role
- k8s/ – Kubernetes Deployment and Service files
- test/ – Automated application tests

## 5. Run the Application

Install dependencies:

    npm ci

Start the application:

    npm start

Open:

    http://localhost:3000/health
    http://localhost:3000/todos

## 6. Build the Application

    npm run build

This creates a .tgz package artifact.

## 7. Jenkins Pipeline

The Jenkins pipeline performs:
1. Install dependencies
2. Run automated tests
3. Build the application
4. Archive the generated artifact

## 8. Ansible Deployment

Ansible is used to automate application deployment using:
- Inventory
- Playbook
- Custom role
- Variables
- Handlers
- Systemd service

## 9. Docker

Build the Docker image:

    sudo docker build -t todo-devops-api:latest .

Run the container:

    sudo docker run -d --name todo-api-container -p 3001:3000 todo-devops-api:latest

Test:

    curl http://localhost:3001/health

## 10. Kubernetes Deployment

The application is deployed using Minikube.

Apply the Deployment:

    minikube kubectl -- apply -f k8s/deployment.yaml

Apply the Service:

    minikube kubectl -- apply -f k8s/service.yaml

Check Pods:

    minikube kubectl -- get pods

Check Services:

    minikube kubectl -- get services

## 11. Scaling

Scale to five replicas:

    minikube kubectl -- scale deployment todo-api --replicas=5

Scale back to three replicas:

    minikube kubectl -- scale deployment todo-api --replicas=3

## 12. Additional Enhancement

Liveness and readiness probes are configured using the /health endpoint.
They help Kubernetes check application health and readiness.

## 13. Repository

GitHub: https://github.com/adityakadadi07/todo-devops-api

## 14. Conclusion

This project demonstrates how DevOps tools can be used to develop,
test, build, deploy, containerize, and manage a REST API application.
