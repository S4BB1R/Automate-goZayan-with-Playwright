
# Playwright Automation README

Welcome to the Playwright Automation project! This repository contains automated tests for web applications using Playwright. Follow the instructions below to set up your environment and run the tests.


## Description

- **node_modules**: Contains all the npm dependencies.
- **package-lock.json**: Auto-generated file that holds the version of installed packages.
- **package.json**: Contains project dependencies and scripts.
- **pages**: Includes page object files for Playwright.
  - `basePage.js`: Base page with common methods.
  - `homePage.js`: Page object model for the Home page.
  - `tourPage.js`: Page object model for the Tour page.
  - `tourdetailsPage.js`: Page object model for the Tour Details page.
- **playwright-report**: Directory where Playwright test reports are stored.
- **playwright.config.js**: Configuration file for Playwright.
- **tests**: Contains test specification files.
  - `tour.spec.js`: Test suite for the Tour functionality.
- **tests-examples**: Example test cases.
  - `demo-todo-app.spec.js`: Sample Playwright test for a demo to-do app.
- **utils**: Utility functions and API request handling.
  - `apiRequest.js`: Helper for making API requests.
  - `helpers.js`: Utility functions used across the project.



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
