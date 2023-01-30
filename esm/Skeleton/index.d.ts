import React from 'react';
interface Props {
    count?: number;
    row?: number;
    height?: any;
    space?: number;
    loading?: boolean;
    childStyle?: React.CSSProperties;
    className?: React.CSSProperties;
    children: React.ReactNode;
}
export default function Skeleton(props: Props): JSX.Element;
export {};
