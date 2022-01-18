import React from 'react';
import { AppProps } from '../../types/types';

export const SearchBar: React.FC<AppProps> = ({
    value,
    handleChange,
    handleSubmit,
}) => {
    const handleInputSubmit = (
        e: React.KeyboardEvent<HTMLDivElement>
    ): void => {
        if (e.code === 'Enter' && handleSubmit) {
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
