# What is this?

Completed project on a remote server - https://books.motochristo.com

This is a responsive ecommerce web app where Buyers can buy books from a Seller. It is built using Node to handle the back end, React to handle the front end, a Firebase Database and Authentication service for Buyer Sign-Up/Sign-In/Sign-Out and Stripe Buyer Sign-Up, Buyer Purchasing using a Saved Card and Payments.

This app supports these basic user actions (<a href="https://bit.ly/3BqQj4O">short video walkthrough</a>): 

1. Select a book (or multiple books) to purchase.
2. Checkout and purchase the item using Stripe Elements.
3. Display a confirmation of purchase to the user with the total amount of the charge and Stripe charge ID (beginning with ch_).

This app also supports these additional actions (<a href="https://bit.ly/3zc9blU">short video walkthrough</a>): 

4. Allow a user to create an acccount, to save a credit card and to reuse one of their saved credit cards to make a purchase.

# Installation

For basic transactions (e.g. to support purchasing of one or more books and get a receipt page with a charge id like ch_) follow steps 1-4.

1. Clone this repo locally.  If needed, learn more <a href="https://bit.ly/3iybdq1">here</a>.
2. Update the Stripe API Keys.  If needed, learn more <a href="https://bit.ly/2V2NAgQ">here</a>.

A. In the root of your client create a .env file containing the following:

NODE_PORT=8080
REACT_APP_WEB_SERVER_URL=http://localhost:${NODE_PORT}
REACT_APP_PUBLISHABLE_KEY=pk_test_insert_your_own_stripe_api_publishable_key_here...

B. In the root of your server create a .env containing the following: 

NODE_PORT=8080
SECRET_KEY="sk_test_insert_your_own_stripe_api_secret_key_here..."
WEB_APP_URL=http://localhost:3000
WEB_HOOK_SECRET=abc 
GOOGLE_APPLICATION_CREDENTIALS="./service-account.json"

C. Update your Firebase Condig Data here like such...

TBD

3. From "server" run "npm install" to install dependencies then "npm start" to start the server. You should see <a href="https://bit.ly/36KeUTY">this</a>.
4. From the "client" directory run "npm install" to install dependencies then "npm start" to start the server. You should see <a href="https://bit.ly/3kDjbk0">this</a>.

To add Sign-Up/Sign-In/Sign-Out functionality to allow Buyers to save a card and pay with a saved card follow steps 6-7 as well.

6. From Firebase.com create a Firebase application and connect a Firestore Database and Authentication service.
7. Update service-account.json and client/src/firebase/index.js with your Firebase Credentials.

To run this application live on a remote server (like on AWS, Digtial Ocean or the like) follow these additional steps.

8. Install react, node, stripe, got and related dependencies.
9. Update references to http://localhost:3000 to instead point to your public facing webserver domain.  In my case this is https://books.motochristo.com.  Note, this will work over http but it's recommended to run it over https for security purposes.
10. Update references to http://localhost:8080 to instead point to your public facing node domain.  In my case this is https://node.motochristo.com.
11. Update the server configuration to map requests for port 8080 to the domain running node.
12. Follow Steps 3 and 4 from above to install dependencies and start the application.

From here you should have a fully functional, responsive ecommerce web app running on a remote server.

# FAQ

Q: How does it work? Which Stripe APIs does it use? <br />
A: (TBD - A paragraph or two)

Q: How did you approach this problem: which docs did you use to complete the project? What challenges did you encounter? <br />
A: (TBD - A paragraph or two)

Q: How you might extend this if you were building a more robust instance of the same application? <br />
A: (TBD - A paragraph or two)# bookstore-b
