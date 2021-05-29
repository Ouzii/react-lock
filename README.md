How to run:

1. run `git clone https://github.com/Ouzii/react-lock.git` or `git clone git@github.com:Ouzii/react-lock.git`
2. run `yarn` or `yarn install` or `npm i` etc. 
3. run `yarn build:front`
4. run `CORRECT_CODE={your_code_here} PORT={your_port_here} yarn start` or use .env file (defaults to port 3000 and code 1234)
5. navigate to `http://localhost:{your_port_here}`


To build ts files into js, install tsc and run `tsc {name_of_your_file_or_folder}` (server.ts already compiled to server.js for convenience)