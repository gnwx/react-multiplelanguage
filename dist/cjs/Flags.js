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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const useLanguage_1 = require("./useLanguage");
const ChangeLangWrapper = styled_components_1.default.div `
    display: inline-block;
`;
const Button = styled_components_1.default.button `
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
const Flag = styled_components_1.default.span `
    margin-right: 5px;
`;
const LanguageList = styled_components_1.default.div `
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
const LanguageButton = styled_components_1.default.button `
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
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const { changeLanguage, flags, handleFlags, language } = (0, useLanguage_1.useLanguage)();
    const handleClick = (code) => {
        changeLanguage(code);
        setIsOpen(false);
    };
    const handleStatus = () => {
        setIsOpen(!isOpen);
    };
    (0, react_1.useEffect)(() => {
        handleFlags();
    }, []);
    return (react_1.default.createElement(ChangeLangWrapper, null,
        react_1.default.createElement(Button, { onClick: handleStatus, selected: isOpen, size: size, color: color, backgroundColor: backgroundColor },
            react_1.default.createElement(Flag, null, language ? (_a = flags.find((flag) => flag.code === language)) === null || _a === void 0 ? void 0 : _a.emoji : (_b = flags[0]) === null || _b === void 0 ? void 0 : _b.emoji),
            language || ((_c = flags[0]) === null || _c === void 0 ? void 0 : _c.code)),
        isOpen && (react_1.default.createElement(LanguageList, { size: size, color: color, backgroundColor: backgroundColor }, flags.map((flag, idx) => {
            if (flag.code !== language) {
                return (react_1.default.createElement(LanguageButton, { key: idx, onClick: () => {
                        handleClick(flag.code);
                    }, size: size, color: color, backgroundColor: backgroundColor },
                    react_1.default.createElement(Flag, null, flag.emoji),
                    flag.code));
            }
            return null;
        })))));
};
exports.default = Flags;
//# sourceMappingURL=Flags.js.map