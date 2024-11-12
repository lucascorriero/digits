<img src="doc/landing-page.png">

Digits is an application that enables users to:

- Register an account.
- Manage a list of contacts.
- Add timestamped notes about their interactions with each contact.
#### Installation
- Install Meteor: Begin by installing Meteor on your system.
- Download Digits: Obtain a copy of Digits. Since it's a private repository, request access from the author.
- Install Libraries: Navigate to the app directory and run:
$ meteor npm install
- Run the Application: Start the app with:
-  $ meteor npm run start
The first time you run it, default users and data will be created, with output similar to:

meteor npm run start

=> App running at: http://localhost:3000/
Note: You might see a warning about bcrypt being a pure JavaScript implementation, which is slower. To use the native implementation, run:

meteor npm install --save bcrypt
This warning can be ignored during initial development.
After setup, access the app at http://localhost:3000. Log in using credentials from settings.development.json or create a new account.

You can also run ESLint to check your code quality:

$ meteor npm run lint
User Interface Overview
#### Landing Page

When you first open the app, you'll see an introduction to its features.

#### Registration

<img src = "Screenshot 2024-11-11 at 10.44.11 PM.png">

To create an account, click “Login” then “Sign Up”.

#### Sign In

<img src = "Screenshot 2024-11-11 at 10.45.05 PM.png">

Click on the Login link and then “Sign In” to access the Sign In page.

#### User Home Page

<img src = "admin-landing-page.png">

After logging in, you'll reach your home page with options to list and add contacts.

#### List Contacts

<img src = "admin-list-stuff-page.png">

Click “List Contacts” to view all your contacts and add timestamped notes about interactions.

#### Edit Contacts

<img src = "Screenshot 2024-11-11 at 10.47.52 PM.png">

From the List Contacts page, click “Edit” next to any contact to modify their information.

#### Admin Mode

<img src = "admin-landing-page.png">

You can set up one or more users as “Admins” in the settings file, granting them access to view all contacts associated with every user.
