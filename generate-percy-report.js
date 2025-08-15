#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to generate Percy report HTML
function generatePercyReport(percyUrl, buildId) {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percy Visual Test Report</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5em;
            font-weight: 300;
        }
        .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
            font-size: 1.1em;
        }
        .content {
            padding: 30px;
        }
        .section {
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #e1e5e9;
            border-radius: 6px;
            background: #fafbfc;
        }
        .section h2 {
            margin-top: 0;
            color: #24292e;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        }
        .percy-link {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            transition: background-color 0.2s;
        }
        .percy-link:hover {
            background: #5a6fd8;
        }
        .build-info {
            background: #e1f5fe;
            border-left: 4px solid #2196f3;
            padding: 15px;
            margin: 20px 0;
        }
        .build-info h3 {
            margin-top: 0;
            color: #1976d2;
        }
        .build-info p {
            margin: 5px 0;
            color: #424242;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .feature {
            background: white;
            padding: 20px;
            border-radius: 6px;
            border: 1px solid #e1e5e9;
        }
        .feature h3 {
            color: #24292e;
            margin-top: 0;
        }
        .feature p {
            color: #586069;
            line-height: 1.6;
        }
        .status {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.8em;
            font-weight: 500;
        }
        .status.success {
            background: #d4edda;
            color: #155724;
        }
        .status.info {
            background: #d1ecf1;
            color: #0c5460;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #586069;
            border-top: 1px solid #e1e5e9;
            background: #fafbfc;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔍 Percy Visual Test Report</h1>
            <p>Comprehensive visual testing results and analysis</p>
        </div>
        
        <div class="content">
            <div class="section">
                <h2>📊 Build Overview</h2>
                <div class="build-info">
                    <h3>Build Information</h3>
                    <p><strong>Build ID:</strong> ${buildId || 'N/A'}</p>
                    <p><strong>Status:</strong> <span class="status success">Completed</span></p>
                    <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
                </div>
                
                <a href="${percyUrl}" target="_blank" class="percy-link">
                    🚀 View Full Report in Percy Dashboard
                </a>
            </div>
            
            <div class="section">
                <h2>🎯 What This Report Shows</h2>
                <div class="features">
                    <div class="feature">
                        <h3>📸 Snapshot Comparisons</h3>
                        <p>Side-by-side comparison of current snapshots with baseline images, highlighting visual differences and changes.</p>
                    </div>
                    <div class="feature">
                        <h3>🔍 Visual Diffs</h3>
                        <p>Detailed analysis of pixel-level differences, showing exactly what changed between versions.</p>
                    </div>
                    <div class="feature">
                        <h3>📈 Test Results</h3>
                        <p>Comprehensive test results including pass/fail status, performance metrics, and detailed logs.</p>
                    </div>
                    <div class="feature">
                        <h3>🔄 Change Tracking</h3>
                        <p>Track visual changes over time, identify regressions, and maintain visual consistency across builds.</p>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>📋 How to Use This Report</h2>
                <ol>
                    <li><strong>Click the Percy Dashboard link above</strong> to view the full interactive report</li>
                    <li><strong>Review snapshot comparisons</strong> to identify visual changes</li>
                    <li><strong>Analyze visual diffs</strong> to understand what changed</li>
                    <li><strong>Check test results</strong> for any failures or issues</li>
                    <li><strong>Use the insights</strong> to maintain visual quality</li>
                </ol>
            </div>
        </div>
        
        <div class="footer">
            <p>Generated by Percy Visual Testing Platform | Jenkins Integration</p>
        </div>
    </div>
</body>
</html>`;

  return htmlContent;
}

// Main execution
async function main() {
  try {
    // Read the test output log to extract Percy URL
    const logFile = 'test-output.log';
    let percyUrl = 'No Percy URL found';
    let buildId = 'N/A';
    
    if (fs.existsSync(logFile)) {
      const logContent = fs.readFileSync(logFile, 'utf8');
      
      // Extract Percy URL
      const urlMatch = logContent.match(/https:\/\/percy\.io\/[^\s]*/);
      if (urlMatch) {
        percyUrl = urlMatch[0];
        
        // Extract build ID from URL
        const buildMatch = percyUrl.match(/builds\/(\d+)/);
        if (buildMatch) {
          buildId = buildMatch[1];
        }
      }
    }
    
    // Generate the HTML report
    const htmlContent = generatePercyReport(percyUrl, buildId);
    
    // Write the report to file
    fs.writeFileSync('percy-report.html', htmlContent);
    
    console.log('✅ Percy report generated successfully!');
    console.log(`📄 Report saved as: percy-report.html`);
    console.log(`🔗 Percy URL: ${percyUrl}`);
    
  } catch (error) {
    console.error('❌ Error generating Percy report:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generatePercyReport };
