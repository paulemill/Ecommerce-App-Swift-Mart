# Summary

Built with React and styled using Tailwind CSS, this app fetches product data from the DummyJSON API and offers features like product search, filtering, and sorting. Users can manage their cart, proceed to checkout, and complete payments securely using Stripe. The app is deployed on Netlify, with the backend converted into Netlify Functions for payment processing.

# Deployed Link

https://ecommerce-swift-mart.netlify.app/

# Payment Testing Instructions

When testing interactively, use the following details:

### Test Card Number
- **4242 4242 4242 4242**

Enter this card number in the Stripe Dashboard or in any payment form.

### Expiry Date
- Use a valid future date, such as **12/34**.

### CVC
- Use any **three-digit CVC** (or **four digits** for American Express cards).

### Other Fields
- You can use any value for other form fields.

✅ These details can be used for simulating successful payments during testing.
