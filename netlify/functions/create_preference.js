const { MercadoPagoConfig, Preference } = require('mercadopago');

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    try {
        const client = new MercadoPagoConfig({
            accessToken: process.env.VITE_MERCADOPAGO_ACCESS_TOKEN
        });

        const preference = new Preference(client);
        const body = JSON.parse(event.body);

        const result = await preference.create({
            body: {
                items: [
                    {
                        title: body.title,
                        unit_price: Number(body.price),
                        quantity: Number(body.quantity),
                        currency_id: 'PEN', // Adjust currency as needed
                    },
                ],
                back_urls: {
                    success: "https://apuflow.com/dashboard", // Replace with your actual success URL
                    failure: "https://apuflow.com/dashboard",
                    pending: "https://apuflow.com/dashboard",
                },
                auto_return: "approved",
            },
        });

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Allow CORS if needed
            },
            body: JSON.stringify({ id: result.id }),
        };

    } catch (error) {
        console.error('Error creating preference:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
        };
    }
};
