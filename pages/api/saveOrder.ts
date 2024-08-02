// pages/api/saveOrder.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function saveOrder(req: NextApiRequest, res: NextApiResponse) {
    // Handle the request logic here
    if (req.method === 'POST') {
        // Process the order data
        res.status(200).json({ message: 'Order saved successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
