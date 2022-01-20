import { CustomButton } from '../../modules/common/components/CustomButton/CustomButton';
import { useCallback, useEffect, useState } from 'react';

export const FavoritesPage = () => {
    const [keys, setKeys] = useState<string[]>([]);

    const handleLog = () => {
        console.log(keys);
        console.log(localStorage);
    };

    const handleClear = () => {
        localStorage.clear();
        console.log(localStorage);
    };

    const mapFavorites = useCallback(() => {
        const keysArr = [];
        for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.key(i));
            //@ts-ignore
            keysArr.push(localStorage.key(i));
        }
        //@ts-ignore
        setKeys(keysArr);
    }, []);

    useEffect(() => {
        mapFavorites();
    }, []);

    return (
        <div>
            <h3>Favorites</h3>
            <CustomButton handleSubmit={handleClear}>Clear</CustomButton>
            <CustomButton handleSubmit={handleLog}>
                Display state Keys
            </CustomButton>
            <ul>
                {keys.map((item) => (
                    <div key={item}>{item}</div>
                ))}
            </ul>
        </div>
    );
};
