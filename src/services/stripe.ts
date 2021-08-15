import Stripe from "stripe";

export const stripe = require('stripe')(process.env.STRIPE_API_KEY);


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
