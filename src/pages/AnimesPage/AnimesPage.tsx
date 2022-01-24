import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import React, { useEffect, useState } from 'react';
import { getTitles } from '../../store/titles/titles.slice';
import { CardRow } from '../../modules/common/components/CardRow/CardRow';
import { CustomButton } from '../../modules/common/components/CustomButton/CustomButton';
import { SearchOptions } from '../../types/types';
import { OptionSelect } from '../../modules/common/components/OptionSelect/OptionSelect';
import { SearchBar } from '../../modules/common/components/Searchbar/SearchBar';
import { Pagination } from '../../modules/common/components/Pagination/Pagination';

export const AnimesPage = () => {
    const dispatch = useDispatch();
    const titles = useSelector((state: RootState) => state.titles);

    //@ts-ignore
    const lastPage = titles.pagination.last_visible_page;

    const [searchOptions, setSearchOptions] = useState<SearchOptions>({
        q: '',
        type: 'anime',
        order_by: 'score',
        sort: 'desc',
        page: 1,
    });
    const orderByItems = [];
    orderByItems.push(
        { name: 'Score', value: 'score' },
        { name: 'Title', value: 'title' },
        { name: 'Rating', value: 'rating' }
    );
    const sortItems = [];
    sortItems.push(
        { name: 'Descending', value: 'desc' },
        { name: 'Ascending', value: 'asc' }
    );

    const handleOrderByChange = (e: React.FormEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        setSearchOptions((prevState) => ({
            ...prevState,
            order_by: target.value,
        }));
    };

    const handleSortChange = (e: React.FormEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        setSearchOptions((prevState) => ({
            ...prevState,
            sort: target.value,
        }));
    };

    const handleChange = (e: React.FormEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        setSearchOptions((prevState) => ({
            ...prevState,
            q: target.value.toString(),
        }));
    };

    const handleSearch = () => {
        dispatch(getTitles(searchOptions));
    };

    useEffect(() => {
        dispatch(getTitles(searchOptions));
    }, [searchOptions]);

    let animeList;
    if (titles.status === 'loaded') {
        animeList = <CardRow titles={titles} wrapOption={true} />;
    }
    if (titles.status === 'idle') animeList = <div />;
    if (titles.status === 'loading') animeList = <div>Loading</div>;
    if (titles.status === 'error') animeList = <div>Something went wrong</div>;

    return (
        <div>
            <h2>Anime</h2>
            <form>
                <OptionSelect
                    handleChange={handleOrderByChange}
                    value={searchOptions.order_by}
                    items={orderByItems}
                />
                <OptionSelect
                    handleChange={handleSortChange}
                    value={searchOptions.sort}
                    items={sortItems}
                />
                <SearchBar
                    value={searchOptions.q}
                    handleChange={handleChange}
                    handleSubmit={handleSearch}
                />
            </form>
            <CustomButton handleSubmit={handleSearch}>Search</CustomButton>
            {animeList}
            {titles.status === 'loaded' ? (
                <Pagination
                    options={searchOptions}
                    lastPage={lastPage}
                    setPage={setSearchOptions}
                />
            ) : null}
        </div>
    );
};
