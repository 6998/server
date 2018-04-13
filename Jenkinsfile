node {
    try {
		stage("Checkout") {
			checkout scm
		}
        stage("npm install") {
            steps {
                sh 'npm install'
            }
        }
    } catch (e) {
	  currentBuild.result = 'FAILURE'
	  throw e
  	}
}
