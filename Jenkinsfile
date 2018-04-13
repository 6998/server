pipeline {
    agent any
    stages {
		stage("Checkout") {
			checkout scm
		}
        stage('npm install') {
            steps {
                sh 'npm install'
            }
        }
    }
}
