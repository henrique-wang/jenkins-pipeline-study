pipeline {
    agent any

    tools {nodejs "NodeJS-14.18"}
    
    stages {
        stage ('Starting') {
            steps {
                TEST_RESULT = false;
            }
        }
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
                    TEST_RESULT = true
                }
            }
        }
        stage('Deploy') {
            when {
                TEST_RESULT = true
            }
            steps {
                echo 'Deploy'
            }
        }
    }
    post {
        always {
            echo currentBuild.currentResult
        }
    }
}