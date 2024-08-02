// components/OrderSummary.tsx
import React from 'react';

interface OrderSummaryProps {
    items: { id: string; name: string; quantity: number }[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items }) => {
    return (
        <div className="border rounded-lg p-4 mb-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
            {items.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                    <hr></hr>
                    <p className="text-gray-600">Item ID: {item.id}</p>
                    <p className="text-gray-600">Item Name: {item.name}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
}

export default OrderSummary;
