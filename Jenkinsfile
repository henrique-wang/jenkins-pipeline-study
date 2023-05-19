pipeline {
    agent any

    tools {nodejs "NodeJS-14.18"}
    
    stages {
        stage('Build') {
            steps {
                echo "Building project from branch ${env.BRANCH_NAME}"
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo "Testing project"
                sh 'npm test'
            }
        }
    }
  post {
    always {
        echo currentBuild.currentResult
    }
  }
}