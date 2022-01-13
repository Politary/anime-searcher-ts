import { Card } from '../Card/Card';
import { Row } from './CardRow.styles';
import { FetchOngoings } from '../../types/types';

interface OngoingsGrouped {
    ongoings: FetchOngoings;
}

export const CardRow: React.FC<OngoingsGrouped> = ({ ongoings }) => {
    return (
        <Row>
            {ongoings.list.length
                ? ongoings.list
                      .slice(0, 8)
                      .map((item) => (
                          <Card
                              title={item.title!.toString()}
                              key={item.mal_id}
                          />
                      ))
                : null}
        </Row>
    );
};
