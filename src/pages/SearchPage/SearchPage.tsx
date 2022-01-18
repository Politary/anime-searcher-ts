import { SearchBar } from '../../components/Searchbar/SearchBar';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import { getTitles, clearTitles } from '../../store/titles/titles.slice';
import React, { useEffect, useState } from 'react';
import { SearchOptions } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import { CardRow } from '../../components/CardRow/CardRow';

export const SearchPage = () => {
    const dispatch = useDispatch();
    const titles = useSelector((state: RootState) => state.titles);

    const [searchOptions, setSearchOptions] = useState<SearchOptions>({
        q: '',
        type: 'anime',
        order_by: 'score',
        page: 1,
    });

    const handleChange = (e: React.FormEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        setSearchOptions((prevState) => ({
            ...prevState,
            q: target.value.toString() as string,
        }));
    };

    const handleSearch = () => {
        console.log(searchOptions);
        dispatch(getTitles(searchOptions));
    };

    useEffect(() => {
        dispatch(clearTitles());
    }, []);

    return (
        <div>
            <SearchBar
                value={searchOptions.q}
                handleChange={handleChange}
                handleSubmit={handleSearch}
            />
            <SearchButton handleSearch={handleSearch}>Search</SearchButton>
            <CardRow titles={titles} />
        </div>
    );
};
