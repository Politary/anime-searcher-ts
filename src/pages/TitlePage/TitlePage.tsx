import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getTitle } from '../../store/title/title.slice';
import { TitleSection } from '../../components/TitleSection/TitleSection';
import { RootState } from '../../store/root.reducer';

export const TitlePage = () => {
    const dispatch = useDispatch();
    const title = useSelector((state: RootState) => state.title);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getTitle(id));
    }, [dispatch, id]);

    if (title.status === 'loaded') return <TitleSection title={title} />;
    if (title.status === 'idle') return <div />;
    if (title.status === 'loading') return <div>Loading</div>;
    if (title.status === 'error') return <div>Something went wrong</div>;
};
