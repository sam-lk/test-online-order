// pages/index.tsx
import React, { useState, useEffect } from 'react';
import CategoryButton from '@/components/CategoryButton';
import ItemCard from '@/components/ItemCard';
import OrderSummary from '@/components/OrderSummary';
import SaveOrderButton from '@/components/SaveOrderButton';
import Navbar from '@/components/Navbar';

const Home: React.FC = () => {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState({ categories: false, items: false });
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCategories();
        fetchItems();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fetchCategories = async () => {
        setLoading((prevLoading) => ({ ...prevLoading, categories: true }));
        try {
            const res = await fetch('/api/categories');
            const data = await res.json();
            console.log('fetchCategories');
            console.log(data);
            setCategories(data);
        } catch (error) {
            setError('Error fetching categories');
        } finally {
            setLoading((prevLoading) => ({ ...prevLoading, categories: false }));
        }
    };

    const fetchItems = async () => {
        setLoading((prevLoading) => ({ ...prevLoading, items: true }));
        try {
            const res = await fetch(`/api/items${selectedCategory ? `?categoryId=${selectedCategory}` : ''}&page=${page}`);
            const data = await res.json();
            console.log('fetchItems');
            console.log(data);
            setItems((prevItems) => [...prevItems, ...data]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            setError('Error fetching items');
        } finally {
            setLoading((prevLoading) => ({ ...prevLoading, items: false }));
        }
    };

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(categoryId);
        setItems([]);
        setPage(1);
        fetchItems();
    };

    const handleAddToOrder = (item: any) => {
        const existingItem = orderItems.find((orderItem) => orderItem.id === item.id);
        if (existingItem) {
            setOrderItems(orderItems.map((orderItem) =>
                orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
            ));
        } else {
            setOrderItems([...orderItems, { ...item, quantity: 1 }]);
        }
    };

    const handleSaveOrder = async () => {
        try {
            const res = await fetch('/api/saveOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: orderItems }),
            });
            if (res.ok) {
                console.log('Order saved successfully');
                setOrderItems([]);
            } else {
                console.error('Error saving order:', res.statusText);
            }
        } catch (error) {
            console.error('Error saving order:', error.message);
        }
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        ) {
            if (!loading.items && !error) {
                fetchItems();
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-gray-800 text-white py-4 px-8">
                <h1 className="text-3xl font-semibold">Online Store 1</h1>
            </header>
            <Navbar />

            <main className="flex-grow container mx-auto py-8">
                <div className="flex flex-wrap mb-4">
                    {categories.map((category: any) => (
                        <CategoryButton
                            key={category.id}
                            name={category.name}
                            onClick={() => handleCategoryClick(category.id)}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map((item: any) => (
                        <ItemCard
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            onAddToOrder={() => handleAddToOrder(item)}
                        />
                    ))}
                </div>


                <OrderSummary items={orderItems} />

                <SaveOrderButton onSave={handleSaveOrder} />

            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 px-8 mt-auto">
                <div className="container mx-auto">
                    <p className="text-center">&copy; 2024 Online Store. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
