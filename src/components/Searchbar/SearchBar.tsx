import React, { useState } from 'react';

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState<string | null>('');

    const handleChange = (e: React.FormEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        setInputValue(target.value);
        console.log(inputValue);
    };

    return <input type="text" onChange={handleChange} />;
};
