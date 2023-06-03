import { useContext } from 'react';
import { LContext, LanguageContextValues } from './LanguageContext';

export const useLanguage = (): LanguageContextValues => {
    const context = useContext(LContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageContext. Please check your app tree.');
    }
    const { texts, language, flags, changeLanguage, handleFlags } = context;

    return { texts, language, flags, changeLanguage, handleFlags };
};
