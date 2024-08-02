// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-xl font-semibold">
                    Online Store
                </Link>
                <div>
                    <Link href="/categories" className="text-white mr-4">
                        Categories
                    </Link>
                    <Link href="/orders" className="text-white">
                        Order Summary
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
