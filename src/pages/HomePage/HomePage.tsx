import { useDispatch, useSelector } from 'react-redux';
import { CardRow } from '../../components/CardRow/CardRow';
import { RootState } from '../../store/root.reducer';
import { useEffect } from 'react';

import { getTitles } from '../../store/titles/titles.slice';

export const HomePage = () => {
    const dispatch = useDispatch();
    const ongoings = useSelector((state: RootState) => state.titles);

    useEffect(() => {
        dispatch(getTitles());
    }, [dispatch]);

    return (
        <div>
            <h2>Ongoings</h2>
            <CardRow ongoings={ongoings} />
        </div>
    );
};
