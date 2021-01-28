# Tration-Backend
Backend for Tration Application

This is now a API repo for Tration application

# Dev Set Up
`git pull https://github.com/Quick-Silver-Stash/Tration-Backend.git`  
`cd Tration-Backend/functions`  
`npm install`  

# Credentials Set up
`npm install -g firebase-tools`

in the `/functions` directory run

`firebase login`

you will be led to google login, and after you grant access you should see this screen

![Firebase CLI Login](./meta/0_firebase-logged-in.PNG)

Then upgrade your billing plan. Don't worry you have 2,000,000 functions calls for free per month before you are charged.

![Firebase Billing](./meta/1_firebase_pricing.PNG)

![Firebase Blaze](./meta/2_firebase_select_plan.PNG)
# Dev
go add your function to the directory `functions/index.js`

I will investigate if we can separate out the API for auto deployment - and organize it in the way that makes sense.

# Deploy
`firebase deploy`

will automatically deploy the function to firebase cloud. You can check the function deployed at:

https://console.firebase.google.com/u/1/project/trationapp/functions/list