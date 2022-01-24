import { SearchOptions } from '../../../../types/types';

export const Pagination: React.FC<any> = ({ options, lastPage, setPage }) => {
    const goToPrevPage = () => {
        setPage((prevState: SearchOptions) => ({
            ...prevState,
            page: prevState.page - 1,
        }));
    };

    const goToNextPage = () => {
        setPage((prevState: SearchOptions) => ({
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
