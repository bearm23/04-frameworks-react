import React, { ChangeEvent } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField } from '@/common';
import { ListContainer } from '@/pods/list';
import { routes } from '@/core';
import { Member } from './search.vm';
import { Typography } from '@mui/material';

interface Props {
    organization: string;
    spinner: boolean;
    items: Member[];
    currentPage: number;
    totalPages: number;
    handleKeyUp: (e) => void;
    handleChange: (value: string) => void;
    handleClick: () => void;
    handlePaginationChange: (event: ChangeEvent, value: number) => void;
}

export const Search: React.FC<Props> = (props) => {
    const {
        organization,
        spinner,
        items,
        currentPage,
        totalPages,
        handleKeyUp,
        handleChange,
        handleClick,
        handlePaginationChange,
    } = props;

    return (
        <>
            <Typography component="h1" variant="h5" m={3}>
                Members of Github
            </Typography>
            <TextField
                label={'Organization:'}
                value={organization}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                handleClick={handleClick}
            />
            {spinner ? (
                <CircularProgress />
            ) : (
                <ListContainer
                    items={items}
                    goToDetail={routes.detail.github}
                    linkItem="name"
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePaginationChange={handlePaginationChange}
                />
            )}
        </>
    );
};
