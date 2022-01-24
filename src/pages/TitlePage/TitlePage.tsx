import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getTitle } from '../../store/title/title.slice';
import { TitleSection } from '../../modules/title/components/TitleSection/TitleSection';
import { RootState } from '../../store/root.reducer';
import { TitleObject } from '../../types/titleTypes';

export const TitlePage = () => {
    const dispatch = useDispatch();
    const title = useSelector((state: RootState) => state.title);

    const { id } = useParams();

    const { images, synopsis }: Partial<TitleObject> = title.data;

    useEffect(() => {
        dispatch(getTitle(id));
    }, [dispatch, id]);

    if (title.status === 'loaded')
        return <TitleSection images={images} synopsis={synopsis} />;
    if (title.status === 'idle') return <div />;
    if (title.status === 'loading') return <div>Loading</div>;
    if (title.status === 'error') return <div>Something went wrong</div>;
    else return null;
};
