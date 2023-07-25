# MEAN Fullstack: Phase 2 Container Automation
## Description

The purpose of this project is to add the following to Phase 1 Hello-World

- Frontend and backend error handling
- A modern UI using bootstrap and other tools
- Export the project to a docker container
- Create scripts to automate the containerization

## Table of Contents

- [Developer Tools](#developer-tools)
- [Cloning Instructions](#cloning-and-setup)
- [How the Project was Built](#build-history)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Testing](#tests)

## Developer Tools

- Task Management: Trello
- IDE: Visual Studio Code
- Version Control: Git
- Repository: Github
- Database: MongoDB
- Backend Framework: Express
- Frontend Framework: Angular
- Backend Code: Node
- Docker Containers
- Bootstrap

## Cloning and Setup

Follow the steps below to clone the respository and view the webpage locally
1. Clone the repository from Github
    - Go the '2-container' branch of the repository
    - Click code and 'Download Zip'
    - Unzip the files into a folder of your choosing (this will be your project directory)
2. Download Node from https://nodejs.org/en
    - Follow installation instructions
3. From command prompt, navigate to the project directory, then execute "npm install express"
    - This will update the node_modules, which were not included in the respository
4. Download MongoDB from https://www.mongodb.com/try/download/community
    - Follow installation instructions
5. In the command prompt, install the Angular CLI by executing "npm install -g @angular/cli"
    - If Angular commands do not work (ex: ng serve), try 'npm install @angular-devkit/build-angular --force' from the command prompt
6. To run in development mode
    - From command prompt, navigate to the project directory, then execute "node index.js"
    - From a new command prompt, navigate to the project's Angular directory, then execute "ng serve --proxy-config proxy.conf.json"
    - In a browser, navigate to http://localhost:4200/
4. To run in production mode
    - From command prompt, navigate to the project's Angular directory and execute "ng build --base-href /app/"
    - From command prompt, navigate to the project directory, then execute "node index.js"
    - In a browser, navigate to http://localhost:3000/

## Build History

The steps below were taken to manage this project and reach the hello world state:
1. GitHub Setup
    - Started project state from phase 1 "1-hello-world"
    - Add all files (excluding gitignore items), execute "git add -A"
    - Commit files, execute "git commit -m "(Add a message to describe commit here)"
    - Push git commit to Github "git push -u origin 2-container"
2. Updated Trello with tasks for phase 2
3. Install Bootstrap
    - From the Angular directory, execute "npm install bootstrap@5.3.0"
    - Add CSS and JS to angular.json file
    - Implement classes on buttons, text, links, and tables

## Usage

1. Complete all of the installation and setup steps
2. Start server locally
    - From command prompt, navigate to mean directory, then execute "node index.js"
    - To include debug logging execute "set DEBUG=express:* & node index.js"
3. Serve Angular in development mode
    - From command prompt, navigate to angular directory, then execute "ng serve --proxy-config proxy.conf.json"
4. Connect to MongoDB on developer system
    - From command prompt, run "mongosh"
5. Run Express server and Angular production build locally
    - Once it has been configured, only the server will need to be started by running "node index.js" from the server directory

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

To test this project, run through all of the cloning instructions and validate that a functional MEAN stack is set up correctly.
