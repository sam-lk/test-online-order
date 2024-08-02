import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const categories = await query('SELECT * FROM categories');
        console.log(categories);
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
