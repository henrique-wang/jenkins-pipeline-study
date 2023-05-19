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
                sh 'npm test -- --coverage'
            }
            post {
                always {
                    publishHTML target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll             : true,
                        reportDir            : 'output/coverage/jest/lcov-report',
                        reportFiles          : 'index.html',
                        reportName           : 'Test Report'
                    ]
                    step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/clover.xml'])
                }
            }
        }
    }
  post {
    always {
        echo currentBuild.currentResult
    }
  }
}