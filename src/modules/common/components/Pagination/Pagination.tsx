import { SearchOptions } from '../../../../types/types';
import {
    PaginationButton,
    PaginationContainer,
    PaginationText,
} from './Pagination.styles';

import { ReactComponent as ArrowRight } from '../../../../assets/images/svg/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../../../assets/images/svg/arrow-left.svg';
import { useState } from 'react';

export const Pagination: React.FC<any> = ({ options, lastPage, setPage }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
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

    const toggleInput = () => {
        expanded ? setExpanded(false) : setExpanded(true);
    };

    return (
        <PaginationContainer>
            <PaginationButton
                onClick={goToPrevPage}
                disabled={options.page! === 1}
            >
                <ArrowLeft height="14px" width="14px" fill="#9098A2" />
            </PaginationButton>
            {expanded ? (
                <input type="text" value={options.page} />
            ) : (
                <PaginationText
                    onClick={toggleInput}
                >{`${options.page}/${lastPage}`}</PaginationText>
            )}
            <PaginationButton
                onClick={goToNextPage}
                disabled={options.page === lastPage}
            >
                <ArrowRight height="14px" width="14px" fill="#9098A2" />
            </PaginationButton>
        </PaginationContainer>
    );
};
