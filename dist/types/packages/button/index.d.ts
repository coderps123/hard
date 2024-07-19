import './index.scss';
import React from 'react';
declare type Props = {
    type?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'info';
    children?: React.ReactNode;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
};
export declare const Button: (props: Props) => React.JSX.Element;
export {};
