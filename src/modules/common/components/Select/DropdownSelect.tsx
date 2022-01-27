import React, { FormEvent, useState, useEffect, useRef } from 'react';
import { OptionsSelect } from '../../../../types/types';
import {
    DropdownBody,
    DropdownContainer,
    DropdownHead,
} from './DropdownSelect.styles';

function useOutsideCollapse(
    headRef: React.RefObject<Element>,
    optionsRef: React.RefObject<Element>,
    collapse: () => void
) {
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            let target = e.target as HTMLInputElement;
            if (
                headRef.current &&
                optionsRef.current &&
                !headRef.current.contains(target) &&
                !optionsRef.current.contains(target)
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

    const activeName = items.filter((obj) => {
        return obj.value === selected;
    })[0].name;

    const expand = () => {
        setExpanded(true);
        console.log('expanded');
    };

    const collapse = () => {
        setExpanded(false);
        console.log('collapsed');
    };

    useOutsideCollapse(dropdownRef, optionsRef, collapse);

    const valueSubmit = (value: FormEvent): void => {
        setSelected(value as any);
        handleChange(value);
        collapse();
    };

    return (
        <DropdownContainer className="dropdown">
            <DropdownHead onClick={expand} ref={dropdownRef}>
                {activeName}
            </DropdownHead>
            <DropdownBody ref={optionsRef}>
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
            </DropdownBody>
        </DropdownContainer>
    );
};
