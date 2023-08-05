import React from 'react';
import classes from './detail.styles.css';
import { Link } from 'react-router-dom';
import { routes } from 'core';
import { RickMortyEntity } from './detail.vm';
import { Typography } from '@mui/material';
import { ArrowBack, Male, Female, Transgender, HelpOutline } from '@mui/icons-material';

interface Props {
    character: RickMortyEntity;
    id: string;
}

export const Detail: React.FC<Props> = (props) => {
    const { character } = props;

    return (
        <>
            <div className={classes.detailCard}>
                <Link to={routes.search.rickmorty}>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{ color: '#ffffff', display: 'flex', gap: '10px', padding: '20px 0' }}>
                        <ArrowBack /> Back
                    </Typography>
                </Link>

                <div className={classes.card}>
                    <div className={classes.left}>
                        <div className={classes.imageContainer}>
                            <img
                                className={classes.image}
                                src={character.image}
                                alt={`Image of: ${character.name}`}
                            />
                        </div>
                    </div>
                    <div className={classes.right}>
                        <Typography variant="h5" component="h1" sx={{ paddingBottom: '20px' }}>
                            {character.name}
                        </Typography>

                        <div className={classes.info}>
                            <div className={classes.infoBox}>
                                <Typography variant="h6" component="dd">
                                    {character.status}
                                </Typography>
                                <Typography variant="body2" component="dt">
                                    Status
                                </Typography>
                            </div>

                            <div className={classes.infoBox}>
                                <Typography variant="h6" component="dd">
                                    {character.species}
                                </Typography>
                                <Typography variant="body2" component="dt">
                                    Specie
                                </Typography>
                            </div>

                            <div className={classes.infoBox}>
                                <Typography variant="h6" component="dd">
                                    {character.gender === 'Male' ? (
                                        <Male />
                                    ) : character.gender === 'Female' ? (
                                        <Female />
                                    ) : character.gender === 'Genderless' ? (
                                        <Transgender />
                                    ) : character.gender === 'unknown' ? (
                                        <HelpOutline />
                                    ) : null}
                                </Typography>
                                <Typography variant="body2" component="dt">
                                    Gender
                                </Typography>
                            </div>

                            <div className={classes.infoBox}>
                                <Typography variant="h6" component="dd">
                                    {character.origin.name}
                                </Typography>
                                <Typography variant="body2" component="dt">
                                    Origin
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
