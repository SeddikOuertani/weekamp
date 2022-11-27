pipeline {
    agent {
        docker {
            image 'node:14.21.1-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    
    tools {nodejs "Nodejs_auto"}

    stages {
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'npm install --prefix ./frontend'
                sh 'npm --prefix ./frontend run build'
            }
        }
        
        // stage('Test') {
        //     steps {
        //         sh "npm test"
        //         sh './jenkins/scripts/test.sh'
        //     }
        // }
        // stage('Deliver') {
        //     steps {
        //         sh './jenkins/scripts/deliver.sh'
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)'
        //         sh './jenkins/scripts/kill.sh'
        //     }
        // }
    }
}