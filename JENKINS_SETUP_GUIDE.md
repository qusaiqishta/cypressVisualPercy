# Jenkins Setup Guide for Cypress + Percy Project

## Prerequisites ✅
- Jenkins LTS installed and running on port 8080
- Initial admin password: `a3f9876ac98b4eebbc5dd0b02df2d7da`
- Your Cypress + Percy project ready

## Step-by-Step Jenkins Setup

### 1. Complete Jenkins Initial Setup
1. Go to `http://localhost:8080`
2. Enter the initial admin password: `a3f9876ac98b4eebbc5dd0b02df2d7da`
3. Choose "Install suggested plugins"
4. Create your admin user account
5. Set Jenkins URL: `http://localhost:8080`

### 2. Install Required Jenkins Plugins
Go to **Manage Jenkins** → **Manage Plugins** → **Available** and install:
- [x] **Pipeline** (should be installed by default)
- [x] **Git** plugin
- [x] **NodeJS** plugin
- [x] **Credentials Binding** plugin
- [x] **Workspace Cleanup** plugin

### 3. Configure Node.js in Jenkins
1. Go to **Manage Jenkins** → **Global Tool Configuration**
2. Find **NodeJS installations** section
3. Click **Add NodeJS**
4. Name: `NodeJS 18`
5. Install automatically: ✅
6. Version: `18.x`
7. Click **Save**

### 4. Set Up Percy Token Credential
1. Go to **Manage Jenkins** → **Manage Credentials**
2. Click **System** → **Global credentials** → **Add Credentials**
3. Kind: **Secret text**
4. ID: `percy-token`
5. Description: `Percy API Token for Visual Testing`
6. Secret: `web_14b0655467eab7fc1bb60127dee1813a2ebadb3a8c35b2df01a6db6b6a4b7ba1`
7. Click **OK**

### 5. Create Jenkins Pipeline Job
1. Click **New Item** on Jenkins dashboard
2. Enter name: `cypress-percy-pipeline`
3. Choose **Pipeline**
4. Click **OK**

### 6. Configure Pipeline Job
1. **Description**: `Cypress + Percy Visual Testing Pipeline`
2. **Build Triggers**: 
   - ✅ **Poll SCM** with schedule: `H/5 * * * *` (every 5 minutes)
3. **Pipeline**:
   - Definition: **Pipeline script from SCM**
   - SCM: **Git**
   - Repository URL: Your Git repository URL
   - Credentials: Add your Git credentials if private repo
   - Branch: `*/main` (or your default branch)
   - Script Path: `Jenkinsfile`
4. Click **Save**

### 7. Test the Pipeline
1. Click **Build Now** on your pipeline job
2. Monitor the build progress
3. Check console output for any errors

## Pipeline Stages

The Jenkinsfile defines these stages:
1. **Checkout**: Clone your repository
2. **Setup Node.js**: Install and configure Node.js 18
3. **Install Dependencies**: Run `npm ci`
4. **Run Cypress Tests**: Execute `npm run cypress:run`
5. **Run Visual Tests**: Execute Percy visual tests with `npm run test:visual`

## Troubleshooting

### Common Issues:
1. **Node.js not found**: Ensure NodeJS plugin is installed and configured
2. **Permission denied**: Check file permissions in Jenkins workspace
3. **Percy token error**: Verify the credential is set up correctly
4. **Git clone failed**: Check repository URL and credentials

### Useful Commands:
```bash
# Check Jenkins status
brew services list | grep jenkins

# Restart Jenkins
brew services restart jenkins-lts

# View Jenkins logs
tail -f /usr/local/var/log/jenkins/jenkins.log

# Stop Jenkins
brew services stop jenkins-lts
```

## Next Steps

After successful setup:
1. **Monitor builds** in Jenkins dashboard
2. **Set up email notifications** for build results
3. **Configure webhook triggers** from your Git repository
4. **Set up build retention policies**
5. **Configure test result reporting**

## Security Notes

- Change the default admin password after first login
- Use Jenkins credentials for sensitive information
- Restrict Jenkins access to authorized users only
- Regularly update Jenkins and plugins

---

**Your Jenkins is now ready to run your Cypress + Percy visual testing pipeline! 🚀**
