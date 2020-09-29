pipeline {
  agent any
  parameters {
    choice(choices: 'develop\nmaster', description: 'Which branch?', name: 'BRANCH')
  }
  environment {
    GIT_BRANCH = sh(returnStdout: true, script: 'git describe --always').trim()
  }
  stages {
    stage('Env Variables') {
      steps {
        sh "printenv"
      }
    }
    stage('build-staging') {
      when {
        environment name: 'BRANCH', value: 'develop'  
      }
      steps {
        echo "BUILD STAGING - develop"
      }
    }
    stage('build-production') {
      when {
        environment name: 'BRANCH', value: 'master'
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
