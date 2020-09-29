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
        expression {
          GIT_BRANCH = sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
          return (GIT_BRANCH == 'origin/develop')
        }  
      }
      steps {
        echo "BUILD STAGING - develop"
      }
    }
    stage('build-production') {
      when {
        expression {
          GIT_BRANCH = sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
          return (GIT_BRANCH == 'origin/master')
        }
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
