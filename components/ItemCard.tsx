// components/ItemCard.tsx
import React from 'react';

interface ItemCardProps {
    name: string;
    description: string;
    price: number;
    onAddToOrder: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, description, price, onAddToOrder }) => {
    return (
        <div className="border rounded-lg p-4 mb-4 shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <h2 className="text-lg font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-gray-800 font-semibold">${price}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
                onClick={onAddToOrder}
            >
                Add to Order
            </button>
        </div>
    );
}

export default ItemCard;
