import { ProfileContext, ThemeContext } from '@/core/providers';
import { switchRoutes } from '@/core/router/routes';
import React from 'react';
import classes from './app.layout.styles.css';

import { useNavigate } from 'react-router-dom';
import { Theme } from '@/core/providers/theme/theme.vm';
import { Button, Menu, MenuItem } from '@mui/material';
import classNames from 'classnames';

interface Props {
    children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
    const { username } = React.useContext(ProfileContext);
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const navigate = useNavigate();

    const handleClickLogout = (): void => {
        window.sessionStorage.removeItem('session');
        window.location.reload();
    };

    const handleClickNavigateSearch = (setTheme: Theme, path: string): void => {
        toggleTheme(setTheme);
        navigate(path);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return (
        <div
            className={classNames(
                classes.container,
                theme === 'dark' ? classes.containerDark : '',
            )}>
            <div className={classes.header}>
                <ul>
                    <li>
                        <Button
                            onClick={() =>
                                handleClickNavigateSearch('light', switchRoutes.search.github)
                            }
                            variant="text"
                            sx={{ color: '#ffffff' }}>
                            Go to GitHub API
                        </Button>
                    </li>
                    <li>
                        <Button
                            onClick={() =>
                                handleClickNavigateSearch('dark', switchRoutes.search.rickmorty)
                            }
                            variant="text"
                            sx={{ color: '#ffffff' }}>
                            Go to Rick & Morty API
                        </Button>
                    </li>
                    <li>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ color: '#ffffff' }}>
                            Hello {username}
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
                        </Menu>
                    </li>
                </ul>
            </div>
            {children}
        </div>
    );
};
