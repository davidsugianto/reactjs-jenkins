pipeline {
  agent any
  stages {
    stage('build-staging') {
      when {
        branch 'develop'
      }
      steps {
        echo "BUILD STAGING - develop"
      }
    }
    stage('build-production') {
      when {
        branch 'master'
      }
      steps {
        echo "BUILD PRODUCTION - master"
      }
    }
    stage('test') {
      steps {
        echo "TESTING"
      }
    }
    stage('deploy') {
      steps {
        echo "DEPLOYING"
      }
    }
  } 
}
