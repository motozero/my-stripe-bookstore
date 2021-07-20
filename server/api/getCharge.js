const stripeAPI = require('../stripe');
// const request = require('request');
const { pipeline } = require('stream');
const got = require('got');


async function getCharge(req, res) {
  
  console.log(req.body);

  const { body: { paymentIntentId } } = req;

  let chargeID;

//   var request = require('request');
/*   var options = {
    'method': 'GET',
    'url': 'https://api.stripe.com/v1/payment_intents/pi_1JDMnV2Q373pSPC1SHTkUQhp',
    'headers': {
      'Authorization': 'Basic c2tfdGVzdF81MTAzTzZKMlEzNzNwU1BDMXJWS1VyYzJhUk1DVzhLRkhOQkFwWFVtbXJVMU9NSjhURWRDZkozcTUxY0UxSGxRZGVQQWY2cTJzRjUzWGl3MnBwTExHNG5PdzAwYXFoaEVLUkk6',
      'Cookie': '__stripe_orig_props=%7B%22referrer%22%3A%22%22%2C%22landing%22%3A%22https%3A%2F%2Fstripe.com%2Fdocs%2Fapi%22%7D; cid=2d97ad93-1930-4fac-880d-0daae9e79596; lang=curl'
    }
  }; */

    const dataStream = got.stream({
      url: 'https://api.stripe.com/v1/payment_intents/' + paymentIntentId,
      headers: {
        'Authorization': 'Basic c2tfdGVzdF81MTAzTzZKMlEzNzNwU1BDMXJWS1VyYzJhUk1DVzhLRkhOQkFwWFVtbXJVMU9NSjhURWRDZkozcTUxY0UxSGxRZGVQQWY2cTJzRjUzWGl3MnBwTExHNG5PdzAwYXFoaEVLUkk6',
        'Cookie': '__stripe_orig_props=%7B%22referrer%22%3A%22%22%2C%22landing%22%3A%22https%3A%2F%2Fstripe.com%2Fdocs%2Fapi%22%7D; cid=2d97ad93-1930-4fac-880d-0daae9e79596; lang=curl'
       }
  });
  pipeline(dataStream, res, (err) => {
      if (err) {
          console.log(err);
          res.sendStatus(500);
      }
  });

    // res.status(200);

}




module.exports = getCharge;