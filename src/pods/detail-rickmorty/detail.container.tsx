import React from 'react';
import { RickMortyEntity } from './detail.vm';
import { Detail } from './detail.component';
import { useParams } from 'react-router-dom';

const createDefaultRickMortyDetail = (): RickMortyEntity => ({
    id: 0,
    name: '',
    image: '',
    status: 'unknown',
    species: '',
    type: '',
    gender: 'unknown',
    origin: {
        name: '',
    },
    location: {
        name: '',
    },
});

export const DetailRickMortyContainer: React.FC = () => {
    const [character, setCharacter] = React.useState<RickMortyEntity>(
        createDefaultRickMortyDetail(),
    );

    const { id } = useParams();

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((json) => setCharacter(json));
    }, []);

    return <Detail character={character} id={id} />;
};
