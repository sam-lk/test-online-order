// components/SaveOrderButton.tsx
import React from 'react';

interface SaveOrderButtonProps {
    onSave: () => void;
}

const SaveOrderButton: React.FC<SaveOrderButtonProps> = ({ onSave }) => {
    return (
        <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={onSave}
        >
            Save Order
        </button>
    );
}

export default SaveOrderButton;
