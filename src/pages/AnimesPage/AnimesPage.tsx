import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import React, { useEffect, useState } from 'react';
import { getTitles } from '../../store/titles/titles.slice';
import { CardRow } from '../../components/CardRow/CardRow';
import { SearchBar } from '../../components/Searchbar/SearchBar';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import { SearchOptions } from '../../types/types';
import { OptionSelect } from '../../components/OptionSelect/OptionSelect';

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

    const handleOrderByChange = (e: React.FormEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        // @ts-ignore
        setSearchOptions((prevState) => ({
            ...prevState,
            order_by: target.value as any,
        }));
    };

    const handleSearch = () => {
        console.log('handleSearch');
        // dispatch(getTitles(searchOptions));
    };

    useEffect(() => {
        dispatch(getTitles(searchOptions));
    }, [dispatch, searchOptions]);

    if (titles.status === 'loaded')
        return (
            <div>
                <h2>Anime</h2>
                <form>
                    <OptionSelect
                        handleChange={handleOrderByChange}
                        value={searchOptions.order_by}
                    />
                </form>
                <SearchButton handleSearch={handleSearch}>Search</SearchButton>
                <CardRow titles={titles} wrapOption={true} />
            </div>
        );
    if (titles.status === 'loading' || 'idle') return <div>Loading</div>;
    if (titles.status === 'error') return <div>Something went wrong</div>;
};
