# Cypress Visual Testing with Percy

This project demonstrates end-to-end testing with Cypress and visual regression testing using Percy. It's specifically configured for testing the Almosafer application.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Git**

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd cypressVisualPercy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Percy (Optional - for visual testing)**
   
   If you want to run visual tests with Percy:
   - Sign up at [Percy](https://percy.io)
   - Get your project token
   - Set the environment variable:
     ```bash
     export PERCY_TOKEN=your_percy_token_here
     ```
   
   **Note**: The project includes a sample Percy token in the package.json scripts for demonstration purposes.

## 🧪 Running Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npm run cypress:open
```
This opens the Cypress Test Runner in your browser where you can:
- See all test files
- Run tests interactively
- Watch tests execute in real-time
- Debug and troubleshoot

### Run Tests Headlessly (CI/CD Mode)
```bash
npm run cypress:run
```
This runs all tests in the background without opening a browser window.

### Run Visual Tests with Percy
```bash
npm run test:visual
```
This runs the specific visual testing suite (`percyVisual.cy.js`) with Percy integration.

### Generate Visual Test Report
```bash
npm run test:visual:report
```
This runs the visual tests and generates an HTML report of the results.

## 📁 Project Structure

```
cypressVisualPercy/
├── cypress/
│   ├── e2e/
│   │   └── percyVisual.cy.js    # Main visual testing file
│   ├── support/                  # Support files and custom commands
│   ├── fixtures/                 # Test data files
│   └── plugins/                  # Cypress plugins
├── .percy.js                     # Percy configuration
├── cypress.config.js             # Cypress configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## ⚙️ Configuration

### Cypress Configuration (`cypress.config.js`)
- **Base URL**: `https://next-staging.almosafer.com`
- **Viewport**: 1280x720
- **Timeouts**: Configured for web application testing
- **Percy**: Enabled by default

### Percy Configuration (`.percy.js`)
- **Version**: Percy v2
- **Allowed Hostnames**: `next-staging.almosafer.com`, `www.almosafer.com`
- **Network Settings**: Optimized for stability

## 🎯 Test Files

### `percyVisual.cy.js`
This is the main visual testing file that:
- Tests the Almosafer application
- Captures visual snapshots for regression testing
- Uses Percy for visual comparison and reporting

## 📊 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run cypress:open` | Opens Cypress Test Runner in interactive mode |
| `npm run cypress:run` | Runs all tests in headless mode |
| `npm run test:visual` | Runs visual tests with Percy integration |
| `npm run test:visual:report` | Runs visual tests and generates HTML report |
| `npm test` | Alias for `cypress:run` |

## 🔧 Troubleshooting

### Common Issues

1. **Node version compatibility**
   - Ensure you're using Node.js 16 or higher
   - Check with: `node --version`

2. **Dependencies not installed**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

3. **Percy token issues**
   - Verify your Percy token is set correctly
   - Check Percy project configuration

4. **Cypress installation issues**
   - Clear Cypress cache: `npx cypress cache clear`
   - Reinstall Cypress: `npm install cypress`

### Debug Mode
For debugging, you can run tests with additional logging:
```bash
DEBUG=cypress:* npm run cypress:run
```

## 🌐 Browser Support

The project is configured to work with:
- Chrome (default)
- Firefox
- Edge
- Electron (headless)

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Qusai Qishta**

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the troubleshooting section above
2. Review Cypress [documentation](https://docs.cypress.io/)
3. Check Percy [documentation](https://docs.percy.io/)
4. Open an issue in the repository

Happy testing! 🧪✨
