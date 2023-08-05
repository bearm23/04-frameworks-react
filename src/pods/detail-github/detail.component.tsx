import React from 'react';
import classes from './detail.styles.css';
import { Link } from 'react-router-dom';
import { routes } from 'core';
import { MemberDetailEntity } from './detail.vm';
import { Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

interface Props {
    member: MemberDetailEntity;
    id: string;
}

export const Detail: React.FC<Props> = (props) => {
    const { member } = props;

    return (
        <>
            <div className={classes.detailCard}>
                <Link to={routes.search.github}>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{ display: 'flex', gap: '10px', padding: '20px' }}>
                        <ArrowBack /> Back
                    </Typography>
                </Link>

                <div className={classes.card}>
                    <div className={classes.left}>
                        <div className={classes.imageContainer}>
                            <img
                                className={classes.image}
                                src={member.avatar_url}
                                alt={`Image of: ${member.name}`}
                            />
                        </div>
                    </div>
                    <div className={classes.right}>
                        {member.name && (
                            <Typography variant="h5" component="h1">
                                {member.name}
                            </Typography>
                        )}

                        <div className={classes.info}>
                            <div className={classes.infoBox}>
                                <Typography variant="h6" component="dd">
                                    {member.login}
                                </Typography>
                                <Typography variant="body2" component="dt">
                                    Login
                                </Typography>
                            </div>

                            {member.company && (
                                <div className={classes.infoBox}>
                                    <Typography variant="h6" component="dd">
                                        {member.company}
                                    </Typography>
                                    <Typography variant="body2" component="dt">
                                        Company
                                    </Typography>
                                </div>
                            )}
                        </div>

                        {member.bio && (
                            <div className={classes.infoBox}>
                                <Typography variant="h6" component="dd">
                                    {member.bio}
                                </Typography>
                                <Typography variant="body2" component="dt">
                                    Bio
                                </Typography>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );

    // return (
    //     <>
    //         <h2>Hello from Detail page</h2>
    //         <h3>User Id: {id}</h3>
    //         <p> id: {member.id}</p>
    //         <p> login: {member.login}</p>
    //         <p> name: {member.name}</p>
    //         <p> company: {member.company}</p>
    //         <p> bio: {member.bio}</p>
    //         <Link to={routes.search.github}>Back to list page</Link>
    //     </>
    // );
};
