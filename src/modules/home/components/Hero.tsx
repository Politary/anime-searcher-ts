import { HeroContainer } from './Hero.styles';
import React, { useEffect } from 'react';
import { getTitle } from '../../../store/title/title.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/root.reducer';
import { FetchTitles } from '../../../types/titleTypes';
import { AppProps } from '../../../types/types';
interface OngoingsGrouped extends AppProps {
    titles: FetchTitles;
}

export const Hero: React.FC<any> = ({ title }) => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     //@ts-ignore
    //     dispatch(getTitle(titles.list[0].mal_id));
    //     console.log(titles.list[0].mal_id);
    // }, [titles]);

    if (title.status === 'loaded')
        //@ts-ignore
        return <HeroContainer>{title.data.mal_id}</HeroContainer>;
    if (title.status === 'idle') return <div />;
    if (title.status === 'loading') return <div>Loading</div>;
    if (title.status === 'error') return <div>Something went wrong</div>;
    else return null;
};
