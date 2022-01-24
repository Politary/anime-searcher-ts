export const Pagination: React.FC<any> = ({
    options,
    pagination,
    lastPage,
    setPage,
}) => {
    console.log(options.page);
    console.log(pagination);
    if (pagination)
        return (
            <div>
                <button onClick={() => console.log(lastPage)}>{'<'}</button>
                <span>{`${options.page}/${lastPage}`}</span>
                <button onClick={() => console.log(options.page)}>{'>'}</button>
            </div>
        );
    else return null;
};
