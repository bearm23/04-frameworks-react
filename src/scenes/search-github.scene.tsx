import React from 'react';
import { AppLayout } from '@/layouts';
import { SearchGithubContainer } from '@/pods/search-github';

export const SearchGithubScene: React.FC = () => {
    return (
        <AppLayout>
            <SearchGithubContainer />
        </AppLayout>
    );
};
