import * as am from './api/search.api.model';
import * as vm from './search.vm';

const mapMemberAPIToVM = (item: am.Member): vm.Member => ({
    id: item.id,
    name: item.login,
    avatarUrl: item.avatar_url,
});

export const mapMemberListToVM = (list: am.Member[]): vm.Member[] => {
    try {
        return list.map(mapMemberAPIToVM);
    } catch (error) {
        console.log(error);
        return [];
    }
};
