import { Card } from '../Card/Card';
import { Grid } from './CardRow.styles';
import { AppProps } from '../../../../types/types';
import { FetchTitles } from '../../../../types/titleTypes';

interface OngoingsGrouped extends AppProps {
    titles: FetchTitles;
}

export const CardRow: React.FC<OngoingsGrouped> = ({ titles, wrapOption }) => {
    return (
        <Grid wrapOption={wrapOption}>
            {titles.list.length
                ? titles.list.map((item) => (
                      <Card
                          title={item.title!.toString()}
                          images={item.images}
                          key={item.mal_id}
                          mal_id={item.mal_id}
                      />
                  ))
                : null}
        </Grid>
    );
};
