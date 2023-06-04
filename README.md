# MEAN Fullstack Hello-World

## Description

The purpose of this project is to create a minimalist MEAN stack hello-world:

- A template to be used for future projects
- To learn about configurations that are required to reach a locally hosted full stack hosted website
- A functioning full stack development project with a database, frontend SPA, and backend scripting

## Table of Contents (Optional)

- [Developer Tools](#tools)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Developer Tools

- Task Management: Trello
- IDE: Visual Studio Code
- Version Control: Git
- Repository: Github
- Database: MongoDB
- Backend Framework: Express
- Frontend Framework: Angular
- Backend Code: Node

## Installation and Setup

The steps below were taken to manage this project and reach the hello world state:
1. Set up a Trello board for task management: https://trello.com/b/nTZWOi2L/mean-hello-world
2. Create a directory on developer computer named "mean"
3. Open the new directory within Visual Studio Code (IDE)
4. Create a README.md in the new directory for project information and setup steps
5. Setup Node and Express
    - Install Node on developer system from nodejs.org/en (follow installation instructions)
    - From command prompt, navigate to mean directory, then execute "npm init" and answer series of questions to create package.json
    - From command prompt, navigate to mean directory, then execute "npm install express"
6. Setup GIT for version control
    - Create .gitignore file in mean directory
    - Install Git on developer system from https://git-scm.com/ (follow installation instructions)
    - From command prompt, navigate to mean directory, then execute "git init"
7. Setup Github Repository to store project files
    - Install Github CLI
    - Create Github account (if one does not exist)
    - Create a repository on github to store project
    - Authenticate Github on developer system (a token will need setup)
        - Navigate to the project directory and execute "gh auth login --hostname https://github.com/<owner>"
    - Link to new repository by executing: git remote add origin https://github.com/<owner>/<repo name>.git
    - Push procedure from project directory:
        - Add all files (excluding gitignore items), execute "git add -A"
        - Commit files, execute "git  commit -m "(Add a message to describe commit here)"
        - Push git commit to Github "git push -u origin master"
8. Setup Angular
    - (Node and NPM are required, but were already installed in step 5)
    - Install typescript from command line by executing "npm install -g typescript"
    - Install Angular CLI from command line by executing "npm install -g @angular/cli"
    - Create new Angular project in the mean directory called "mean-stack"
9. Build basic webpage
    - Create components for each page
        - From mean-stack directory, execute "ng generate component <folder>/<component name>
        - Create home component for landing page
        - Create contact component to act as a contact page
    - Add images folder to assets, then save an image to display
    - Create routes module by executing "ng generate module app-routes --flat --module=app"
    - Add routes for new pages and replace content of app.componenet.html with "<router-outlet></router-outlet>
10. Configure API
    - Create frontend interfaces to capture data from server
        - From mean-stack directory, execute "ng generate interface <interface name>
        - Add fields and types to the interfaces
    - Create frontend service to request data
        - Add HttpClientModule to app.module.ts
        - From mean-stack directory, execute "ng generate service <folder>/<service name>
        - Create API request with Observable in the new service
        - Add service and Observable subscription to a component so it can be used
    - Create backend module to handle API requests
        - Add module and API to index.js
    - Create proxy configuration file to connect frontend to backend in developer mode
        -Add proxy.conf.json to mean-stack directory


90. Setup MongoDB Database
    - Install MongoDB on developer system from https://www.mongodb.com/try/download/community (follow installation instructions)
91. Build server
    - Create index.js in the mean directory
(Remaning steps TBD)

## Usage

1. Complete all of the installation and setup steps
2. Start server locally
    - From command prompt, navigate to mean directory, then execute "node index.js"
3. Serve Angular in development mode
    - From command prompt, navigate to mean-stack directory, then execute "ng serve --proxy-config proxy.conf.json"

## Credits

Resources used to build this project:
- "Web Development with Node & Express: Leveraging the JavaScript Stack" by Ethan Brown, OReilly Books

## License

MIT License

Copyright (c) 2023 Jonathan Sitterley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Tests

To test this project, run through all of the installation and steps and validate that a functional MEAN stack is set up correctly.
