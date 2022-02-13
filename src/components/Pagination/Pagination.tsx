import { SearchOptions } from '../../types/types';
import {
    PaginationButton,
    PaginationContainer,
    PaginationItem,
    PaginationList,
} from './Pagination.styles';
import React, { Dispatch, SetStateAction } from 'react';

import { ReactComponent as ArrowRight } from '../../assets/images/svg/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../assets/images/svg/arrow-left.svg';
import { useState } from 'react';

interface IPagination {
    options: SearchOptions;
    lastPage: number;
    setPage: Dispatch<SetStateAction<SearchOptions>>;
}

export const Pagination: React.FC<IPagination> = ({
    options,
    lastPage,
    setPage,
}) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const pages = [];
    for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
    }

    const goToPage = (e: React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        setPage((prevState: SearchOptions) => ({
            ...prevState,
            page: Number(target.id),
        }));
    };

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

    let renderedPageList;
    if (options.page > 0 && options.page <= 3)
        renderedPageList = pages.slice(0, 5).map((item) => (
            <PaginationItem
                key={item}
                id={item}
                onClick={goToPage}
                active={options.page === item}
            >
                {item}
            </PaginationItem>
        ));
    if (options.page > 3 && options.page <= lastPage - 3)
        renderedPageList = pages
            .slice(options.page - 3, options.page + 2)
            .map((item) => (
                <PaginationItem
                    key={item}
                    id={item}
                    onClick={goToPage}
                    active={options.page === item}
                >
                    {item}
                </PaginationItem>
            ));
    if (options.page > lastPage - 3 && options.page <= lastPage)
        renderedPageList = pages.slice(lastPage - 5, lastPage).map((item) => (
            <PaginationItem
                key={item}
                id={item}
                onClick={goToPage}
                active={options.page === item}
            >
                {item}
            </PaginationItem>
        ));

    return (
        <PaginationContainer>
            <PaginationButton
                onClick={goToPrevPage}
                disabled={options.page! === 1}
            >
                <ArrowLeft height="14px" width="14px" fill="#9098A2" />
            </PaginationButton>
            <PaginationList>{renderedPageList}</PaginationList>
            <PaginationButton
                onClick={goToNextPage}
                disabled={options.page === lastPage}
            >
                <ArrowRight height="14px" width="14px" fill="#9098A2" />
            </PaginationButton>
        </PaginationContainer>
    );
};
