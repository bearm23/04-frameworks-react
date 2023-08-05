import React from 'react';
import { Props } from './list.vm';
import { List } from './list.component';

export const ListContainer: React.FC<Props> = (props) => {
    const { items, linkItem, currentPage, totalPages, goToDetail, handlePaginationChange } = props;

    return (
        <List
            items={items}
            goToDetail={goToDetail}
            linkItem={linkItem}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePaginationChange={handlePaginationChange}
        />
    );
};
