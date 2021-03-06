import React, { SyntheticEvent } from 'react';
declare type ButtonProps = {
    color: 'primary' | 'secondary';
    text: string;
    label: string;
    hasIcon?: boolean;
    iconSize?: 'small' | 'medium' | 'large';
    iconName?: string;
    iconColor?: 'primary' | 'secondary' | 'body' | 'white';
    loading?: boolean;
    loadingColor?: 'primary' | 'secondary' | 'body' | 'white';
    loadingSize?: 'small' | 'medium' | 'large';
    className?: string;
    disabled?: boolean;
    inverted?: boolean;
    expanded?: boolean;
    pressed?: boolean;
    tabIndex?: number;
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
    onKeydown?: (e: SyntheticEvent<HTMLButtonElement>) => void;
};
export declare const Button: React.FC<ButtonProps>;
export {};
