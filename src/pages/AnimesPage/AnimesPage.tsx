import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import React, { useEffect, useState } from 'react';
import { getTitles } from '../../store/titles/titles.slice';
import { CardRow } from '../../modules/common/components/CardRow/CardRow';
import { SearchOptions } from '../../types/types';
import { OptionSelect } from '../../modules/common/components/OptionSelect/OptionSelect';
import { SearchBar } from '../../modules/common/components/Searchbar/SearchBar';
import { Pagination } from '../../modules/common/components/Pagination/Pagination';
import { SearchContainer, Tools } from './AnimePage.styles';
import { Loading } from '../../modules/layout/components/Layout/Layout.styles';
import { DropdownSelect } from '../../modules/common/components/Select/DropdownSelect';

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
        { name: 'Popularity', value: 'popularity' },
        { name: 'Start date', value: 'start_date' },
        { name: 'End date', value: 'end_date' }
    );
    const sortItems = [];
    sortItems.push(
        { name: 'Descending', value: 'desc' },
        { name: 'Ascending', value: 'asc' }
    );

    const handleOrderByChange = (value: string): void => {
        setSearchOptions((prevState) => ({
            ...prevState,
            order_by: value,
        }));
    };

    const handleSortChange = (value: string): void => {
        setSearchOptions((prevState) => ({
            ...prevState,
            sort: value,
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
    if (titles.status === 'idle') animeList = null;
    if (titles.status === 'loading') animeList = <Loading>Loading</Loading>;
    if (titles.status === 'error') animeList = <div>Something went wrong</div>;

    return (
        <div>
            <SearchContainer>
                <h2>Anime</h2>
                <SearchBar
                    value={searchOptions.q}
                    handleChange={handleChange}
                    handleSubmit={handleSearch}
                />
                <DropdownSelect
                    handleChange={handleOrderByChange}
                    value={searchOptions.order_by}
                    items={orderByItems}
                />
                <DropdownSelect
                    handleChange={handleSortChange}
                    value={searchOptions.sort}
                    items={sortItems}
                />
            </SearchContainer>
            {titles.status === 'loaded' ? (
                <Tools>
                    <span>{`${lastPage * 25} titles`}</span>
                    <Pagination
                        options={searchOptions}
                        lastPage={lastPage}
                        setPage={setSearchOptions}
                    />
                </Tools>
            ) : null}
            {animeList}
        </div>
    );
};
