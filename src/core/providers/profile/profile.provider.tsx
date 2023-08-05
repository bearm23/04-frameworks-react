import { LoginData } from '@/pods/login/login.vm';
import React from 'react';
import { ProfileContext } from './profile.context';
import { UserProfile } from './profile.vm';

interface Props {
    children: React.ReactNode;
    components: {
        Login: React.ReactNode;
    }
}

export const ProfileProvider: React.FC<Props> = ({ children, components: { Login } }) => {
    const [profile, setProfile] = React.useState<UserProfile>();
    let userLogged: LoginData;

    const userSaved = window.sessionStorage.getItem('session');
    if (userSaved) {
        userLogged = JSON.parse(userSaved) as LoginData;
    }

    return <ProfileContext.Provider value={{
        username: profile?.username || userSaved && userLogged.username,
        setUserProfile: setProfile,
    }}>
        <>{profile || userSaved ? children : Login}</>
    </ProfileContext.Provider>
}