pipeline {
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