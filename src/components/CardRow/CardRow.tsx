// @ts-ignore
import { Card } from '../Card/Card.tsx';
import { Row } from './CardRow.styles';

export const CardRow = ({ ongoings }) => {
    return (
        <Row>
            {ongoings.list.slice(0, 8).map((item) => (
                <Card title={item.title.toString()} key={item.mal_id} />
            ))}
        </Row>
    );
};
