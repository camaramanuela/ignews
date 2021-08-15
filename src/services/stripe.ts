import Stripe from "stripe";

export const stripe = require('stripe')('sk_test_51JNqqsLWVU1Vlgl8r9tzHLNuPgJFDB90ElH7erY7W6NH1dHqelhXcXOVK0T8JIMB1lrL9xo8y6eIWEf6KEkuml6e00KE8hWfMz');


// export const stripe = new Stripe(
//   process.env.STRIPE_API_KEY,
//   {
//     apiVersion: '2020-08-27',
//     appInfo: {
//       name: 'Ĩgnews',
//       partner_id: 'acct_1JNqqsLWVU1Vlgl8',
//       version: '0.1.0'
//     },
//   }
// )
