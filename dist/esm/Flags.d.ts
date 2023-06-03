import React from 'react';
export interface ButtonProps {
    selected?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    backgroundColor?: string;
}
declare const Flags: React.FC<ButtonProps>;
export default Flags;
