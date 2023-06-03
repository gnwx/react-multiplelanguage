"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLanguage = void 0;
const react_1 = require("react");
const LanguageContext_1 = require("./LanguageContext");
const useLanguage = () => {
    const context = (0, react_1.useContext)(LanguageContext_1.LContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageContext. Please check your app tree.');
    }
    const { texts, language, flags, changeLanguage, handleFlags } = context;
    return { texts, language, flags, changeLanguage, handleFlags };
};
exports.useLanguage = useLanguage;
//# sourceMappingURL=useLanguage.js.map