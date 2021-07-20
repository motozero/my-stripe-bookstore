const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const createCheckoutSession = require('./api/checkout');
const paymentIntent = require('./api/paymentIntent');
const decodeJWT = require('./auth/decodeJWT');
const setupIntent = require('./api/setupIntent');
const validateUser = require('./auth/validateUser');
const getCards = require('./api/getPaymentMethod');
const updatePaymentIntent = require('./api/updatePaymentIntent');
const getCharge = require('./api/getCharge');

const app = express();
const port = process.env.NODE_PORT;

app.use(express.json({
  verify: (req, res, buffer) => req['rawBody'] = buffer, 
}));

app.use(cors({ origin: true }));

app.use(decodeJWT);

app.post('/getcharge', getCharge); // Added by Christo

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/create-checkout-session', createCheckoutSession);

app.post('/create-payment-intent', paymentIntent);

app.post('/save-payment-method', validateUser, setupIntent);

app.get('/get-payment-methods', validateUser, getCards);

app.put('/update-payment-intent', validateUser, updatePaymentIntent);

app.listen(port, () => console.log('server listening on port', port));