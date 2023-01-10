import { Box, Typography } from '@mui/material'
import React from 'react'
import { IndexLayout } from '../components/layouts/IndexLayout'
import { LeagueLayout } from '../components/layouts/LeagueLayout'
import { Footer } from '../components/pages/Footer'
import { Proximamente } from '../components/pages/Proximamente'
import { Redes } from '../components/pages/Redes'

const HomePage = () => {
  return (
    <IndexLayout pageDescription={ `LFV - Latam es una nueva Liga creada para la plataforma de PC, el objetivo de esta es crear una gran comunidad para que los jugadores de FIFA puedan crecer y demostrar de lo que estan hechos.
      El principal objetivo de LFV - Liga de Fútbol Virtual es poder crear un entorno competitivo, divertido, pero sobre todo en donde todos los jugadores puedan crecer y vivír la experiencia
      del fútbol profesional desde la perspectiva virtual.` }>

      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'> 
        <Typography className='lfv-title' component='h1'>Liga de Fútbol Virtual</Typography>
        <Typography className='lfv-abreviation' component='h1' sx={{ fontWeight: 'bold', fontSize: 25 }}>(LFV)</Typography>
      </Box>

<div className="containerr">
      <p>LFV - Latam es una nueva Liga creada para la plataforma de PC, el objetivo de esta es crear una gran comunidad para que los jugadores de FIFA puedan crecer y demostrar de lo que estan hechos.
          El principal objetivo de LFV - Liga de Fútbol Virtual es poder crear un entorno competitivo, divertido, pero sobre todo en donde todos los jugadores puedan crecer y vivír la experiencia
          del fútbol profesional desde la perspectiva virtual.
            
          <br /><br />
          
          En LFV - Latam proporcionaremos las herramientas necesarias para poder lograr que esta experiencia sea lo más real posible.

          <br /><br />

          ¡Proximamente, esperános!
      </p>
</div>

      <hr />
        <div id='prox'></div>
      <hr />

      <Proximamente/>

      <hr />
        <div id='prox2'></div>
      <hr />

      <Redes/><br /><br />

      <Footer/>

    </IndexLayout>
  )
}

export default HomePage