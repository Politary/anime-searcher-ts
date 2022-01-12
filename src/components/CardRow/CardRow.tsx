import { AnimeCard } from '../AnimeCard/AnimeCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import { getOngoings } from '../../store/ongoings/ongoings.slice';
import { useEffect } from 'react';
// @ts-ignore
import { Card } from '../Card/Card.tsx';
import { Row } from './CardRow.styles';

export const CardRow = () => {
    const dispatch = useDispatch();
    const ongoings = useSelector((state: RootState) => state.ongoings);

    useEffect(() => {
        dispatch(getOngoings());
    }, []);

    return (
        <Row>
            {ongoings.list.slice(0, 8).map((item) => (
                <Card title={item.title.toString()} key={item.mal_id} />
            ))}
        </Row>
    );
};
