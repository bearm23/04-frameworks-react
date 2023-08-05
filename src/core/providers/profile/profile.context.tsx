import React from 'react';
import { UserProfile } from './profile.vm';

interface ProfileContextModel {
    username: string;
    setUserProfile: (userProfile: UserProfile) => void;
}

export const ProfileContext = React.createContext<ProfileContextModel>({
    username: '',
    setUserProfile: () => {},
});