# My Stripe Bookstore

### What is this?

This is an easily customizable, responsive, ecommerce web app using Stripe for managing payments and storing credit cards for future use.

The base tech stack is Stripe, Node, React and Express.  This supports the complete shopping and checkout user experiences.  The extended tech stack includes a Firestore Database and a related Authentication service, both cloud services provided by Google via Firebase.com.  This extends the user experience to include buyer sign-up/sign-in/sign-out, and buying with a saved card.

### User Actions (<a href="https://bit.ly/3wXibtN">Video Walkthrough</a>)
1. Select one or more books to purchase.
2. Checkout and purchase the item using Stripe Elements.
3. Display a confirmation of purchase to the user with the total amount of the charge and Stripe charge ID (beginning with ch_).
4. Sign Up to create an account.
5. Sign In and Out of created account.
6. If signed in, during a purchase save a credit card number for use in a future transaction.
7. If signed in, during a purchase use a previously saved credit card.

### Prequisties
* Server running node, react, express
* A terminal tool, I use iTerm2
* Google Account, you can open a new one for this project in a couple of clicks if you need to.
* Stripe.com Account (free for testing)
* Firebase.com Acccount (free for testing)

### Installation
  
1. To clone this repo and install `client` and `server` dependencies respectively run...

```
git clone https://github.com/motozero/bookstore
cd bookstore/client
npm i
cd ../server
npm i
```
  
2. Update the Stripe API Keys. If needed, learn more <a href="https://bit.ly/2V2NAgQ">here</a>.

A. In the root of your `client` directory create a `.env` file and add the following (updating the `REACT_APP_PUBLISHABLE_KEY` with your own): 
```
NODE_PORT=8080
REACT_APP_WEB_SERVER_URL=http://localhost:${NODE_PORT}
REACT_APP_PUBLISHABLE_KEY=pk_test_goes_here
```
B. In the root of your `server` directory create a `.env` file and add the following (updating the `SECRET_KEY` with your own): 
```
NODE_PORT=8080
WEB_APP_URL=http://localhost:3000
GOOGLE_APPLICATION_CREDENTIALS="./service-account.json"
SECRET_KEY="sk_test_goes_here"
```

3. From Firebase.com create a project and an app and connect a Firestore NoSQL Database and an Authentication service.  From within your Firebase Project, go to Project Settings to find the Firebase JSON object you'll need to include in client/src/firebase/index.js.  Next create a JSON file with your Firebase Private Key, rename it to `service-account.json` and add it to your `server` root directory.
  
4. From the `server` directory run `npm start` to start the node server and then from the `client` directory run `npm start` to start the app server.

From here you should have a fully functional, responsive ecommerce web app running on a local server.

# FAQ

  ### Q: How does it work? Which Stripe APIs does it use? (<a href="https://bit.ly/36TuYCI">Video Walkthrough</a>)<br />
  
This <a href="https://bit.ly/3Bo2oHN">Diagram</a> outlines the checkout process that is at the core of User Actions 1-3.

<a href=”https://reactjs.org/”>React</a> is used to manage the client side of the app. This includes displaying the responsive web bookstore and keeping track of the app’s state as a user adds/removes items to/from the cart and goes through the checkout process.

When a user (aka a “customer” according to the diagram) clicks “checkout” their browser navigates to a /checkout page where they are prompted to enter their Shipping data and click “Continue”.

Once completed, the user sees a new empty form prompting them to enter their credit card data next.

At the same time React on the front end calls the node server on the back end and basically tells it “hey this user is about to make a purchase, ping Stripe’s API to create a Payment Intent instance and get back a Client Secret”. Then the Node server does so and passes the Client Secret back to React.

Next the user enters their credit card data and clicks “Pay”. At this point the React front end takes the credit card data, encrypts it and sends it to Stripe from the user’s browser coupled with the Client Secret.

Stripe takes the Client Secret, the Credit Card data and the amount to run the transaction. Upon a successful transaction Stripe returns a successful confirmation to the React front end. 

Then the React front end navigates to the /success page with the Payment Intent ID in the URL. This success page contains code to ping Stripe’s Payment Intent API to confirm the charge and to retrieve the amount and Charge ID of the transaction which both get displayed on the /success page.

### Q: How did you approach this problem: which docs did you use to complete the project? What challenges did you encounter?

First I watched and built along with <a href="https://www.udemy.com/course/stripe-masterclass-with-react-node/">this tutorial</a>. Next I dove deeper into React, Node, and Stripe. Once I had a local version working as expected for the most part I tried hosting it remotely in many different environments (including Netlify, Vercel, Github Pages, AWS and Linode) before eventually settling on Digital Ocean running Ubuntu 20.04. Next I found and employed a React/Node tutor on fiverr.com to streamline my learning and to pair program through building out functionality not included in the tutorial such as displaying the Charge ID.

Here are a few of the many docs I found very helpful: 
* https://www.udemy.com/course/stripe-masterclass-with-react-node
* https://stripe.com/docs/api/payment_intents
* https://stripe.com/docs/api/charges
* https://stripe.com/docs/payments/payment-intents
* https://stripe.com/docs/payments/accept-a-payment?platform=web&ui=elements
* https://stripe.com/blog/stripe-extension-for-vs-code
* https://github.com/stripe/react-stripe-js
* https://github.com/stripe/stripe-postman
* https://github.com/stripe/vscode-stripe
* https://www.youtube.com/watch?v=w1oLdAPyuok ("React Stripe.js" by Thomas Marek)
* https://www.youtube.com/watch?v=5y5WwF9s-ZI ("Getting started with React Stripe.js" by CJ Avilla)
* https://www.youtube.com/watch?v=IhvtIbfDZJI ("Accept a card payment with React Stripe.js" by CJ Avilla)
* https://www.youtube.com/watch?v=w7ejDZ8SWv8 ("React JS Crash Course 2021" by Traversy Media)

### Q: How you might extend this if you were building a more robust instance of the same application?

1. Use a Webhook to email a receipt.
2. Use a Webhook to trigger a fullfillment via a trusted 3rd party vendor.
3. Integrate more payment methods to support Apple Pay, Google Pay and international payment methods.
4. Turn this into a Server Side Rendered app using Next.js or Static Site via Gatsbyjs for performance and better SEO
5. Add in Stripe's Fraud protection
6. Port to React Native for support on iOS and Android
7. Update the product list to sell my kids' artwork to friends and family to contribute to their college funds like a next gen Lemonade Stand!
  
# Questions, Comments or Compliments? Ping me anytime.

@motochristo <br />
motochristo@gmail.com <br />
