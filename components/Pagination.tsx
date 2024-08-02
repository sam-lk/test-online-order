// components/Pagination.tsx
import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map((page) => page + 1);

    return (
        <div className="flex mt-4">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-4 py-2 mr-2 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        } hover:bg-gray-300`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
