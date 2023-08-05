export interface RickMorty {
    info: {
        pages: number;
    };
    results: RickMortyCharacter[];
}

export interface RickMortyCharacter {
    id: number;
    name: string;
    avatarUrl: string;
}
