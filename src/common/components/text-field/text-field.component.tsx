import React from 'react';
import classes from './text-field.styles.css';

import { TextField as TextFieldMUI, Button } from '@mui/material';
import { ThemeContext } from '@/core/providers';

interface Props {
    id?: string;
    label?: string;
    name?: string;
    onChange?: (value: string) => void;
    onKeyUp?: (event) => void;
    handleClick?: () => void;
    placeholder?: string;
    type?: 'text' | 'password';
    value: string;
}

export const TextField: React.FC<Props> = (props) => {
    const { value, name, id, type, placeholder, label, onChange, handleClick } = props;
    const handleOnKeyUp = (e): void => props.onKeyUp && props.onKeyUp(e);

    const { theme } = React.useContext(ThemeContext);
    const styles =
        theme === 'dark'
            ? {
                  sx: {
                      backgroundColor: '#ffffff',
                      borderRadius: 2,
                  },
              }
            : {};

    return (
        <div className={classes.container}>
            <TextFieldMUI
                id={id}
                label={label}
                name={name}
                value={value}
                type={type}
                onKeyUp={handleOnKeyUp}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                variant={theme === 'dark' ? 'filled' : 'standard'}
                {...styles}
            />

            {handleClick && (
                <Button type="submit" onClick={handleClick}>
                    Search
                </Button>
            )}
        </div>
    );
};
