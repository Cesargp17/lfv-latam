import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router';
import { LoginOutlined, MenuOutlined } from '@mui/icons-material';
import { UIContext } from '../../context/UI/UIContext';

export const Navbar = () => {

    const { asPath, push } = useRouter();
    const { isMenuOpen, toggleSideMenu } = useContext( UIContext );

  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref legacyBehavior>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>LFV |</Typography>
                    <Typography sx={{ marginLeft: 0.5 }}>Latam</Typography>
                </Link>
            </NextLink>

            <Box flex={ 1 } />
            
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NextLink href='/' passHref legacyBehavior>
                    <Link>
                        <Button color={ asPath === '/' ? 'primary' : 'info' }>Inicio</Button>
                    </Link>
                </NextLink>

                <NextLink href='/noticias' passHref legacyBehavior>
                    <Link>
                        <Button color={ asPath === '/noticias' ? 'primary' : 'info' }>Noticias</Button>
                    </Link>
                </NextLink>

                <NextLink href='/reglamento' passHref legacyBehavior>
                    <Link>
                        <Button color={ asPath === '/reglamento' ? 'primary' : 'info' }>Reglamento</Button>
                    </Link>
                </NextLink>
            </Box>

            <Box flex={ 1 } />

            {/* <Button startIcon={ <LoginOutlined/> }>Entrar</Button> */}

            {/* <IconButton onClick={ () => toggleSideMenu() }>
                <MenuOutlined sx={{ color: 'black' }}/>
            </IconButton> */}

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <IconButton onClick={ () => toggleSideMenu() }>
                    <MenuOutlined sx={{ color: 'black' }}/>
                </IconButton>
            </Box>

        </Toolbar>
    </AppBar>
  )
}
