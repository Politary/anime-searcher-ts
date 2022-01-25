import { SearchOptions } from '../../../../types/types';
import { PaginationButton } from './Pagination.styles';

//@ts-ignore
import { ReactComponent as ArrowRight } from '../../../../assets/images/svg/arrow-right.svg';
//@ts-ignore
import { ReactComponent as ArrowLeft } from '../../../../assets/images/svg/arrow-left.svg';

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
            <PaginationButton
                onClick={goToPrevPage}
                disabled={options.page! === 1}
            >
                <ArrowLeft height="14px" width="14px" fill="#9098A2" />
            </PaginationButton>
            <span>{`${options.page}/${lastPage}`}</span>
            <PaginationButton
                onClick={goToNextPage}
                disabled={options.page === lastPage}
            >
                <ArrowRight height="14px" width="14px" fill="#9098A2" />
            </PaginationButton>
        </div>
    );
};
