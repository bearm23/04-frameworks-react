import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
    SearchGithubScene,
    SearchRickMortyScene,
    DetailGithubScene,
    DetailRickMortyScene,
} from '@/scenes';

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={switchRoutes.root}
                    element={<Navigate to={switchRoutes.search.github} />}
                />
                <Route path={switchRoutes.search.github} element={<SearchGithubScene />} />
                <Route path={switchRoutes.search.rickmorty} element={<SearchRickMortyScene />} />
                <Route path={switchRoutes.detail.github} element={<DetailGithubScene />} />
                <Route path={switchRoutes.detail.rickmorty} element={<DetailRickMortyScene />} />
            </Routes>
        </BrowserRouter>
    );
};
