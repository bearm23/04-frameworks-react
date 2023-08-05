import { generatePath } from 'react-router-dom';

export interface Routes extends Omit<SwitchRoutes, 'detail'> {
    detail: {
        github: (id: string) => string;
        rickmorty: (id: number) => string;
    };
}

interface SwitchRoutes {
    root: string;
    search: {
        github: string;
        rickmorty: string;
    };
    detail: {
        github: string;
        rickmorty: string;
    };
}

export const switchRoutes: SwitchRoutes = {
    root: '/',
    search: {
        github: '/search-github',
        rickmorty: '/search-rickmorty',
    },
    detail: {
        github: '/detail-github/:id',
        rickmorty: '/detail-rickmorty/:id',
    },
};

export const routes: Routes = {
    ...switchRoutes,
    detail: {
        github: (id: string) => generatePath(switchRoutes.detail.github, { id }),
        rickmorty: (id: number) => generatePath(switchRoutes.detail.rickmorty, { id }),
    },
};
