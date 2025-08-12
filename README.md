# Cypress Visual Testing with Percy

This project demonstrates visual testing of the Almosafer signin page using Cypress and Percy.

## Quick Start

### Installation
```bash
npm install
```

### Set Percy Token
```bash
export PERCY_TOKEN=web_91f270de7f20b24e6224a2846abbd3e9fed7ee205118c873cf3a1bbec97fe11f
```

### Run Tests
```bash
# Open Cypress
npm run cypress:open

# Run headless
npm run cypress:run

# Run visual tests
npm run test:visual
```

## Project Structure
- `cypress/e2e/percyVisual.cy.js` - Main test file
- `cypress.config.js` - Cypress configuration
- `.percy.js` - Percy configuration

## Test Scenarios
1. Full page snapshot
2. Signin form capture
3. Header section
4. Footer section
5. Responsive testing (desktop, tablet, mobile) 