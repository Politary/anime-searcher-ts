import { Card } from '../Card/Card';
import { Grid } from './CardRow.styles';
import { AppProps, FetchTitles } from '../../types/types';

interface OngoingsGrouped extends AppProps {
    titles: FetchTitles;
}

export const CardRow: React.FC<OngoingsGrouped> = ({ titles, wrapOption }) => {
    return (
        <Grid wrapOption={wrapOption}>
            {titles.list.length
                ? titles.list
                      // .slice(0, 8)
                      .map((item) => (
                          <Card
                              title={item.title!.toString()}
                              image_url={item.image_url}
                              key={item.mal_id}
                          />
                      ))
                : null}
        </Grid>
    );
};
