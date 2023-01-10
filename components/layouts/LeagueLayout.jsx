import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { Header } from '../ui/Header'
import { Navbar } from '../ui/Navbar'
import { SideMenu } from '../ui/SideMenu'

const origin = typeof window == 'undefined' ? '' : window.location.origin;

export const LeagueLayout = ({ 
    children, 
    title = 'LFV - Latam | Home', 
    pageDescription = 'LFV - Latam es una Liga de Fútbol Virtual de Clubes Pro FIFA 23', 
    subTitle, 
    icon,
    banner = '/img/Portada.jpg'
  }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="author" content="César Pérez" />
            <meta name='description' content={ pageDescription } />
            <meta name="keywords" content='FIFA, Clubes Pro, Fútbol, Torneos, Virtual, FIFA 23, Liga, Copa, LFV, Reglamento' />

            <meta name='og:title' content={ title } />
            <meta name='og:description' content={ pageDescription } />
            <meta property="og:image" content={`${ origin }${ banner }`} />

            <meta property="Twitter:title" content={ title } />
            <meta property="Twitter:description" content={ pageDescription } />
            <meta property="Twitter:image" content={`${ origin }${ banner }`} />

            <meta property="og:image" content={`${ origin }/${ banner }`} />
        </Head>

        <nav>
            <Navbar/>
        </nav>

        <SideMenu/>

        <main style={{ margin: '80px auto', maxWidth: '1440px', padding: '0px 30px' }}>

            <Box sx={{ marginTop: 15 }} display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                <Typography variant='h1' component='h1'>
                    { icon }
                    {' '}{ title }
                </Typography>
                <Typography variant='h2' sx={{ mt: 3 }}>{ subTitle }</Typography>
            </Box>

            { children }
        </main>

        <hr /><br />
        <Typography className='lfv-footer' component='h1' sx={{ fontWeight: 'bold', fontSize: 20 }}>© LFV 2022. TODOS LOS DERECHOS RESERVADOS.</Typography>
        <br /><br />
    </>
  )
}
