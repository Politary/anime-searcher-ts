import React from 'react';
import { AppProps } from '../../../../types/types';
import { StyledSearchBar } from './SearchBar.styles';

export const SearchBar: React.FC<AppProps> = ({
    value,
    placeholder,
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
        <StyledSearchBar
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            onKeyDown={handleInputSubmit}
        />
    );
};
