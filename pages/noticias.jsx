import React from 'react'
import { LeagueLayout } from '../components/layouts/LeagueLayout'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { NewspaperOutlined } from '@mui/icons-material';

const AboutPage = () => {
  return (
    <LeagueLayout 
      title={ 'LFV - Latam | Noticias' } 
      subTitle={ 'Descubre todas las novedades que tenemos para tí en LFV - Latam' } 
      icon={ <NewspaperOutlined/> }
      banner={'/img/BannerNoticias.png'}
    >

      <Box display='flex' justifyContent='center' alignItems='center' sx={{ marginTop: 8 }}>
        <Card sx={{ maxWidth: 900 }}>
          <CardHeader
            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //     R
            //   </Avatar>
            // }
            action={
              <IconButton aria-label="settings">
                {/* <MoreVertIcon /> */}
              </IconButton>
            }
            title="¡Bienvenidos a LFV - Latam!"
            subheader="10 / 01 / 2023"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://fifauteam.com/images/fifa23/screenshots/big/5.webp"
            alt="NoticiaLFV"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Bienvenidos a todos a este nuevo proyecto que recien comienza. Un proyecto en donde se espera culminar con éxito todas las metas que los creadores nos hemos planeado.
              Todo esto no será posible sin antes ofrecerles una cordial invitación a que se sumen a este proyecto, si bien, aún estamos en fase de planeación eso no quita que estemos en contra de recibir sugerencias y
              criticas constructivas para poder lograr que esto sea del agrado de todos. <br/>
              Por el momento seguiremos con el proceso de planeacion, te invitamos a registrarte en nuestro boletín de noticias para mantenerte al tanto de todas las novedades.
            </Typography>
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions> */}
        </Card>
      </Box>
    </LeagueLayout>
  )
}

export default AboutPage