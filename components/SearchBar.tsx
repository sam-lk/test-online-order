// components/SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search items..."
                className="px-2 py-1 mr-2 rounded border"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
