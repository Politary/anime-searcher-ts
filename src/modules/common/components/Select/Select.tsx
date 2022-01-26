import { FormEvent, useState, useRef } from 'react';
import { OptionsSelect } from '../../../../types/types';
import { SelectHead } from './Select.styles';

export const Select: React.FC<OptionsSelect> = ({
    handleChange,
    value,
    items,
}) => {
    const dropdownRef = useRef(null);
    const [expanded, setExpanded] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>(value as string);

    const expand = () => {
        setExpanded(true);
    };

    const collapse = () => {
        setExpanded(false);
    };

    const valueSubmit = (value: FormEvent): void => {
        collapse();
        setSelected(value as any);
        handleChange(value);
        //@ts-ignore
        dropdownRef.current.blur();
    };

    return (
        <div
            className="dropdown"
            tabIndex={0}
            onFocus={expand}
            onBlur={collapse}
            ref={dropdownRef}
        >
            <SelectHead>{selected}</SelectHead>
            {expanded
                ? items.map((item) => (
                      <option
                          value={item.value}
                          key={item.value}
                          onClick={() => valueSubmit(item.value as any)}
                      >
                          {item.name}
                      </option>
                  ))
                : null}
        </div>
    );
};
