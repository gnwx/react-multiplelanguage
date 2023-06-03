import React, { createContext, useState } from 'react';
import { codeAndEmojiArray } from './countries';
export const LContext = createContext(null);
const LanguageContext = (props) => {
    var _a;
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
    const getLanguage = useSessionStorage ? (_a = sessionStorage.getItem('language')) !== null && _a !== void 0 ? _a : languageFromTexts : languageFromTexts;
    const [language, setLanguage] = useState(getLanguage);
    const [flags, setFlags] = useState([]);
    const handleFlags = () => {
        const codes = Object.keys(texts);
        const filtered = codeAndEmojiArray.filter((code) => codes.includes(code.code));
        if (filtered.length !== codes.length) {
            throw new Error('Your language(s) are not listed in the countries list. Please create an issue with your country code and emoji. See examples on Github.');
        }
        const primaryLangIndex = filtered.findIndex((lang) => lang.code === getLanguage);
        const updatedFiltered = [filtered[primaryLangIndex], ...filtered.slice(0, primaryLangIndex), ...filtered.slice(primaryLangIndex + 1)];
        setFlags(updatedFiltered);
    };
    const changeLanguage = (lang) => {
        setLanguage(lang);
        if (useSessionStorage) {
            sessionStorage.setItem('language', lang);
        }
    };
    const values = {
        language,
        texts: texts[language],
        flags,
        changeLanguage,
        handleFlags
    };
    return React.createElement(LContext.Provider, { value: values }, children);
};
export default LanguageContext;
//# sourceMappingURL=LanguageContext.js.map