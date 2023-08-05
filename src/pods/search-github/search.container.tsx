import React, { ChangeEvent } from 'react';
import useLocalStorage from '@/common/hooks/use-local-storage';
import { Search } from './search.component';
import { getMemberListRepository } from './search.repository';
import { Member } from './search.vm';

const itemsPerPage = 10;

const getMembersPerPage = (data: Member[], page = 1): Member[] => {
    const since = page === 1 ? 0 : (page - 1) * itemsPerPage;
    const to = page * itemsPerPage;
    return data.slice(since, to);
};

export const SearchGithubContainer: React.FC = () => {
    const defaultOrg = 'lemoncode';
    const defaultMembers: Member[] = [];
    const [currentPage, setCurrentPage] = useLocalStorage('github-page', 1);
    const [organization, setOrganization] = useLocalStorage('github-org', defaultOrg);
    const [members, setMembers] = useLocalStorage(`github-${organization}`, defaultMembers);
    const [membersPagination, setMembersPagination] = React.useState<Member[]>(
        getMembersPerPage(members, currentPage),
    );
    const [updateOrganization, setUpdatedOrganization] = React.useState(organization);
    const [spinner, setSpinner] = React.useState(false);
    const [totalPages, setTotalPages] = React.useState(1);

    const getMembers = (): void => {
        setSpinner(true);
        getMemberListRepository(organization)
            .then((data) => {
                setCurrentPage(1);
                setMembers(data);
                updateMembersPagination(data);
            })
            .then(() => setSpinner(false));
    };

    const updateMembersPagination = (data: Member[]): void => {
        setMembersPagination(getMembersPerPage(data, currentPage));
        setTotalPages(Math.ceil(data.length / itemsPerPage));
    };

    React.useEffect(() => {
        if (members.length > 0) {
            setMembers(members);
            updateMembersPagination(members);
        } else {
            getMembers();
        }
    }, [updateOrganization]);

    const handleClick = (): void => {
        if (organization === updateOrganization) return;
        setCurrentPage(1);
        setMembers(defaultMembers);
        setUpdatedOrganization(organization);
    };

    const handleChange = (value: string): void => setOrganization(value);

    const handleKeyUp = (e): void => e.keyCode === 13 && handleClick();

    const handlePaginationChange = (_: ChangeEvent, value: number): void => {
        setCurrentPage(value);
        setMembersPagination(getMembersPerPage(members, value));
    };

    return (
        <Search
            organization={organization}
            spinner={spinner}
            items={membersPagination}
            currentPage={currentPage}
            totalPages={totalPages}
            handleKeyUp={handleKeyUp}
            handleChange={handleChange}
            handleClick={handleClick}
            handlePaginationChange={handlePaginationChange}
        />
    );
};
