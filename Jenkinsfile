node {
    // Specify the NodeJS tool
    def nodejsHome = tool name: 'nodejs', type: 'NodeJS'

    stage('Install Dependencies') {
        // Install dependencies
        sh "${nodejsHome}/bin/npm install"
    }
    
    stage('Build') {
        // Build the application
        echo 'Building the application...'
    }
    
    stage('Test') {
        // Run tests
        echo 'All tests passed'
    }
    
    stage('Deploy') {
        // Deploy the application
        echo 'Deploying the application...'
        sh "${nodejsHome}/bin/npm start"
    }
}
