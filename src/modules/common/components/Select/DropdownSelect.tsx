import React, { useState, useEffect, useRef } from 'react';
import { IPosition, OptionsSelect } from '../../../../types/types';
import {
    DropdownBody,
    DropdownContainer,
    DropdownHead,
    DropdownItem,
} from './DropdownSelect.styles';
import { ReactComponent as ChevronDown } from '../../../../assets/images/svg/chevron-down.svg';
import { SvgContainer } from '../Card/Card.styles';

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
    const [bodyPosition, setBodyPosition] = useState<IPosition>({
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
    });

    const activeName = items.filter((obj) => {
        return obj.value === value;
    })[0].name;

    const mountBody = (dropdownRef: React.RefObject<Element>) => {
        const position = dropdownRef.current?.getBoundingClientRect();
        if (position) setBodyPosition(position);
    };

    const toggle = () => {
        expanded ? collapse() : expand();
    };

    const expand = () => {
        setExpanded(true);
        mountBody(dropdownRef);
    };

    const collapse = () => {
        setExpanded(false);
    };

    useOutsideCollapse(dropdownRef, optionsRef, collapse);

    const valueSubmit = (value: string): void => {
        handleChange(value);
        collapse();
    };

    return (
        <DropdownContainer className="dropdown">
            <DropdownHead onClick={toggle} ref={dropdownRef}>
                <span>{activeName}</span>
                <SvgContainer>
                    <ChevronDown fill="#616C7A" />
                </SvgContainer>
            </DropdownHead>
            {expanded ? (
                <DropdownBody ref={optionsRef} bodyPosition={bodyPosition}>
                    {expanded
                        ? items.map((item) => (
                              <DropdownItem
                                  activeValue={value}
                                  value={item.value}
                                  key={item.value}
                                  onClick={() => valueSubmit(item.value)}
                              >
                                  {item.name}
                              </DropdownItem>
                          ))
                        : null}
                </DropdownBody>
            ) : null}
        </DropdownContainer>
    );
};
