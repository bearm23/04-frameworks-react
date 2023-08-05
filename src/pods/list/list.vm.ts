import { ChangeEvent } from 'react';

export interface Item {
    id: number;
    name: string;
    avatarUrl: string;
}

export interface Props {
    items: Item[];
    linkItem: keyof Item;
    currentPage: number;
    totalPages: number;
    goToDetail: (name: string | number) => string;
    handlePaginationChange: (event: ChangeEvent, value: number) => void;
}
