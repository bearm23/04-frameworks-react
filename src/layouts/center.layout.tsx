import React from 'react';
import classes from './center.layout.styles.css';

interface Props {
    children: React.ReactNode;
}

export const CenterLayout: React.FC<Props> = ({ children }) => (
    <div className={classes.center}>{children}</div>
);
