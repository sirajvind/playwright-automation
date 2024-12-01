<p align="center">
    <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" width="200"/>
</p>


# Playwright Automation
This project is an automated UI and API testing suite that utilizes  [Playwright](https://playwright.dev/) for comprehensive end-to-end testing. Playwright is a robust framework that supports testing across multiple browsers, including Chromium, Firefox, and WebKit. With Playwright, you can ensure that your web applications perform consistently and reliably across different environments.

### Key Benefits:

- **Cross-Browser Testing**: Write tests that run on different browsers to ensure compatibility and performance.
- **End-to-End Testing**: Validate the entire workflow of your application, from the user interface to backend services.
- **UI Testing**: Automate interactions with your application's user interface to verify that it behaves as expected.
- **API Testing**: Test your backend APIs to ensure they return the correct responses and handle edge cases.
- **Headless Testing**: Execute tests in a headless browser mode for faster performance and integration into CI/CD pipelines.
- **Debugging Tools**: Utilize Playwright's powerful debugging tools to troubleshoot and resolve issues quickly.

By integrating Playwright into your testing strategy, you can achieve higher test coverage, reduce manual testing efforts, and deliver a more reliable product to your users.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- **End-to-End Testing**: Test your entire application from start to finish.
- **UI Testing**: Ensure your user interface works as expected.
- **API Testing**: Validate your backend services.
- **Headless Testing**: Run tests in a headless browser for faster execution.
- **Debugging**: Easily debug your tests with Playwright's built-in tools.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/playwright-automation.git
cd playwright-automation
```
```bash
npm install
```

> **Note:** Make sure you have [Node.js](https://nodejs.org/) and `npm` installed on your machine before running the above command.

## Usage

You can run the tests using the following commands:

Run All Tests

```bash
npm test
```

Run Tests with UI

```bash
npm run test:ui
```

Run Tests in Headed Mode

```bash
npm run test:head
```

Debug Tests

```bash
npm run test:debug
```

Generate Code

```bash
npm run test:codegen
```

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.