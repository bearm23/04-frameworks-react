import React from 'react';
import { AppLayout } from '@/layouts';
import { DetailGithubContainer } from '@/pods/detail-github';

export const DetailGithubScene: React.FC = () => {
    return (
        <AppLayout>
            <DetailGithubContainer />
        </AppLayout>
    );
};
