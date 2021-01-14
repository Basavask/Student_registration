# AngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a Angular Application . Go to `http://localhost:4302/`. The app will automatically reload if you change any of the source files.

Run `npm start` for a node server. Go to `http://localhost:3000/admin` for Nodejs Application.

This will open the Landing page for Student Registration Application , there we can find Sign_up and Log_in , when we do sign_up the Data will be stored into mongodb and when we do furthur login with same creds it will be validated with DB, if the user present in DB with same creds will be forwared to Home page / thourgh's error with same.

There are Multiple API's which were build here, shown details below :

0. /token/sign : used to generate jwt token and stored into localstorage and passed into each and every API call in Application (GET API).
1. /saveUser API : used to store the User Info to DB (POST API) .
2. /fetchAllUsers : used to fetechAll users from DB (GET API).
3. /fetchSingleUser : used to fetch Only one user's info by passing userName in the POST API call (POST API).
4. /saveStudentInfo : used to store the student info to DB (POST API).
5. /fetchAllStudents : used to fetech All Students info who were added (GET API).

DB connection is written in util folder by db-connect.js

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
