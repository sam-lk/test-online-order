// pages/product/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';

const ProductDetailsPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    // Fetch product details based on the id parameter

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-4">Product Details</h1>
            <p>Product ID: {id}</p>
            {/* Display product details */}
        </div>
    );
};

export default ProductDetailsPage;
