pipeline {
    agent any
    tools {
        nodejs "NodeJS-14.18"
        dockerTool "Docker-20.10.22"
    }
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
                sh 'npm test -- --coverage'
            }
            post {
                always {
                    publishHTML target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll             : true,
                        reportDir            : 'output/coverage/jest',
                        reportFiles          : 'index.html',
                        reportName           : 'Test Report'
                    ]
                }
                success {
                    echo 'SUCCESS'
                }
            }
        }
        stage('Deploy') {
            steps {
                def GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
                echo "Commit: ${GIT_COMMIT}"
            }
        }
    }
    post {
        always {
            echo currentBuild.currentResult
        }
    }
}