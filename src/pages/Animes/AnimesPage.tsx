import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import { useEffect } from 'react';
import { getTitles } from '../../store/titles/titles.slice';
import { CardRow } from '../../components/CardRow/CardRow';

export const AnimesPage = () => {
    const dispatch = useDispatch();
    const titles = useSelector((state: RootState) => state.titles);

    const searchOptions = {
        type: 'anime',
        order_by: 'score',
        page: 1,
    };

    useEffect(() => {
        dispatch(getTitles(searchOptions));
    }, [dispatch]);

    return (
        <div>
            <h2>Ongoings</h2>
            <CardRow titles={titles} wrapOption={true} />
        </div>
    );
};
