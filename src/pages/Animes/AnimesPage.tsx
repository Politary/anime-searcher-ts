import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import React, { useEffect, useState } from 'react';
import { getTitles } from '../../store/titles/titles.slice';
import { CardRow } from '../../components/CardRow/CardRow';
import { SearchBar } from '../../components/Searchbar/SearchBar';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import { SearchOptions } from '../../types/types';

export const AnimesPage = () => {
    const dispatch = useDispatch();
    const titles = useSelector((state: RootState) => state.titles);

    const [inputValue, setInputValue] = useState<string | null>('');
    const [searchOptions, setSearchOptions] = useState<SearchOptions>({
        q: '',
        type: 'anime',
        order_by: 'score',
        page: 1,
    });

    useEffect(() => {
        dispatch(getTitles(searchOptions));
    }, [dispatch]);

    const handleChange = (e: React.FormEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        setInputValue(target.value);
        console.log(searchOptions.q);
        // @ts-ignore
        setSearchOptions({ q: inputValue });
        console.log(searchOptions);
    };

    const handleSearch = () => {
        console.log('handleSearch');
        dispatch(getTitles(searchOptions));
    };

    return (
        <div>
            <h2>Anime</h2>
            <SearchBar handleChange={handleChange} />
            <SearchButton handleSearch={handleSearch}>Search</SearchButton>
            <CardRow titles={titles} wrapOption={true} />
        </div>
    );
};
