import { useContext } from 'react';
import { LContext } from './LanguageContext';
export const useLanguage = () => {
    const context = useContext(LContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageContext. Please check your app tree.');
    }
    const { texts, language, flags, changeLanguage, handleFlags } = context;
    return { texts, language, flags, changeLanguage, handleFlags };
};
//# sourceMappingURL=useLanguage.js.map