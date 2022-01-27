import { FormEvent, useState, useEffect, useRef } from 'react';
import { OptionsSelect } from '../../../../types/types';
import { DropdownHead } from './Select.styles';

//@ts-ignore
function useOutsideAlerter(
    headRef: React.RefObject<Element>,
    optionsRef: React.RefObject<Element>,
    //@ts-ignore
    collapse
) {
    useEffect(() => {
        //@ts-ignore
        function handleClickOutside(event) {
            if (
                headRef.current &&
                optionsRef.current &&
                !headRef.current.contains(event.target) &&
                !optionsRef.current.contains(event.target)
            ) {
                collapse();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [headRef]);
}

export const DropdownSelect: React.FC<OptionsSelect> = ({
    handleChange,
    value,
    items,
}) => {
    const dropdownRef = useRef(null);
    const optionsRef = useRef(null);
    const [expanded, setExpanded] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>(value as string);

    const expand = () => {
        setExpanded(true);
        console.log('expand');
    };

    const collapse = () => {
        setExpanded(false);
        console.log('collapse');
    };

    useOutsideAlerter(dropdownRef, optionsRef, collapse);

    const valueSubmit = (value: FormEvent): void => {
        setSelected(value as any);
        handleChange(value);
        collapse();
    };

    return (
        <div className="dropdown">
            <DropdownHead onClick={expand} ref={dropdownRef}>
                {selected}
            </DropdownHead>
            <div ref={optionsRef}>
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
        </div>
    );
};
