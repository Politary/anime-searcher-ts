import { TitleObject } from '../types/titleTypes';

export const compareScore = (
    a: Partial<TitleObject>,
    b: Partial<TitleObject>
) => {
    if (a.score! < b.score!) {
        return -1;
    }
    if (a.score! > b.score!) {
        return 1;
    }
    return 0;
};
