WebdriverIO is a test automation framework that allows you to run tests based on the Webdriver protocol and Appium automation technology. It provides support for your favorite BDD/TDD test framework and will run your tests locally or in the cloud using Sauce Labs, BrowserStack etc...

================================
WebdriverIO setup (From Scratch)
================================

Install Node.js (https://nodejs.org/en/ )
Run following to make sure node is installed 
     node –version
     npm –version
To create a project from scratch
      create a root folder and run the following commands from cli
      npm init -y (it creates a new package.json file with all default options)
      npm install @wdio/cli –save-dev
      npx wdio config -y (this will configure required modules and create a wdio.conf.js file

========================================
Cloning WebdriverIO project from git hub 
========================================
Install Node.js (https://nodejs.org/en/ )
Run following to make sure node is installed 
     node –version
     npm –version
clone an existing project to root folder and navigate to package.json location from cli and run the following commands
     npm install  (make sure the command is executed where package.json is located.
//Install @wdio/cli (if not installed)
     npm install @wdio/cli –save-dev

==================================================
Open the project in VS code(Visual Studio Code)
==================================================
On command prompt from root folder (where you install or clone the project) Run the following command to open the Project in VS Code
 code .

Right Click on project on VS Code and select "Open in integrated terminal"
Change the Terminal type as "New Git Bash"


