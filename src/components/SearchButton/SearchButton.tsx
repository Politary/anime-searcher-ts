export const SearchButton: React.FC<any> = ({ handleSearch, children }) => {
    return <button onClick={handleSearch}>{children}</button>;
};
