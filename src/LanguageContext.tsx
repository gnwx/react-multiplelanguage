import React, { createContext, useState, ReactNode } from 'react';
import { codeAndEmojiArray } from './countries';

export interface LanguageContextProps {
    children: ReactNode;
    texts: Record<string, any>;
    primary?: number;
    useSessionStorage?: boolean;
}

export interface LanguageContextValues {
    language: string;
    texts: Record<string, any>;
    flags: { code: string; emoji: string }[];
    changeLanguage: (lang: string) => void;
    getFlags: () => void;
}

export const LContext = createContext<LanguageContextValues | null>(null);

const LanguageContext = (props: LanguageContextProps) => {
    const { children, texts, primary = 0, useSessionStorage = true } = props;

    if (!texts) {
        throw new Error("Please provide a JavaScript object or JSON file for the 'texts' prop.");
    }
    if (primary >= Object.keys(texts).length) {
        throw new Error("The 'primary' number cannot be greater than or equal to the number of available translations.");
    }
    if (primary < 0) {
        throw new Error("The 'primary' number cannot be lower than 0.");
    }

    // Check if sessionStorage is true
    const languageFromTexts = Object.keys(texts)[primary];
    const getLanguage = useSessionStorage ? sessionStorage.getItem('language') ?? languageFromTexts : languageFromTexts;

    const [language, setLanguage] = useState<string>(getLanguage);
    const [flags, setFlags] = useState<{ code: string; emoji: string }[]>([]);

    const getFlags = () => {
        const codes = Object.keys(texts);

        const filtered = codeAndEmojiArray.filter((code) => codes.includes(code.code));
        if (filtered.length !== codes.length) {
            throw new Error('Your language(s) are not listed in the countries list. Please create an issue with your country code and emoji. See examples on Github.');
        }
        const primaryLangIndex = filtered.findIndex((lang) => lang.code === getLanguage);
        const updatedFiltered = [filtered[primaryLangIndex], ...filtered.slice(0, primaryLangIndex), ...filtered.slice(primaryLangIndex + 1)];
        setFlags(updatedFiltered);
    };

    const changeLanguage = (lang: string) => {
        setLanguage(lang);

        if (useSessionStorage) {
            sessionStorage.setItem('language', lang);
        }
    };

    const values: LanguageContextValues = {
        language,
        texts: texts[language],
        flags,
        changeLanguage,
        getFlags
    };

    return <LContext.Provider value={values}>{children}</LContext.Provider>;
};

export default LanguageContext;
