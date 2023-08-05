import { RickMorty } from './search.api.model';

export const getRickMortyCharacters = (page: number, nameFilter: string): Promise<RickMorty> => {
    return fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}${
            nameFilter != '' ? `&name=${nameFilter}` : ''
        }`,
    ).then((response) => response.json());
};
