import React from 'react';
import classNames from 'classnames';
import { ThemeContext } from '@/core/providers';
import Pagination from '@mui/material/Pagination';
import classes from './list.styles.css';
import { Link } from 'react-router-dom';
import { Props, Item } from './list.vm';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const List: React.FC<Props> = (props) => {
    const { items, linkItem, currentPage, totalPages, goToDetail, handlePaginationChange } = props;

    const { theme } = React.useContext(ThemeContext);
    const cardColor = theme === 'dark' ? '#3c3e44' : '#ffffff';
    const paginationColor = theme === 'dark' ? '#ffffff' : '#3c3e44';

    return (
        <>
            {items.length > 0 ? (
                <div
                    className={classNames(
                        classes.container,
                        theme === 'dark' ? classes.containerDark : '',
                    )}>
                    <div className={classes.content}>
                        {items.map((item: Item) => (
                            <Card
                                key={item.id}
                                className={classes.card}
                                sx={{
                                    maxWidth: 230,
                                    minWidth: 230,
                                    backgroundColor: cardColor,
                                }}>
                                <Link className={classes.link} to={goToDetail(item[linkItem])}>
                                    <CardMedia
                                        component="img"
                                        image={item.avatarUrl}
                                        alt={'Image of: ' + item.name}
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            margin: '0 auto',
                                            borderRadius: '100%',
                                        }}
                                    />
                                    <CardContent>
                                        <Typography
                                            className={classes.overflowLines}
                                            variant="h5"
                                            component="div"
                                            sx={{ fontSize: '1.2rem' }}>
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                    <div>
                        <Pagination
                            page={currentPage}
                            count={totalPages}
                            color="primary"
                            onChange={handlePaginationChange}
                            sx={{
                                button: { color: paginationColor },
                                div: { color: paginationColor },
                            }}
                        />
                    </div>
                </div>
            ) : (
                <Typography component="h1" variant="body1" m={5}>
                    There are no results to show.
                </Typography>
            )}
        </>
    );
};
