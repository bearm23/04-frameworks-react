import React from 'react';
import { LoginData } from './login.vm';
import classes from './login.styles.css';
import { TextField } from '@/common';
import { Button, Typography } from '@mui/material';

interface Props {
    errorMessage?: string;
    onLogin: (formData: LoginData) => void;
}

const createEmptyFormData = (): LoginData => ({
    email: '',
    id: 0,
    password: '',
    username: '',
});

export const Login: React.FC<Props> = (props) => {
    const { onLogin, errorMessage } = props;

    const [formData, setFormData] = React.useState<LoginData>(createEmptyFormData());

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onLogin(formData);
    };

    const handleChange = (field: keyof LoginData) => (value: string) =>
        setFormData({
            ...formData,
            [field]: value,
        });

    return (
        <form onSubmit={handleSubmit} className={classes.loginContainer}>
            <Typography variant="h5" component="h1">
                Login page
            </Typography>

            <TextField
                label={'Username:'}
                value={formData.username}
                onChange={handleChange('username')}
            />

            <TextField
                label={'Password:'}
                value={formData.password}
                onChange={handleChange('password')}
            />

            <Button fullWidth size="large" type="submit" variant="contained">
                Login
            </Button>

            <Typography component="p" sx={{ typography: 'body2', color: 'tomato' }}>{errorMessage}</Typography>
        </form>
    );
};
