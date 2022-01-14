import { useDispatch, useSelector } from 'react-redux';
import { CardRow } from '../../components/CardRow/CardRow';
import { RootState } from '../../store/root.reducer';
import { useEffect } from 'react';

import { getTitles } from '../../store/titles/titles.slice';
import { SearchOptions } from '../../types/types';

export const HomePage = () => {
    const dispatch = useDispatch();
    const ongoings = useSelector((state: RootState) => state.titles);

    const searchOptions = {
        type: 'anime',
        status: 'airing',
        order_by: 'score',
        limit: 8,
    };

    useEffect(() => {
        dispatch(getTitles(searchOptions));
    }, [dispatch]);

    return (
        <div>
            <h2>Ongoings</h2>
            <CardRow ongoings={ongoings} />
        </div>
    );
};
