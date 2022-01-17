import { OptionsSelect } from '../../types/types';

export const OptionSelect: React.FC<OptionsSelect> = ({
    handleChange,
    value,
    items,
}) => {
    return (
        <select onChange={handleChange} name={'Sort by'} value={value}>
            {items.map((item) => (
                <option value={item.value} key={item.value}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};
