import { Card } from '../Card/Card';
import { Grid } from './CardRow.styles';
import { AppProps } from '../../types/types';
import { TitleObject, TitleObjectMin } from '../../types/titleTypes';

interface OngoingsGrouped extends AppProps {
    list: TitleObjectMin[];
}

export const CardRow: React.FC<OngoingsGrouped> = ({ list, wrapOption }) => {
    if (list.length)
        return (
            <Grid wrapOption={wrapOption}>
                {list.map((item) => (
                    <Card
                        title={item.title!.toString()}
                        images={item.images}
                        score={item.score}
                        key={item.mal_id}
                        type={item.type}
                        duration={item.duration}
                        mal_id={item.mal_id}
                    />
                ))}
            </Grid>
        );
    else return null;
};
