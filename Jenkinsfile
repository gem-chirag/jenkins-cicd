node{
    def nodejsTool = tool name: 'nodejs', type: 'NodeJS'
    
    env.PATH = "${nodejsTool}/bin:${env.PATH}"

    stage("Install Dependencies"){
        sh 'npm install'
    }

    stage("Build"){
        echo 'Building Application....'
    }

    stage("Test"){
        echo 'All test passed'
    }
    
    stage("Deploy"){
        echo 'Deploying the application....'
        sh 'npm start'
    }
}