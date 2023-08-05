import React, { ChangeEvent } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField } from '@/common';
import { ListContainer } from '@/pods/list';
import { routes } from '@/core';
import { RickMortyCharacter } from './search.vm';
import { Typography } from '@mui/material';
import { ThemeContext } from '@/core/providers';

interface Props {
    searchText: string;
    spinner: boolean;
    items: RickMortyCharacter[];
    currentPage: number;
    totalPages: number;
    handleSearchChange: (value: string) => void;
    handlePaginationChange: (event: ChangeEvent, value: number) => void;
}

export const Search: React.FC<Props> = (props) => {
    const {
        searchText,
        spinner,
        items,
        currentPage,
        totalPages,
        handleSearchChange,
        handlePaginationChange,
    } = props;
    const { theme } = React.useContext(ThemeContext);
    const titleColor =
        theme === 'dark'
            ? {
                  sx: {
                      color: '#ffffff',
                  },
              }
            : {};

    return (
        <>
            <Typography component="h1" variant="h5" m={3} {...titleColor}>
                Characters of Rick & Morty
            </Typography>
            <TextField label={'Search:'} value={searchText} onChange={handleSearchChange} />
            {spinner ? (
                <CircularProgress />
            ) : (
                <ListContainer
                    items={items}
                    goToDetail={routes.detail.rickmorty}
                    linkItem="id"
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePaginationChange={handlePaginationChange}
                />
            )}
        </>
    );
};
