"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LContext = void 0;
const react_1 = __importStar(require("react"));
const countries_1 = require("./countries");
exports.LContext = (0, react_1.createContext)(null);
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
    const [language, setLanguage] = (0, react_1.useState)(getLanguage);
    const [flags, setFlags] = (0, react_1.useState)([]);
    const handleFlags = () => {
        const codes = Object.keys(texts);
        const filtered = countries_1.codeAndEmojiArray.filter((code) => codes.includes(code.code));
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
    return react_1.default.createElement(exports.LContext.Provider, { value: values }, children);
};
exports.default = LanguageContext;
//# sourceMappingURL=LanguageContext.js.map