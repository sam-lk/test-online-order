// components/CategoryButton.tsx
import React from 'react';

interface CategoryButtonProps {
    name: string;
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, onClick }) => {
    return (
        <button
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 mb-2 hover:bg-gray-300"
            onClick={onClick}
        >
            {name}
        </button>
    );
}

export default CategoryButton;
