import { SearchOptions } from '../../../../types/types';
import {
    PaginationButton,
    PaginationContainer,
    PaginationText,
} from './Pagination.styles';
import React, { Dispatch, SetStateAction } from 'react';

import { ReactComponent as ArrowRight } from '../../../../assets/images/svg/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../../../assets/images/svg/arrow-left.svg';
import { useState } from 'react';
import { Card } from '../Card/Card';

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
    const [itemsPerPage, setitemsPerPage] = useState<number>(5);

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

    const toggleInput = () => {
        expanded ? setExpanded(false) : setExpanded(true);
    };

    const renderedPageList = pages
        .slice(options.page - 1, options.page + 4)
        .map((item) => (
            <li key={item} id={item as any} onClick={goToPage}>
                {item}
            </li>
        ));

    const renderedFirstPages = pages.slice(0, 2).map((item) => (
        <li key={item} id={item as any} onClick={goToPage}>
            {item}
        </li>
    ));

    const renderedLastPages = pages
        .slice(lastPage - 2, lastPage)
        .map((item) => (
            <li key={item} id={item as any} onClick={goToPage}>
                {item}
            </li>
        ));

    return (
        <PaginationContainer>
            <PaginationButton
                onClick={goToPrevPage}
                disabled={options.page! === 1}
            >
                <ArrowLeft height="14px" width="14px" fill="#9098A2" />
            </PaginationButton>
            <PaginationText
                onClick={toggleInput}
            >{`${options.page}/${lastPage}`}</PaginationText>
            {renderedFirstPages}
            ...
            {renderedPageList}
            ...
            {renderedLastPages}
            <PaginationButton
                onClick={goToNextPage}
                disabled={options.page === lastPage}
            >
                <ArrowRight height="14px" width="14px" fill="#9098A2" />
            </PaginationButton>
        </PaginationContainer>
    );
};
