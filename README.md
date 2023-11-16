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
- Winston (backend logging)

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
    - Note: If Angular commands do not work (ex: ng serve), try 'npm install @angular-devkit/build-angular --force' from the command prompt
6. Create file to set environment variables
    - In an IDE, open the file "env.template.bat", set variables for your system, and save as a new file named "env.bat" (see file for instructions)
7. To run in development mode
    - From command prompt, navigate to the project directory, then execute "node index.js"
    - From a new command prompt, navigate to the project's Angular directory, then execute "ng serve --proxy-config proxy.conf.json"
    - To validate, open a browser and navigate to http://localhost:4200/
8. To run in production mode
    - From command prompt, navigate to the project's Angular directory and execute "ng build --base-href /app/"
    - From command prompt, navigate to the project directory, then execute "node index.js"
    - To validate, open a browser and navigate to http://localhost:3000/

## Build History

The steps below were taken to manage this project and reach the hello world state:
1. GitHub Setup
    - Started project state from phase 1 "1-hello-world"
    - Add all files (excluding gitignore items), execute "git add -A"
    - Commit files, execute "git commit -m "(Add a message to describe commit here)"
    - Push git commit to Github "git push -u origin 3-robotics"
2. Updated Trello with tasks for phase 2
3. Install Bootstrap
    - From the Angular directory, execute "npm install bootstrap@5.3.0"
    - Add CSS and JS to angular.json file
    - Implement classes on buttons, text, links, and tables
    - Implement navigation bar
4. Backend logging
    - Install Winston with "npm install winston"
    - Create loggingService.js to configure Winston logging
        - Import new service into each Express module
    - Create batch file to store log level environment variable
        - Add batch file to .gitignore (env.template.bat can be used as a template to create a env.bat for the users environment)
    - Add log files to Winston configuration
        - Add log files to .gitignore
    - Add exception and rejection handlers to Winston with log export files
    - Add Morgan for HTTP logging
        - Install Morgan by navigating to base directory and executing "npm install morgan"
        - Add Morgan to loggingService.js and index.js
    - Created restService to handle success, warning, and error handlers
    - Implemented logging rotation to limit the size of log files
        - Install Winston log rotation by navigating to base directory and executing "npm install winston-daily-rotate-file"
        - Update logging transports to use DailyRotateFile
5. Frontend Notifications
    - Create Angular notification class to hold notification attributes
    - Create Angular notification service to update notification and set log levels
    - Add Bootstrap alert to pages to display the notification
    - Add Bootstrap spinner to indicate if REST call is in-progress
    - Implement success and error handling for each type of http call
6. Docker Compose Setup
    - Install Docker Engine Binary
        - Download binary files from https://download.docker.com/win/static/stable/x86_64/
        - Extract all to Program Files destination
        - Register and start the dockerd service
    - Install Docker Desktop
    - Upgrade to Windows Pro to enable use of hyper-V
        - Enable hyper-v and containers in windows
    - Create Dockerfile
    - Build the Docker image
        - Ensure that Docker or Docker Desktop is running (if unable to run, shutdown dockerd and restart)
        - From the project directory run "docker build -t mean ."
    - Create docker compose file
        - Update mongodb connection host and port with environment variables
        - Set environment variables in env.bat
        - Set environment variables in docker-compose file (host name must equal mongo service name and db port must match mongo service port)
        - Add restart policy to docker-compose to use docker as a process manager
        - Persist data by adding a volume

## Usage

1. Complete all of the installation and setup steps
2. Set environment variables
    - From command prompt, navigate to mean directory, then execute "env.bat" (this must be run after every windows reboot and before the server is started)
3. Optional: Connect to MongoDB on developer system to review data and troubleshoot
    - From command prompt, run "mongosh"
4. Choose an option below to run the application:
    - (A)Dev Mode: Run application locally in development mode.  Using this will restart both Express and Angular after every code change.
        - Express: From command prompt, navigate to mean directory, then execute "node index.js"
            - To include debug logging execute "set DEBUG=express:* & node index.js"
        - Angular: From command prompt, navigate to angular directory, then execute "ng serve --proxy-config proxy.conf.json"
    - (B)Production: Run Express server and Angular in production mode locally
        - Once it has been configured (see cloning and setup section), only the server will need to be started by running "node index.js" from the server directory
    - (C)Container: Run the full application in a container with Docker Compose
        - From command prompt, navigate to project directory and run "docker-compose up" (with logging) or "docker-compose up -d" (run in background)
5. To stop the application
    - In any terminal window if logging is actively running, use "Ctrl-C"
    - For docker-compose use "docker-compose down"

## Credits

Resources used to build this project:
- "Web Development with Node & Express: Leveraging the JavaScript Stack" by Ethan Brown, OReilly Books
- "Angular Up & Running" by Shyam Seshadri, OReilly Books
- "MongoDB: The Definitive Guide" by Kristina Chadorow, OReilly Books
- Docker: https://docs.docker.com/get-started/
- Winston: https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/
- Git CLI: https://cli.github.com/manual/
- Mongoose: https://mongoosejs.com/docs/connections.html

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
