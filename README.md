
# Playwright Automation README

Welcome to the Playwright Automation project! This repository contains automated tests for web applications using Playwright. Follow the instructions below to set up your environment and run the tests.

# This is the tree of this Playwright Automation Architecture 
.
├── node_modules
├── package-lock.json
├── package.json
├── pages
│   ├── basePage.js
│   ├── homePage.js
│   ├── tourPage.js
│   └── tourdetailsPage.js
├── playwright-report
├── playwright.config.js
├── tests
│   └── tour.spec.js
├── tests-examples
│   └── demo-todo-app.spec.js
└── utils
    ├── apiRequest.js
    └── helpers.js


## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required packages:

   ```bash
   npm install
   ```


## Running Tests

### UI Mode

To run the tests in UI mode, execute the following command:

```bash
npx playwright test --ui
```

This will launch the Playwright Test Runner in UI mode, allowing you to visualize the tests as they run.

## Running Tests Headlessly




If you prefer to run the tests in headless mode (without a browser UI), simply use:

```bash
npx playwright test
```


Reported bug for manual TEST :
https://docs.google.com/spreadsheets/d/1uPHd3303TG0iz7EyR6uNC0RVGOOFmEfbkSexBCDEHh8/edit?usp=sharing  
