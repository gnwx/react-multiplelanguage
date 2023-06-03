import React, { ReactNode } from 'react';
export interface LanguageContextProps {
    children: ReactNode;
    texts: Record<string, any>;
    primary?: number;
    useSessionStorage?: boolean;
}
export interface LanguageContextValues {
    language: string;
    texts: Record<string, any>;
    flags: {
        code: string;
        emoji: string;
    }[];
    changeLanguage: (lang: string) => void;
    handleFlags: () => void;
}
export declare const LContext: React.Context<LanguageContextValues | null>;
declare const LanguageContext: (props: LanguageContextProps) => React.JSX.Element;
export default LanguageContext;
