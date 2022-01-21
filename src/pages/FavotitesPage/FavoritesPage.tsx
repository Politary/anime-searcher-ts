import { CustomButton } from '../../modules/common/components/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import { clearFavorites } from '../../store/favorites/favorites.slice';

export const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);

    const handleLog = () => {
        console.log(localStorage);
    };

    const handleClear = () => {
        dispatch(clearFavorites());
    };

    return (
        <div>
            <h3>Favorites</h3>
            <CustomButton handleSubmit={handleClear}>Clear</CustomButton>
            <CustomButton handleSubmit={handleLog}>
                Display state Keys
            </CustomButton>
            <ul>
                {favorites.list.map((item: number) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
