import { CustomButton } from '../../modules/common/components/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import {
    filterFavorites,
    clearFavorites,
} from '../../store/favorites/favorites.slice';

import { CardRow } from '../../modules/common/components/CardRow/CardRow';
import { SearchBar } from '../../modules/common/components/Searchbar/SearchBar';
import { DropdownSelect } from '../../modules/common/components/Select/DropdownSelect';
import { SearchContainer, Tools } from '../AnimesPage/AnimePage.styles';
import React, { useEffect, useState } from 'react';
import { SearchOptions } from '../../types/types';

export const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);

    const [searchOptions, setSearchOptions] = useState<Partial<SearchOptions>>({
        q: '',
        order_by: 'score',
    });
    const orderByItems = [];
    orderByItems.push(
        { name: 'Score', value: 'score' },
        { name: 'Title', value: 'title' },
        { name: 'Popularity', value: 'popularity' },
        { name: 'Start date', value: 'start_date' },
        { name: 'End date', value: 'end_date' }
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
        dispatch(filterFavorites(searchOptions));
    };

    const handleClear = () => {
        dispatch(clearFavorites());
    };

    useEffect(() => {
        dispatch(filterFavorites(searchOptions));
    }, [searchOptions]);

    return (
        <div>
            <SearchContainer>
                <h3>Favorites</h3>
                <SearchBar
                    value={searchOptions.q}
                    placeholder="Filter by Name"
                    handleChange={handleChange}
                    handleSubmit={handleSearch}
                />
                <DropdownSelect
                    handleChange={handleOrderByChange}
                    value={searchOptions.order_by}
                    items={orderByItems}
                />
            </SearchContainer>
            <Tools>
                <span>{`${favorites.filteredList.length} titles`}</span>
                <div />
            </Tools>
            {/*<CustomButton handleSubmit={handleClear}>Clear</CustomButton>*/}
            <CardRow list={favorites.filteredList} wrapOption={true} />
        </div>
    );
};
