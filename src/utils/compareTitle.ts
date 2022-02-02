import { TitleObject } from '../types/titleTypes';

export const compareTitle = (
    a: Partial<TitleObject>,
    b: Partial<TitleObject>
) => {
    if (a.title! < b.title!) {
        return -1;
    }
    if (a.title! > b.title!) {
        return 1;
    }
    return 0;
};
