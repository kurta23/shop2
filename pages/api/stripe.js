import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['HR', 'DE', 'AL', 'AR', 'AU', 'BR', 'CN', 'CY', 'CZ', 'CU', 'EC', 'EG', 'EE', 'FI', 'FR', 'GI', 'GB', 'GE', 'GR', 'HU', 'IS', 'IN', 'ID', 'IE', 'IL', 'IT', 'JP', 'LT', 'LU', 'MK', 'MY', 'MV', 'ML', 'MT', 'MX', 'MC', 'MN', 'ME', 'NL', 'NO', 'PL', 'PT', 'QA', 'RU', 'SM', 'RS', 'SK', 'SI', 'ES', 'SE', 'CH', 'TR', 'US', 'UA', 'UY'],
        },
        shipping_options: [
          {shipping_rate: 'shr_1NXhCKBKUFdv47TESPeFZKdH'},
          {shipping_rate: 'shr_1NXhDDBKUFdv47TELydoulgJ'},
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/ztou4dvi/production/').replace('.png', '.webp');

          return {
            price_data: { 
              currency: 'usd',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
