import { CustomButton } from '../../modules/common/components/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import { clearFavorites } from '../../store/favorites/favorites.slice';
import { TitleObject } from '../../types/titleTypes';
import { CardRow } from '../../modules/common/components/CardRow/CardRow';

export const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);

    const handleLog = () => {
        console.log(favorites);
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
            <CardRow titles={favorites} wrapOption={true} />
        </div>
    );
};
