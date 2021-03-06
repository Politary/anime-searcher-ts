import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import React, { useEffect, useState } from 'react';
import { getTitles } from '../../store/titles/titles.slice';
import { CardRow } from '../../components/CardRow/CardRow';
import { SearchOptions } from '../../types/types';
import { SearchBar } from '../../components/Searchbar/SearchBar';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchContainer, SearchTools, Tools } from './AnimePage.styles';
import { Loading } from '../../components/Layout/Layout.styles';
import { DropdownSelect } from '../../components/DropdownSelect/DropdownSelect';

export const AnimesPage: React.FC = () => {
    const dispatch = useDispatch();
    const titles = useSelector((state: RootState) => state.titles);

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

    let animeList = null;
    if (titles.status === 'loading') animeList = <Loading>Loading...</Loading>;
    if (titles.status === 'error') animeList = <div>Something went wrong</div>;
    if (titles.status === 'loaded') {
        animeList = <CardRow list={titles.list} wrapOption={true} />;
    }

    return (
        <div>
            <SearchContainer>
                <h2>Anime</h2>
                <SearchTools>
                    <SearchBar
                        value={searchOptions.q}
                        placeholder="Search by Name"
                        handleChange={handleChange}
                        handleSubmit={handleSearch}
                    />
                    <DropdownSelect
                        handleChange={handleOrderByChange}
                        value={searchOptions.order_by}
                        items={orderByItems}
                    />
                </SearchTools>
            </SearchContainer>
            {titles.status === 'loaded' && lastPage && titles.list.length ? (
                <Tools>
                    <span>{`${lastPage} pages`}</span>
                    <Pagination
                        options={searchOptions}
                        lastPage={lastPage}
                        setPage={setSearchOptions}
                    />
                </Tools>
            ) : null}
            {animeList}
            {titles.status === 'loaded' && lastPage && titles.list.length ? (
                <Tools>
                    <span>{`${lastPage} pages`}</span>
                    <Pagination
                        options={searchOptions}
                        lastPage={lastPage}
                        setPage={setSearchOptions}
                    />
                </Tools>
            ) : null}
        </div>
    );
};
