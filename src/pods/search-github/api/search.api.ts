import { Member } from './search.api.model';

export const getMemberList = (organization: string): Promise<Member[]> => {
    return fetch(`https://api.github.com/orgs/${organization}/members`, {
        // headers: { Authorization: 'Bearer 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' },
    }).then((response) => response.json());
};
