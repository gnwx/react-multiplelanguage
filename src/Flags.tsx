import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from './useLanguage';

export interface ButtonProps {
    selected?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    backgroundColor?: string;
}

const ChangeLangWrapper = styled.div`
    display: inline-block;
`;

const Button = styled.button<ButtonProps>`
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

const Flag = styled.span`
    margin-right: 5px;
`;

const LanguageList = styled.div<ButtonProps>`
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

const LanguageButton = styled.button<ButtonProps>`
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

const Flags: React.FC<ButtonProps> = ({ size = 'md', color = '#555555', backgroundColor = '#ebebeb' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { changeLanguage, flags, getFlags, language } = useLanguage();

    const handleClick = (code: string) => {
        changeLanguage(code);
        setIsOpen(false);
    };

    const handleStatus = () => {
        setIsOpen(!isOpen);
    };

    interface FlagType {
        code: string;
        emoji: string;
    }

    useEffect(() => {
        getFlags();
    }, []);

    return (
        <ChangeLangWrapper>
            <Button onClick={handleStatus} selected={isOpen} size={size} color={color} backgroundColor={backgroundColor}>
                <Flag>{language ? (flags as FlagType[]).find((flag) => flag.code === language)?.emoji : (flags as FlagType[])[0]?.emoji}</Flag>
                {language || (flags as FlagType[])[0]?.code}
            </Button>
            {isOpen && (
                <LanguageList size={size} color={color} backgroundColor={backgroundColor}>
                    {(flags as FlagType[]).map((flag, idx) => {
                        if (flag.code !== language) {
                            return (
                                <LanguageButton
                                    key={idx}
                                    onClick={() => {
                                        handleClick(flag.code);
                                    }}
                                    size={size}
                                    color={color}
                                    backgroundColor={backgroundColor}
                                >
                                    <Flag>{flag.emoji}</Flag>
                                    {flag.code}
                                </LanguageButton>
                            );
                        }
                        return null;
                    })}
                </LanguageList>
            )}
        </ChangeLangWrapper>
    );
};

export default Flags;
