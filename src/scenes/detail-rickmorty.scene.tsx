import React from 'react';
import { AppLayout } from '@/layouts';
import { DetailRickMortyContainer } from '@/pods/detail-rickmorty';

export const DetailRickMortyScene: React.FC = () => {
    return (
        <AppLayout>
            <DetailRickMortyContainer />
        </AppLayout>
    );
};
