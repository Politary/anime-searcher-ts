import { FormEvent, useEffect, useRef, useState } from 'react';
import { OptionsSelect } from '../../../../types/types';
import { SelectHead } from './Select.styles';

export const Select: React.FC<OptionsSelect> = ({
    handleChange,
    value,
    items,
}) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [selected, setSelected] = useState(value);

    const textInput = useRef(null);

    const expand = () => {
        setExpanded(true);
    };

    const collapse = () => {
        setExpanded(false);
    };

    const valueSubmit = (value: FormEvent): void => {
        handleChange(value);
        collapse();
        setSelected(value as any);
        console.log(this);
    };

    return (
        <div
            className="dropdown"
            tabIndex={0}
            onFocus={expand}
            onBlur={collapse}
        >
            <SelectHead value={value}>{value}</SelectHead>
            {expanded
                ? items.map((item) => (
                      <option
                          value={item.value}
                          key={item.value}
                          onClick={() => valueSubmit(item.value as any)}
                          ref={this}
                      >
                          {item.name}
                      </option>
                  ))
                : null}
        </div>
    );
};
