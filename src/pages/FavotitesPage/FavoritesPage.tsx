import { CustomButton } from '../../modules/common/components/CustomButton/CustomButton';

export const FavoritesPage = () => {
    const handleClear = () => {
        localStorage.clear();
        console.log(localStorage);
    };
    const handleAdd = () => {
        localStorage.setItem(Math.random().toString(), 'something');
        console.log(localStorage);
    };

    return (
        <div>
            <h3>Favorites</h3>
            <CustomButton handleSubmit={handleClear}>Clear</CustomButton>
            <CustomButton handleSubmit={handleAdd}>Add</CustomButton>
        </div>
    );
};
