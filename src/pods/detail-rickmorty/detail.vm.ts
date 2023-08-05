type Status = 'Alive' | 'Dead' | 'unknown';
type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface RickMortyEntity {
    id: number;
    name: string;
    image: string;
    status: Status;
    species: string;
    type: string;
    gender: Gender;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
}
