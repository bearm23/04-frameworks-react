import React from 'react';
import { ProfileContext } from '@/core/providers';
import { Login } from './login.component';
import { LoginData } from './login.vm';
import { apiLogin } from './api/login.api';

export const LoginContainer: React.FC = () => {
    const { setUserProfile } = React.useContext(ProfileContext);
    const [errorMessage, setErrorMessage] = React.useState<string>('');

    const handleLogin = (formData: LoginData): void => {
        apiLogin(formData.username, formData.password).then((success) => {
            console.log('eeee??', formData.username, formData.password, success);
            if (success) {
                setUserProfile({ username: formData.username });
            } else {
                setErrorMessage('User / password not valid, psst... admin / test');
            }
        }).catch(() => {
            setErrorMessage('User / password not valid, psst... admin / test');
        });
    };

    return <Login onLogin={handleLogin} errorMessage={errorMessage} />;
};
