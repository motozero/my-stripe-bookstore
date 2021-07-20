# Christo's Bookstore

<a href="https://books.motochristo.com">CLICK HERE</a> to see the final product.

This is a responsive ecommerce web app where Buyers can buy books from a Seller. It is built using Node to handle the back end, React to handle the front end, Express to handle the middleware, a Firebase Database and Authentication service for Buyer Sign-Up/Sign-In/Sign-Out and Stripe Buyer Sign-Up, Buyer Purchasing using a Saved Card and Payments.  

I created this app in response to this <a href="https://github.com/mattmitchell6/sa-takehome-project-node">Take Home Project<a/> which was coupled with an email prompt that requested the app support the first 3 user actions listed below. I extended it to support user actions 4-7 as well.

### User Actions
1. Select one or more books to purchase.
2. Checkout and purchase the item using Stripe Elements.
3. Display a confirmation of purchase to the user with the total amount of the charge and Stripe charge ID (beginning with ch_).
4. Sign Up to create an account.
5. Sign In and Out of created account.
6. If signed in, during a purchase save a credit card number for use in a future transaction.
7. If signed in, during a purchase use a previously saved credit card.

# Installation
  
### To set up and run a local version of the app that supports User Actions 1-3 above, follow steps 1-4 below.

1. Clone this repo locally.
2. Update the Stripe API Keys.  If needed, learn more <a href="https://bit.ly/2V2NAgQ">here</a>.

A. In the root of your `client` directory create a `.env` file and add the following (updating the `REACT_APP_PUBLISHABLE_KEY` with your own): 
```
NODE_PORT=8080
REACT_APP_WEB_SERVER_URL=http://localhost:${NODE_PORT}
REACT_APP_PUBLISHABLE_KEY=pk_test_insert_your_own_stripe_api_publishable_key_here...
```
B. In the root of your `server` directory create a `.env` file and add the following (updating the `SECRET_KEY` with your own): 
```
NODE_PORT=8080
WEB_APP_URL=http://localhost:3000
GOOGLE_APPLICATION_CREDENTIALS="./service-account.json"
SECRET_KEY="sk_test_insert_your_own_stripe_api_secret_key_here..."
```
3. From the command line, in your `server` run `npm install` to install dependencies then `npm start` to start the server. You should see <a href="https://bit.ly/36KeUTY">this</a>.
4. From the command line, in your `client` directory run `npm install` to install dependencies then `npm start` to start the client. You should see <a href="https://bit.ly/3kDjbk0">this</a>.

### To add support for User Actions 4-7, follow steps 5 and 6.

5. From Firebase.com create a Firebase application and connect a Firestore Database and Authentication service.
6. Update service-account.json and client/src/firebase/index.js with your Firebase Credentials.

### To set up and run a remote version of the app (like on AWS, Digital Ocean, etc. on a public facing hostname of your choice) follow these additional steps.

7. In your server's `.env` file update the value of `WEB_APP_URL` to point to your <i><b>web server's</b></i> hostname.  For reference mine is set to https://books.motochristo.com. Note, this will work over http but it's recommended to run it over https for security purposes.

8. In your client's `.env` file update the value of `REACT_APP_WEB_SERVER_URL` to point to your <i><b>node server's</b></i> hostname.  For reference mine is set to https://node.motochristo.com.

9. Update the server configuration to map requests for port 8080 to the domain running node.  If needed, learn more <a href="https://www.twilio.com/blog/react-app-with-node-js-server-proxy">here</a>.

10. Follow Steps 3 and 4 from above to install the server and client dependencies and then start the server.

From here you should have a fully functional, responsive ecommerce web app running on a remote server.

# FAQ

Q: How does it work? Which Stripe APIs does it use? <br />
A: 
The app works 

Q: How did you approach this problem: which docs did you use to complete the project? What challenges did you encounter? <br />
A: (TBD - A paragraph or two)

https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Q: How you might extend this if you were building a more robust instance of the same application? <br />
A: (TBD - A paragraph or two)

# Questions, Comments or Compliments?

Please ping me...

@motochristo <br />
motochristo@gmail.com <br />
https://www.linkedin.com/in/christopherbroberts/
