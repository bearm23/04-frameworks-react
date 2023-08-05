import * as api from './api/search.api';
import { mapMemberListToVM } from './search.mappers';
import { Member } from './search.vm';

export const getMemberListRepository = (organization: string): Promise<Member[]> =>
    api.getMemberList(organization).then(mapMemberListToVM);
