import React from 'react';
import { CenterLayout } from '@/layouts';
import { LoginContainer } from '@/pods/login/login.container';

export const LoginScene: React.FC = () => {
    return (
        <CenterLayout>
            <LoginContainer />
        </CenterLayout>
    );
};
