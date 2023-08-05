export const getStorageKey = (page: number, search: string): string =>
    `rickmorty/${page}/${search}`;
