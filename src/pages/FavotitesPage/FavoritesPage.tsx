import { CustomButton } from '../../modules/common/components/CustomButton/CustomButton';

export const FavoritesPage = () => {
    const handleClear = () => {
        localStorage.clear();
        console.log(localStorage);
    };
    let i = 1;
    const handleAdd = () => {
        localStorage.setItem(Math.random().toString(), 'something');
    };
    const handleLog = () => {
        console.log(localStorage);
    };

    return (
        <div>
            <h3>Favorites</h3>
            <CustomButton handleSubmit={handleClear}>Clear</CustomButton>
            <CustomButton handleSubmit={handleAdd}>Add</CustomButton>
            <CustomButton handleSubmit={handleLog}>Log</CustomButton>
        </div>
    );
};
