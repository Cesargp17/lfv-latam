import { Box, Typography } from '@mui/material'
import React from 'react'

export const Redes = () => {
  return (
    <Box sx={{ marginTop: 10 }} display='flex' flexDirection='column' alignItems='center' justifyContent='center'> 
        <Typography className='lfv-title' component='h1'>¡Síguenos en nuestras Redes Sociales!</Typography>
        <div className="containerr">
            <p>Siguenos en nuestras redes sociales para mantenerte al tanto de las novedades. Somos una gran comunidad en crecimiento, Inicia en el mundo de ser un Jugador Profesional de Clubes Pro.</p>
        </div>

        <div className='divImg'>
        <a href={ process.env.NEXT_PUBLIC_FB_URL } target='_blank' rel='noreferrer'><img style={{ marginRight: 7 }} src="/img/Facebook.webp" width='80px' height='80px' alt="Facebook" /></a>
        <a href={ process.env.NEXT_PUBLIC_IG_URL } target='_blank' rel='noreferrer'><img style={{ marginRight: 10 }} src="/img/Instagram.webp" width='80px' height='80px' alt='Instagram' /></a>
        </div>
    </Box>
  )
}
