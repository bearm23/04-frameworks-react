import React from 'react';
import { AppLayout } from '@/layouts';
import { SearchRickMortyContainer } from '@/pods/search-rickmorty';

export const SearchRickMortyScene: React.FC = () => {
    return (
        <AppLayout>
            <SearchRickMortyContainer />
        </AppLayout>
    );
};
