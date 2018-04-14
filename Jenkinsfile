node {
    try {
		stage("Checkout") {
			checkout scm
		}
        stage("npm install") {
			sh 'npm install'
        }
        stage("make dir") {
	        String commandToRun = 'mkdir /test123'
        	sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-52-207-209-45.compute-1.amazonaws.com /bin/bash -c '\"${commandToRun}\"'"
        }
        stage("copy files") {
        	sh "scp -r /* ubuntu@ec2-52-207-209-45.compute-1.amazonaws.com:/var/www/"
        }
    } catch (e) {
	  currentBuild.result = 'FAILURE'
	  throw e
  	}
}
