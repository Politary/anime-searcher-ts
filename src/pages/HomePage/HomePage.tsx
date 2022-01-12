import { useDispatch, useSelector } from 'react-redux';
//@ts-ignore
import { CardRow } from '../../components/CardRow/CardRow.tsx';

export const HomePage = () => {
    // const dispatch = useDispatch();
    // const weather = useSelector((state) => state.weather);

    return (
        <div>
            <h2>Ongoings</h2>
            <CardRow />
        </div>
    );
};
