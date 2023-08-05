import * as am from './api/search.api.model';
import * as vm from './search.vm';

const mapRickMortyAPIToVM = (item: am.RickMortyCharacter): vm.RickMortyCharacter => ({
    id: item.id,
    name: item.name,
    avatarUrl: item.image,
});

export const mapRickMortyToVM = (list: am.RickMorty): vm.RickMorty => {
    try {
        return {
            ...list,
            results: list.results.map(mapRickMortyAPIToVM),
        };
    } catch (error) {
        console.log(error);
        return {
            info: {
                pages: 0,
            },
            results: [],
        };
    }
};
