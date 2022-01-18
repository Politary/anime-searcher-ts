import { SearchBar } from '../../modules/common/components/Searchbar/SearchBar';
import { SearchButton } from '../../modules/common/components/SearchButton/SearchButton';
import { getTitles, clearTitles } from '../../store/titles/titles.slice';
import React, { useEffect, useState } from 'react';
import { SearchOptions } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import { CardRow } from '../../modules/common/components/CardRow/CardRow';

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
            <SearchButton handleSubmit={handleSearch}>Search</SearchButton>
            {/*<CardRow titles={titles} />*/}

            {(() => {
                if (titles.status === 'loaded') {
                    return <CardRow titles={titles} />;
                }
                if (titles.status === 'idle') {
                    return <div />;
                }
                if (titles.status === 'loading') {
                    return <div>Loading...</div>;
                }
                if (titles.status === 'error') {
                    return <div>Something went wrong</div>;
                }
            })()}
        </div>
    );
};
