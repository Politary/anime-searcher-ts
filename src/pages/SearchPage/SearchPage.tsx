import { SearchBar } from '../../components/Searchbar/SearchBar';
import { CustomButton } from '../../components/CustomButton/CustomButton';
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
        sort: 'desc',
        page: 1,
    });

    const handleChange = (e: React.FormEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        setSearchOptions((prevState) => ({
            ...prevState,
            q: target.value.toString(),
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
            <CustomButton handleSubmit={handleSearch}>Search</CustomButton>
            {/*<CardRow titles={titles} />*/}

            {(() => {
                if (titles.status === 'loaded') {
                    return <CardRow list={titles.list} />;
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
