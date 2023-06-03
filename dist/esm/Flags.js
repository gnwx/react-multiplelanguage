import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from './useLanguage';
const ChangeLangWrapper = styled.div `
    display: inline-block;
`;
const Button = styled.button `
    background-color: ${({ selected }) => (selected ? '#ECECEC' : '#EBEBEB')};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: ${({ size }) => {
    switch (size) {
        case 'sm':
            return '12px';
        case 'md':
            return '16px';
        case 'lg':
            return '20px';
        default:
            return '14px';
    }
}};
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor || '#e5e5e5'};
`;
const Flag = styled.span `
    margin-right: 5px;
`;
const LanguageList = styled.div `
    margin-top: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    max-height: 200px;
    overflow-y: auto;
    font-size: ${({ size }) => {
    switch (size) {
        case 'sm':
            return '12px';
        case 'md':
            return '14px';
        case 'lg':
            return '16px';
        default:
            return '14px';
    }
}};
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
`;
const LanguageButton = styled.button `
    display: block;
    width: 100%;
    padding: 8px;
    border: none;
    cursor: pointer;
    text-align: left;
    font-size: ${({ size }) => {
    switch (size) {
        case 'sm':
            return '12px';
        case 'md':
            return '14px';
        case 'lg':
            return '16px';
        default:
            return '14px';
    }
}};
    color: ${({ color }) => color};
    &:hover {
        background-color: ${({ backgroundColor }) => backgroundColor || '#e5e5e5'};
    }
`;
const Flags = ({ size = 'md', color = '#555555', backgroundColor = '#ebebeb' }) => {
    var _a, _b, _c;
    const [isOpen, setIsOpen] = useState(false);
    const { changeLanguage, flags, handleFlags, language } = useLanguage();
    const handleClick = (code) => {
        changeLanguage(code);
        setIsOpen(false);
    };
    const handleStatus = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        handleFlags();
    }, []);
    return (React.createElement(ChangeLangWrapper, null,
        React.createElement(Button, { onClick: handleStatus, selected: isOpen, size: size, color: color, backgroundColor: backgroundColor },
            React.createElement(Flag, null, language ? (_a = flags.find((flag) => flag.code === language)) === null || _a === void 0 ? void 0 : _a.emoji : (_b = flags[0]) === null || _b === void 0 ? void 0 : _b.emoji),
            language || ((_c = flags[0]) === null || _c === void 0 ? void 0 : _c.code)),
        isOpen && (React.createElement(LanguageList, { size: size, color: color, backgroundColor: backgroundColor }, flags.map((flag, idx) => {
            if (flag.code !== language) {
                return (React.createElement(LanguageButton, { key: idx, onClick: () => {
                        handleClick(flag.code);
                    }, size: size, color: color, backgroundColor: backgroundColor },
                    React.createElement(Flag, null, flag.emoji),
                    flag.code));
            }
            return null;
        })))));
};
export default Flags;
//# sourceMappingURL=Flags.js.map