CONTACTS APPLICATION
=====================

This project was built using React, Redux, Mongodb, Express, Node. It is a simple contacts application where users can login using their Google account and then begin adding their own contacts! Soon you will be able to login with additional providers and have more features within the application.

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

<strong>Prerequisites</strong>

<p>You will have to go to the GOOGLE DEVELOPER CONSOLE, here https://console.developers.google.com/ and if you haven't done so in the past create an account in order to utilize the Google OAuth for the contacts application.</p>

<p>Once you have an account, create a project, name it whatever you want.</p>
<p>Navigate to credentials, select create credentials --> OAuth ClientID</p>
<p>Give your project a product name</p>
<p>Select web application </p>
<p>In Authorized JS origin type your localhost://PORT if you are in dev workflow</p>
<p>In Authorized redirect URI's type same localhost://PORT/auth/google/callback</p>

<p> This will generate a client ID and Client Secret which you simply need to work with Passport.js</p>

<p>Passport documentation: http://www.passportjs.org/docs/google/ </p>

Make sure you are running a current version of node, react and express! 

Installing

<p>Under the repository name, click Clone or download</p>
<p>Open Terminal</p>
<p>Change the current working directory to the location where you want the cloned directory to be made.</p>
<p>Type git clone, and then paste the URL you copied in Step 1.</p>
<p>Run NPM Install</p>

Have Fun! 



