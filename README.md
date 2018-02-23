# Contacts Application

This project was built using React, Redux, Mongodb, Express, Node. It is a simple contacts application where users can login using their Google account and then begin adding their own contacts! Soon you will be able to login with additional providers and have more features within the application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install the software and how to install them. In order to utilize the Google OAuth authentication you will first need to set up an account, create a project, set up the project for OAuth, enable the Google+ API and generate a CLIENTID and CLIENT SECRET, lastly place those generated keys into the dev.js file. Below are a more detailed set of instructions in order to achieve a proper set up. First, navigate to <a href= "https://console.developers.google.com">Google Developer Console</a> and if you haven't already done so create an account and then create a project. To create a project, simply click the drop down titled "Select a Project" and click the plus sign. Below are numbered instructions to continue with the proper set up.

1. Once project has been created, select APIs & Services in the side menu
2. Click ENABLE APIS AND SERVICES at the top of the Dashboard
3. Search for Google Plus or Google+ API
4. Enable the API
5. Select Credentials on the side menu
6. Click CREATE CREDENTIALS > OAuth Client ID > Configure Consent Screen
7. Enter Whatever you would like in the Produce name shown to users > SAVE 
8. Select the Web Application radio button
9. Under Authorized Javascript Origins input http://localhost:8080
10. Under Authorized redirect URI's input http://localhost:8080/auth/google/callback AND (for most users) http://localhost:3000/auth/google/callback > SAVE
11. In your code editor, create a new file in the config folder named dev.js and input the following

```
module.exports = {
    googleClientID: <inputYOUROWNCLIENTIDHERE>
    googleClientSecret: <inputYOUROWNCLIENTSECRETHERE>
    cookieKey: <TYPEANYTHINGHERE>
} 

```
If you still have trouble please refer to <a href="http://www.passportjs.org/docs/google/">PASSPORT.js documentation.</a>

Now that you have a dev.js file properly configured to your own Google OAuth Client keys you now need to start MONGODB as a service. Follow the install instructions below.

### Installing

Next all you have to is install the dependecies below, start mongodb, start up the express server and then start your development server.

```
NPM INSTALL
```

In a new terminal window run the following command in the working folder directory of the project

```
mongod --fork --logpath ./logpath/log.txt --dbpath data/db
```

You should see that mongodb has forked successfully. Next just start up the express server in the terminal window run the following command

```
nodemon server.js 
```

Lastly, start the development server 

```
npm run start
```

## Built With

* REACT
* REDUX
* MONGODB
* EXPRESS
* NODE
* PASSPORT.JS



