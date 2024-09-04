pipeline {
    agent any
    environment {
        BROWSER = "${params.BROWSER}"
    }
    parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'firefox'], description: 'Select the browser to run tests')
        choice(name: 'SUITE', choices: ['smoke', 'other'], description: 'Select test suite to run')
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    def wdioCommand = "npx wdio run wdio.conf.js --suite ${params.SUITE}"
                    if (params.BROWSER) {
                        wdioCommand += " --browser ${params.BROWSER}"
                    }
                    sh wdioCommand
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'reports/screenshots/*.png', allowEmptyArchive: true
        }
    }
}
