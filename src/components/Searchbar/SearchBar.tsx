import React from 'react';

export const SearchBar: React.FC<any> = ({
    value,
    handleChange,
    handleSubmit,
}) => {
    const handleInputSubmit = (
        e: React.KeyboardEvent<HTMLDivElement>
    ): void => {
        if (e.code === 'Enter') {
            console.log('Enter');
            handleSubmit();
        }
    };

    return (
        <input
            type="text"
            onChange={handleChange}
            value={value}
            onKeyDown={handleInputSubmit}
        />
    );
};
