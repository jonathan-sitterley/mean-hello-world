# MEAN Fullstack Hello-World

## Description

The purpose of this project is to create a minimalist MEAN stack hello-world:

- A template to be used for future projects
- To learn about configurations that are required to reach a locally hosted full stack hosted website
- A functioning full stack development project with a database, frontend SPA, and backend scripting

What this project does NOT include (yet):

- Significant error handling on backend or frontend
- The use of modern UI, such as Bootstrap
- Containerization (such as docker)

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

## Cloning and Setup

Follow the steps below to clone the respository and view the webpage locally
1. Clone the repository from Github
    - Go the 'master' branch of the repository
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
1. Set up a Trello board for task management: https://trello.com/b/nTZWOi2L/mean-hello-world
2. Create a directory on developer computer named "mean"
3. Open the new directory within Visual Studio Code (IDE)
4. Create a README.md in the new directory for project information and setup steps
5. Create .credentials.development.json to store credentials
6. Setup Node and Express
    - Install Node on developer system from https://nodejs.org/en (follow installation instructions)
    - From command prompt, navigate to mean directory, then execute "npm init" and answer series of questions to create package.json
    - From command prompt, navigate to mean directory, then execute "npm install express"
7. Setup GIT for version control
    - Create .gitignore file in mean directory
        - ignore node_modules
    - Install Git on developer system from https://git-scm.com/ (follow installation instructions)
    - From command prompt, navigate to mean directory, then execute "git init"
8. Setup Github Repository to store project files
    - Install Github CLI
    - Create Github account (if one does not exist)
    - Create a repository on github to store project
    - Authenticate Github on developer system (a token will need setup)
        - Navigate to the project directory and execute "gh auth login --hostname https://github.com/<owner>"
    - Link to new repository by executing: git remote add origin https://github.com/<owner>/<repo name>.git
        - Note: Once git is configured, it will also work within Visual Studio; User may update via CLI or IDE
    - Push procedure from project directory:
        - Add all files (excluding gitignore items), execute "git add -A"
        - Commit files, execute "git  commit -m "(Add a message to describe commit here)"
        - Push git commit to Github "git push -u origin master"
9. Setup Angular
    - (Node and NPM are required, but were already installed in step 6)
    - Install typescript from command line by executing "npm install -g typescript"
    - Install Angular CLI from command line by executing "npm install -g @angular/cli"
    - Create new Angular project in the mean directory called "angular"
10. Setup MongoDB Database
    - Install MongoDB on developer system from https://www.mongodb.com/try/download/community (follow installation instructions)
    - Add mongo to PATH
    - Install Mongoose for object mapping by executing "npm install mongoose"
11. Build basic webpage
    - Create components for each page
        - From angular directory, execute "ng generate component <folder>/<component name>
        - Add the compenent to the declarations in app.module
    - Add images folder to assets, then save an image to display
    - Create routes module by executing "ng generate module app-routes --flat --module=app"
    - Add routes for new pages and replace content of app.componenet.html with "<router-outlet></router-outlet>
12. Configure API
    - Create frontend interfaces to capture data from server
        - From angular directory, execute "ng generate interface <interface name>
        - Add fields and types to the interfaces
    - Create frontend service to request data
        - Add HttpClientModule and ReactiveFormsModule to app.module.ts
        - From angular directory, execute "ng generate service <folder>/<service name>
        - Create API request with Observable in the new service
        - Add service and Observable subscription to a component so it can be used
    - Create backend module to handle API requests
        - Install Express BodyParser middleware by executing "npm install body-parser"
            - Add "app.use(bodyParser.urlencoded({ extended: true }))" and "app.use(express.json())" to index.js
        - Add module and API to index.js
    - Create proxy configuration file to connect frontend to backend in developer mode
        -Add proxy.conf.json to angular directory
13. Configure MongoDB to interact with backend and frontend through API
    - Create Angular mongo component with UI to trigger API
    - Create Angular mongo service to handle frontend requests
    - Create Express database module named db.js to connect to MongoDB
14. Create module to import CSV data
    -Add CSV node module navigating to mean directory and executing "npm install csvtojson"
15. Production Build
    - Setup Angular deployment path by updating the "outputPath" in angular.json to "../app/"
    - Navigate to angular folder and execute "ng build --base-href /app/"
    - Update express index.js to serve angular production build
        - Command to serve static files in angular production folder
        - Command to route to angular index.html in angular production folder

## Usage

1. Complete all of the installation and setup steps
2. Start server locally
    - From command prompt, navigate to mean directory, then execute "node index.js"
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
