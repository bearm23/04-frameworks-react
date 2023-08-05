import React from 'react';
import { MemberDetailEntity } from './detail.vm';
import { Detail } from './detail.component';
import { useParams } from 'react-router-dom';

const createDefaultMemberDetail = (): MemberDetailEntity => ({
    id: '',
    login: '',
    name: '',
    company: '',
    bio: '',
    avatar_url: '',
});

export const DetailGithubContainer: React.FC = () => {
    const [member, setMember] = React.useState<MemberDetailEntity>(createDefaultMemberDetail());

    const { id } = useParams();

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => setMember(json));
    }, []);

    return <Detail member={member} id={id} />;
};
