import { HomeOutlined } from '@mui/icons-material'
import { Box, Button, Card, CircularProgress, colors, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import lfvApi from '../../api/lfvApi';
import { useSnackbar } from 'notistack';

export const Proximamente = () => {

  const [email, setEmail] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const onSendEmail = async( e ) => {
    e.preventDefault();

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if( !emailRegex.test( email ) ){
      enqueueSnackbar('Ingresa un email válido.', {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        }
    });
    setIsSendingEmail(false);
    return;
    }

    setIsSendingEmail(true);
    const { data } = await lfvApi.post('/email', { email });

    if( data.msg === "Este email ya ha sido registrado." ){
      enqueueSnackbar('Este email ya ha sido registrado.', {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        }
    });

    setIsSendingEmail(false);

    } else {
      enqueueSnackbar('Gracias por registrarte, pronto recibiras nuevas noticias.', {
        variant: 'success',
        autoHideDuration: 1500,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        }
    });
    }

    setIsSendingEmail(false);
    setEmail('');

  };

  return (
    <>
    <section className="widget widget_blog_subscription option-b">
      <form onSubmit={ onSendEmail } method="post" id="subscribe-blog">
        <p>Registrate para recibír nuevas noticias</p>
          <input value={ email } onChange={ ( e ) => setEmail( e.target.value ) } type="text" name="email" style={{width: '400px', padding: '1px 2px'}} placeholder="Ingresa tú email" id="subscribe-field"/>
          <Box display='flex' justifyContent='center'>
            {
              isSendingEmail
              ? <CircularProgress sx={{ marginTop: 4, color: 'white' }} thickness={ 2 }/>
              : <button className="btn" type='submit' style={{ marginTop: 40 }}> ENVIAR </button>
            }
          </Box>
      </form>
    </section>
    </>

  )
}
