
pipeline {
    agent any

    triggers {
        pollSCM('H/1 * * * *')
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/YOUR_USERNAME/todo-devops-api.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: '*.tgz',
                fingerprint: true
        }
    }
}
