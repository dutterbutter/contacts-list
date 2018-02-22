CONTACTS APPLICATION
=====================

This project was built using React, Redux, Mongodb, Express, Node. It is a simple contacts application where users can login using their Google account and then begin adding their own contacts! Soon you will be able to login with additional providers and have more features within the application.

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

<strong>Prerequisites</strong>

<p>You will have to go to the GOOGLE DEVELOPER CONSOLE, here https://console.developers.google.com/ and if you haven't done so in the past create an account in order to utilize the Google OAuth for the contacts application.</p>

<li>Once you have an account, create a project, name it whatever you want.</li>
<li>Navigate to credentials, select create credentials --> OAuth ClientID</li>
<li>Give your project a product name</li>
<li>Select web application </li>
<li>In Authorized JS origin type your localhost://PORT if you are in dev workflow</li>
<li>In Authorized redirect URI's type same localhost://PORT/auth/google/callback</li>

<p> This will generate a client ID and Client Secret which you simply need to work with Passport.js</p>

<p>Passport documentation: http://www.passportjs.org/docs/google/ </p>

Make sure you are running a current version of node, react and express! 

Installing

<li>Under the repository name, click Clone or download</li>
<li>Open Terminal</li>
<li>Change the current working directory to the location where you want the cloned directory to be made.</li>
<li>Type git clone, and then paste the URL you copied in Step 1.</li>
<li>Run NPM Install</li>

Have Fun! 



