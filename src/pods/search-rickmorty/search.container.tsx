import React, { ChangeEvent } from 'react';
import useLocalStorage from '@/common/hooks/use-local-storage';
import useDebounce from '@/common/hooks/use-debounce';
import { Search } from './search.component';
import { getRickMortyCharactersRepository } from './search.repository';
import { RickMorty } from './search.vm';
import { getStorageKey } from './search.get-storage-key';

export const SearchRickMortyContainer: React.FC = () => {
    const defaultCharacters: RickMorty = { info: { pages: 0 }, results: [] };
    const [search, setSearch] = useLocalStorage('rickmorty-search', '');
    const [currentPage, setCurrentPage] = useLocalStorage('rickmorty-page', 1);
    const [characters, setCharacters] = React.useState(defaultCharacters);
    const [spinner, setSpinner] = React.useState(false);
    const [totalPages, setTotalPages] = React.useState(characters.info.pages);

    const debouncedSearch = useDebounce(search, 1000);

    const getCharacters = (page = 1): void => {
        setSpinner(true);
        setCurrentPage(page);
        getRickMortyCharactersRepository(page, search)
            .then((data) => {
                setCharacters(data);
                setTotalPages(data.info.pages);
                localStorage.setItem(getStorageKey(page, search), JSON.stringify(data));
            })
            .then(() => setSpinner(false));
    };

    React.useEffect(() => {
        getCharacters(currentPage);
    }, [debouncedSearch]);

    const handleSearchChange = (value: string): void => {
        setCurrentPage(1);
        setSearch(value);
    };

    const handlePaginationChange = (_: ChangeEvent, value: number): void => getCharacters(value);

    return (
        <Search
            searchText={search}
            spinner={spinner}
            items={characters.results}
            currentPage={currentPage}
            totalPages={totalPages}
            handleSearchChange={handleSearchChange}
            handlePaginationChange={handlePaginationChange}
        />
    );
};
