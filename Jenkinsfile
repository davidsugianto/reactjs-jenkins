pipeline {
  agent any
  stages {
    stage('Env Variables') {
      steps {
        sh "printenv"
      }
    }
    stage('build-staging') {
      when {
        env.GIT_BRANCH == 'develop'  
      }
      steps {
        echo "BUILD STAGING - develop"
      }
    }
    stage('build-production') {
      when {
        env.GIT_BRANCH == 'master'
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
