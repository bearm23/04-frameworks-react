import React from 'react';
import { Router } from '@/core';
import { ProfileProvider, ThemeProvider } from '@/core/providers';
import { LoginScene } from './scenes';

export const App = (): JSX.Element => {
    return (
        <ProfileProvider components={{ Login: <LoginScene /> }}>
            <ThemeProvider>
                <Router />
            </ThemeProvider>
        </ProfileProvider>
    );
};
