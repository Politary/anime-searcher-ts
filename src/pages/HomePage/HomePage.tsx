import { useDispatch, useSelector } from 'react-redux';
import { CardRow } from '../../modules/common/components/CardRow/CardRow';
import { RootState } from '../../store/root.reducer';
import React, { useEffect } from 'react';

import { getTitles } from '../../store/titles/titles.slice';
import { Hero } from '../../modules/home/components/Hero';
import { getTitle } from '../../store/title/title.slice';

export const HomePage = () => {
    const dispatch = useDispatch();
    const ongoings = useSelector((state: RootState) => state.titles);
    const title = useSelector((state: RootState) => state.title);

    const searchOptions = {
        type: 'anime',
        status: 'airing',
        order_by: 'score',
        sort: 'desc',
        limit: 6,
        page: 1,
    };

    useEffect(() => {
        dispatch(getTitles(searchOptions));
        dispatch(getTitle(ongoings.list[0].mal_id));
    }, []);

    if (ongoings.status === 'loaded')
        return (
            <div>
                <Hero title={title} />
                <h2>Ongoings</h2>
                <CardRow titles={ongoings} wrapOption={false} />
            </div>
        );
    if (ongoings.status === 'loading' || 'idle') return <div>Loading</div>;
    if (ongoings.status === 'error') return <div>Something went wrong</div>;
    else return null;
};
