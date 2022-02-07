import { CustomButton } from '../../modules/common/components/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import {
    filterFavorites,
    // setSearchOptions,
    setSearchQuery,
    setSearchOrder,
} from '../../store/favorites/favorites.slice';

import { CardRow } from '../../modules/common/components/CardRow/CardRow';
import { SearchBar } from '../../modules/common/components/Searchbar/SearchBar';
import { DropdownSelect } from '../../modules/common/components/Select/DropdownSelect';
import {
    SearchContainer,
    SearchTools,
    Tools,
} from '../AnimesPage/AnimePage.styles';
import React, { useEffect } from 'react';

export const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);

    const orderByItems = [];
    orderByItems.push(
        { name: 'Score', value: 'score' },
        { name: 'Title', value: 'title' },
        { name: 'Popularity', value: 'popularity' },
        { name: 'Start date', value: 'start_date' },
        { name: 'End date', value: 'end_date' }
    );

    const handleOrderByChange = (value: string): void => {
        dispatch(setSearchOrder(value));
    };

    const handleChange = (e: React.FormEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        dispatch(setSearchQuery(target.value.toString()));
    };

    const handleSearch = () => {
        dispatch(filterFavorites(favorites.options));
    };

    useEffect(() => {
        dispatch(filterFavorites(favorites.options));
    }, [favorites.options]);

    return (
        <div>
            <SearchContainer>
                <h2>Favorites</h2>
                <SearchTools>
                    <SearchBar
                        value={favorites.options.q}
                        placeholder="Filter by Name"
                        handleChange={handleChange}
                        handleSubmit={handleSearch}
                    />
                    <DropdownSelect
                        handleChange={handleOrderByChange}
                        value={favorites.options.order_by}
                        items={orderByItems}
                    />
                </SearchTools>
            </SearchContainer>
            <Tools>
                <span>{`${favorites.filteredList.length} titles`}</span>
                <div />
            </Tools>
            <CardRow list={favorites.filteredList} wrapOption={true} />
        </div>
    );
};
