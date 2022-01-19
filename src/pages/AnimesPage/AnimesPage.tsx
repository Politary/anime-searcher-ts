import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import React, { useEffect, useState } from 'react';
import { getTitles } from '../../store/titles/titles.slice';
import { CardRow } from '../../modules/common/components/CardRow/CardRow';
import { CustomButton } from '../../modules/common/components/CustomButton/CustomButton';
import { SearchOptions } from '../../types/types';
import { OptionSelect } from '../../modules/common/components/OptionSelect/OptionSelect';

export const AnimesPage = () => {
    const dispatch = useDispatch();
    const titles = useSelector((state: RootState) => state.titles);

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

    const handleSearch = () => {
        dispatch(getTitles(searchOptions));
    };

    useEffect(() => {
        dispatch(getTitles(searchOptions));
    }, [dispatch]);

    if (titles.status === 'loaded')
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
                </form>
                <CustomButton handleSubmit={handleSearch}>Search</CustomButton>
                <CardRow titles={titles} wrapOption={true} />
            </div>
        );
    if (titles.status === 'idle') return <div />;
    if (titles.status === 'loading') return <div>Loading</div>;
    if (titles.status === 'error') return <div>Something went wrong</div>;
};
