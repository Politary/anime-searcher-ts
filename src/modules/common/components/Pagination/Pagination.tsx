import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTitles } from '../../../../store/titles/titles.slice';

export const Pagination: React.FC<any> = ({
    options,
    pagination,
    lastPage,
    setPage,
}) => {
    const dispatch = useDispatch();

    const goToPrevPage = () => {
        setPage((prevState: any) => ({
            ...prevState,
            page: prevState.page - 1,
        }));
    };

    const goToNextPage = async () => {
        setPage((prevState: any) => ({
            ...prevState,
            page: prevState.page + 1,
        }));
    };

    return (
        <div>
            <button onClick={goToPrevPage}>{'<'}</button>
            <span>{`${options.page}/${lastPage}`}</span>
            <button onClick={goToNextPage}>{'>'}</button>
        </div>
    );
};
