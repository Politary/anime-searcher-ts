import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTitle } from '../../store/title/title.slice';
import { TitleSection } from '../../components/TitleSection/TitleSection';
import { RootState } from '../../store/root.reducer';

export const TitlePage = () => {
    const dispatch = useDispatch();
    const title = useSelector((state: RootState) => state.title);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getTitle(id));
    }, [dispatch]);

    return <TitleSection title={title} />;
};
