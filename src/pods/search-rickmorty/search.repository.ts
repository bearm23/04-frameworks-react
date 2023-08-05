import * as api from './api/search.api';
import { getStorageKey } from './search.get-storage-key';
import { mapRickMortyToVM } from './search.mappers';
import { RickMorty } from './search.vm';

export const getRickMortyCharactersRepository = (
    page = 1,
    nameFilter: string,
): Promise<RickMorty> => {
    const charactersFromLocalStorage = localStorage.getItem(getStorageKey(page, nameFilter));
    if (charactersFromLocalStorage) {
        return new Promise((resolve) =>
            resolve(JSON.parse(charactersFromLocalStorage) as RickMorty),
        );
    }

    return api.getRickMortyCharacters(page, nameFilter).then(mapRickMortyToVM);
};
