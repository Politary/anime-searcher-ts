import React from 'react';

export const SearchBar: React.FC<any> = ({
    value,
    handleChange,
    handleSubmit,
}) => {
    const handleInputSubmit = (e: React.FormEvent<EventTarget>): void => {
        // @ts-ignore
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
