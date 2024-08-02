import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const id = req.query.id;
        let items;
        if (id) {
            items = await query('SELECT * FROM items WHERE category_id = ?', [id]);
        } else {
            items = await query('SELECT * FROM items');
        }
        console.log(items);
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
