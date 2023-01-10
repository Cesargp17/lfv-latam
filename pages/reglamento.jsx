import { NewReleasesOutlined } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { LeagueLayout } from '../components/layouts/LeagueLayout'

const NoticiasPage = () => {
  return (
    <LeagueLayout 
      title={ 'LFV - Latam | Reglamento' } 
      subTitle={ 'Bienvenido a la Liga Futbol Virtual (LFV), a continuación podrás leer el reglamento completo de nuestra liga para la Temporada 1 de ClubesPro en FIFA 23.' } 
      icon={ <NewReleasesOutlined/> }
      banner={'/img/BannerReglas.png'}
    >

      <Box display='flex' justifyContent='center' alignItems='center' sx={{ marginTop: 8 }}>

        <Box sx={{ maxWidth: 900 }}>
            <Typography component='h1' sx={{ fontWeight: 'bold' }}>REGLAMENTO - TEMPORADA 1</Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4 }}>A) Torneo de copa (PC)</Typography>
            <Typography sx={{ marginTop: 1 }}>
              Juegan 24 equipos por plataforma ( PC ) dentro de la Liga Virtual Pro. (se hara mediante sistema los grupos)
              copa de fase de grupos: de ida y vuelta, jugando tanto de local como visitante.
              Seran 4 grupos, conformados por 6 equipos cada grupo en PC por 6 equipos.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4 }}>Por cada enfrentamiento se suman:</Typography>
            <Typography sx={{ marginTop: 1 }}>
              3 puntos al ganador. <br />
              1 punto al empate. <br />
              0 puntos por derrota. <br /><br />
              Pasan dos por grupo y despues Se juega a liguilla (eliminación directa) con partido de ida y vuelta hasta llegar a la final.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4 }}>B) Liguilla (Eliminación directa)</Typography>
            <Typography sx={{ marginTop: 1 }}>
              Se clasifican a la liguilla los dos equipos por grupo del torneo de copa de despedida.
              En caso de empate en el marcador global, se jugara un tercer juego
              Una vez clasificados los 8 equipos después de la fase de grupos (se hara sorteo para las llaves ) 
              El ganador de la liguilla se toma como el campeón del torneo y ganador de premio tanto físico como virtual.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4 }}>Fase de Liguilla  </Typography>
            <Typography sx={{ marginTop: 1 }}>
              Se juegan a ida y vuelta (El equipo mejor posicionado en la tabla general será visitante en el primer partido y local en el segundo partido) (Tabla de grupos)
              En caso de empate en los dos juegos,  deben irse al tiempo extra hasta finalizar en tanda de penales.
              Dado caso que no se presente la ocasion, se jugara un tercer partido hasta penales si asi permite la ocasión. (manda el mejor posicionado de la tabla)
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4 }}>FINAL</Typography>
            <Typography sx={{ marginTop: 1 }}>
              ( El equipo mejor posicionado en la tabla general será visitante en el primer partido y local en el segundo partido)
              En caso de empate en los dos juegos, deben irse al tiempo extra hasta finalizar en tanda de penales.
              Dado caso que no se presente la ocasion, se jugara un tercer partido hasta penales si asi permite la ocasión. (manda el mejor posicionado de la tabla)
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>1.2 - Horarios de juego</Typography>
            <Typography sx={{ marginTop: 1, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>Horarios de Torneo de Liga  (Hora de Ciudad de México)</Typography>
            <Typography sx={{ marginTop: 1, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>MARTES Y JUEVES - 10:00 PM Y 10:30 PM</Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>1.3 - ID ORIGIN</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Cada jugador debe crear su propia cuenta con su ID, no es posible acceder a jugar con cuentas de otros jugadores pues en caso de ser detectado por la ip / dispositivo, etc. será eliminada dicha cuenta de nuestra liga, es una medida para evitar crear cuentas fantasmas. <br /><br />
            En dado caso que la cuenta del jugador sea baneada por razones de ORIGIN, podra utilizar una nueva cuenta creada por parte de ORIGIN y en liga de futbol virtual con una letra al final especial, con autorizacion de un administrador y que el jugador muestre suficientes pruebas del baneo de cuenta para confirmar 
            lo sucedido. <br /><br />
            No es posible acceder a jugar con cuentas de otros jugadores pues en caso de ser detectado por la ip / dispositivo, etc. sera baneado y expulsado del torneo. <br />
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>1.3.1 - ID Origin registrados </Typography>
            <Typography sx={{ marginTop: 1 }}>
            Los id registrados en el sitio web deben ser exactamente igual a los mostrados en el juego FIFA así como los equipos registrados, de lo contrario no contarán como usuarios registrados y puede provocar la pérdida de puntos para los partidos.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>1.3.2 - Cambio DE ID ORIGIN</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Los jugadores solo pueden cambiar su ID cuando estén abiertas las transferencias en <a href={ process.env.NEXT_PUBLIC_PAGE_URL } target='_blank' rel='noreferrer'>{ process.env.NEXT_PUBLIC_PAGE_URL }</a>
            En caso que las transferencias estén cerradas y avisar al administrador con pruebas suficientes para la actualizacion del id.
            </Typography>

            <Typography component='h1' sx={{ fontWeight: 'bold', color: '#002968', marginTop: 5, fontSize: 20 }}>Clubes</Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>2.0 - Nombres de Club</Typography>
            <Typography sx={{ marginTop: 1 }}>
            No se permiten elegir nombres de club que el comité consideren ofensivos hacia cualquier forma de racismo, religioso o tema político. 
            Los nombres de los clubes registrados deben ser iguales o parecidos a los registrados en la PC-ORIGIN en el juego FIFA.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>2.1 - Jugadores en el equipo</Typography>
            <Typography sx={{ marginTop: 1 }}>
            La cantidad mínima de jugadores registrados en el equipo es de 6 jugadores incluyendo al DT y máximo de 23 jugadores. <br /><br />
            El registro debe ser realizado exactamente como el gamertag del Xbox por cada jugador en la página www.ligavirtualpro.com sin excepción, no pueden jugar torneos jugadores no registrados y será motivo de partidos invalidados.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>2.2 - Valor de cada jugador</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Cada jugador registrado en Liga DE FUTBOLL Virtual inicia con un valor virtual de $1,000,000 y va aumentando conforme su desempeño, partidos, torneos jugados, jugador del partido, goles recibidos, goles anotados, etc.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>2.3 - Mínimo de jugadores </Typography>
            <Typography sx={{ marginTop: 1 }}>
            Cada equipo debe tener el mínimo de jugadores para poder jugar un partido ( Con portero y Any obligatorios ). <br /><br />
            6 jugadores en total ya incluyendo any y portero
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>2.4 - DT y asistentes</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Cada equipo debe tener registrado un DT y hasta 1 asistente para cuando el DT no puede hacerse cargo del equipo y organizar los encuentros.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>2.5 - Plantillas de jugadores</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Todas las plantillas de los equipos serán cerradas un día antes del inicio de la competencia en los torneos, no se permitirán realizar nuevas contrataciones de jugadores o transferencias.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>2.6 - Partidos default o abandono</Typography>
            <Typography sx={{ marginTop: 1 }}>
            El host debe ser de mexico y Cada equipo puede salirse UNA VEZ empezado el partido, se puede salir antes de los 10 minutos. Se suspendera por 2 partidos a los dts si se salen mas de una vez en el partido o no sea host mexicano, dado caso que lo vuelvan a incumplir se sancionara al doble. <br /><br />
            Un equipo que no pueda asistir a un juego o reunir los jugadores mínimos para jugar un partido se tomará como partido default con derrota de 3-0. <br /><br />
            Cada equipo puede salirse UNA VEZ empezado el partido, se puede salir antes de los 10 minutos. <br /><br />

            Los horarios de nuestra liga son fijos, la liga no se hace responsable si un DT no quiere jugar el partido otro día / horario.
            En caso de que un equipo abandone la competencia será baneado el DT de futuras ediciones de la LVP así como el nombre del equipo.
            En caso de abandonar la competencia por no tener el mínimo de jugadores esos jugadores serán baneados de futuras ediciones de LFV, y el DT puede solicitar autorización a los administradores de la LFV para reforzarse con jugadores que sean agentes libres. <br /><br />
            
            En caso que el equipo tenga 3 defaults, será baja automática y será baneado el DT de futuras ediciones de la LFV así como el nombre del equipo
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>2.7 - Clubes expulsados de la liga</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Si un equipo es expulsado del torneo por indisciplina o por poner jugadores no alineados a la plantilla en la pagina web, el DT y los asistentes serán baneados de la liga y no podrán participar en la siguiente temporada de la Liga FUTBOL Virtual.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>2.8 Transmision en vivo</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Es importante realizar stream <br /><br />
            En dado caso que un equipo no transmita se le sancionara por primera vez, en dado caso que siga ocurriendo vendran sanciones fuertes
            </Typography>

            <Typography component='h1' sx={{ fontWeight: 'bold', color: '#002968', marginTop: 5, fontSize: 20 }}>Comité</Typography>
            <Typography sx={{ marginTop: 1 }}>
            El comité son las personas encargadas de administrar la liga, nuestro comité se dirigirá a todos de manera respetuosa y siempre intentará solucionar todas las dudas, de igual forma se pide el mismo respeto para nuestro comité por parte de los miembros de la comunidad. <br /><br />
            Los DTs de cada equipo deben agregar al comité de la Liga Futbol Virtual para mantenerse en contacto y poder recibir asesoría en cualquier momento a través de nuestros diferentes medios, WhatsApp, redes sociales, Página web y discord. <br /><br />

            La comunicación para partidos oficialmente será por discord. <br /><br />
            En dado caso que estén de acuerdos ambos dts no habrá problema, en dado caso que no se le llamara la atención <br /><br />
            En dado caso que el dt siga repitiendo en comunicarse para los partidos en donde no sea por discord, se vera la necesidad de ser sancionado ( el admininistrador vera la sancion )<br /><br />
            La comunicacion oficial es por discord.<br /><br />
            3.1 Cómite Liga Futbol virtual y recibir Ayuda <br /><br />
            Si deseas recibir ayuda de algún administrador del comité de Liga Futbol virtual puedes realizarlo únicamente a través de nuestras redes sociales o discord si es algo específico para ti o tu equipo puedes hacerlo mediante inbox.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>3.2 - Hacks y Glitch</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Cualquier jugador que sea identificado jugando partidos de LFV con el jugador Pro alterado (glitcheado) y sea reportado con evidencia será baneado de la liga y su club perderá el partido en donde se haya identificada la falta. <br /><br />
            Usar pantalones queda prohibido usarlo, el equipo que su jugador lo traiga tiene que salir antes del min 10 para evitar jugar asi ( sorprendido sera sancion de 5 juegos y en dado caso que sea eliminatoria sera perdido por default )
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>3.3 - Política de Disciplina</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Todos los miembros de la liga se espera se dirijan con respeto entre ellos, así como juego limpio dentro del juego y en la comunidad, también en las redes sociales y sitio web oficiales. <br /><br />

            Cualquier violación a la política de disciplina puede incurrir en un ban de Facebook / sitio web o de la participación en la Liga Futbol Virtual.  <br /><br />
            Aplicamos el código de conducta para:  <br /><br />
            1.- Miembros del comité de Liga Futbol virtual <br /><br />
            2.- Miembros jugadores de la comunidad <br /><br />
            3.- Liga Virtual Pro 
            </Typography>

            <Typography component='h1' sx={{ fontWeight: 'bold', color: '#002968', marginTop: 5, fontSize: 20 }}>Transferencias</Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>4.1 - Transferencia de Club a otro Club</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Las transferencias son realizadas únicamente por el DT de un club o el jugador.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>4.2 - Transferencias mediante sitio web</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Los arreglos verbales para transferencias NO tienen ninguna validez dentro de la liga.
            Todos los procesos de transferencias deben ser realizados dentro del sitio web: LIGA FUTBOL VIRTUAL  y aprobadas por ambas partes tanto DTs y jugadores.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>4.3 - Medio de Transferencias </Typography>
            <Typography sx={{ marginTop: 1 }}>
            Una vez abiertas las transferencias se puede utilizar la página de Facebook para hacer búsquedas, peticiones u ofrecimientos de jugadores. 
            Para hacer oficial una transferencia se debe utilizar el sitio web LIGA FUTBOL VIRTUAL. 
            </Typography>

            <Typography component='h1' sx={{ fontWeight: 'bold', color: '#002968', marginTop: 5, fontSize: 20 }}>Peticiones de Transferencias</Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>5.1 - Entrar al mercado de transferencias</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Si deseas ser transferido a un club durante el periodo de transferencias, debes primero salir de tu club actual para entrar al mercado de transferencias y esperar que algún club pueda comprarte y tu mismo aceptar o rechazar las peticiones de transferencias como agente libre, En caso de pertenecer a un club, el DT 
            del club decidirá si aprobar o rechazar la compra del jugador. 
            </Typography>

            <Typography component='h1' sx={{ fontWeight: 'bold', color: '#002968', marginTop: 5, fontSize: 20 }}>Reglas de juego</Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.1 - Jugadores por partido</Typography>
            <Typography sx={{ marginTop: 1 }}>
            El mínimo de jugadores para jugar un partido deben cumplirse con portero y any como obligatorio  (si un equipo no tiene los jugadores completos el dt contrario puede aceptar o no jugar, es su decisión y podrá ser tomada). 
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.2 - Solicitar prórroga</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Un equipo puede preguntar por un tiempo de 10 minutos de prórroga para empezar el partido en caso de ser 2 partidos, el segundo partido se puede solicitar hasta 15 minutos de prórroga, dicha petición la debe hacer antes del horario de inicio marcado por la liga. <br /><br />
            La liga no se hace responsable del motivo anterior, el calendario de juegos estara como maximo 24 horas listo antes de jugar los partidos pactados, tiempo suficiente para contactar a los managers. <br /><br />
            El comité puede encargarse de juzgar las situaciones y evitar los partidos por default de tal manera que se puedan llegar a un acuerdo con el horario y evitar defaults. <br /><br />
            En caso de solicitar default es necesario mostrar pruebas de video  o capturas de su plantilla y los mensajes donde se comunicaron con los managers del partido marcado dentro de liga virtual pro. <br /><br />

            Tolerancia :  <br /><br />
            Primer partido 10 minutos <br /><br />
            Segundo Partido 15 minutos
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.3 - DT y Asistentes</Typography>
            <Typography sx={{ marginTop: 1 }}>
            El DT o Asistentes deben estar presentes en cada juego o el equipo perderá en automático por default 3-0. <br /><br />
            Las estadísticas de goleo, etc, en partidos por default no se toman en cuenta.  <br /><br />
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.4 - Jugador ANY</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Jugar con Any es obligatorio para los torneos de Clubes Pro. <br /><br />
            Las estadísticas solamente cuentan para el jugador PRO y no de los bots. <br /> <br />
            En dado caso que un jugador lo saque del partido pero tenga una estadistica de gol o asistencia, se tomara como estadistica. <br /><br />
            Si un bot mete un gol o asistencia, no sera valido para ningun jugador del club. <br /><br />
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.4.1 - Jugador Portero </Typography>
            <Typography sx={{ marginTop: 1 }}>
            Jugar con portero es obligatorio <br /><br />
            El portero no puede ser el ANY
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.5 - Desconexiones y problemas de servidores</Typography>
            <Typography sx={{ marginTop: 1 }}>
            En caso de errores del juego por parte de EA o los servidores, se deberá reanudar a contar las estadísticas a partir del minuto en que ocurrió el error, los equipos pueden pelotear o dejar pasar el tiempo hasta el minuto de la desconexión. 
            Ambos equipos deben tener un video de buena calidad para ver el error de FIFA para proceder.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.6 - Conductas antideportivas: Perder tiempo </Typography>
            <Typography sx={{ marginTop: 1 }}>
            No es posible hacer pasar el tiempo protegiendo el balón en la orilla del campo del terreno del mismo. <br /><br />
            En caso de hacerlo el equipo contrario puede pedir reclamación con la evidencia en video y se procederá a sancion de los managers con dos partidos
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.6.1 - Conductas antideportivas: Estorbar al portero </Typography>
            <Typography sx={{ marginTop: 1 }}>
            No es posible estorbar el portero en tiros libres, tiros de esquina o cualquier jugada a balón parado. ( si es gol en jugada sera anulado )
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.6.2 - Conductas antideportivas: Hacer tiempo entre portero y defensa </Typography>
            <Typography sx={{ marginTop: 1 }}>
            No es posible pasar el balón a un defensa y que el defensa regrese el balón de cabeza al portero en mas de 1 ocasión.  <br /><br />
            En caso de caer en conductas antideportivas, mediante evidencia se puede castigar al club y sancionar a los managers.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.7 Alineación de jugadores</Typography>
            <Typography sx={{ marginTop: 1 }}>
            No es permitido alinear un jugador que no está dado de alta en el perfil del club en Liga Futbol Virtual.<br /><br />
            No es permitido alinear un jugador que este sancionado por un ban o por ser sancionado por no reportar partidos a tiempo. <br /><br />
            Si un club contrario toma evidencia en foto o video el equipo infractor será sancionado con 3 puntos ya sea torneo regular ( liga ) o copa fase de grupos y el partido sera perdido por default. <br /><br />
            En caso de tratarse de Liguilla (ronda eliminatoria) el equipo será descalificado del torneo ya sea liga o copa. <br /><br />
            Nota: Es necesario realizar la denuncia ya teniendo las pruebas con videos con buena definicion y pasar la evidencia a un administrador no maximo de 24 horas.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.7 Alineación de jugadores</Typography>
            <Typography sx={{ marginTop: 1 }}>
            No es permitido alinear un jugador que no está dado de alta en el perfil del club en Liga Futbol Virtual.<br /><br />
            No es permitido alinear un jugador que este sancionado por un ban o por ser sancionado por no reportar partidos a tiempo. <br /><br />
            Si un club contrario toma evidencia en foto o video el equipo infractor será sancionado con 3 puntos ya sea torneo regular ( liga ) o copa fase de grupos y el partido sera perdido por default. <br /><br />
            En caso de tratarse de Liguilla (ronda eliminatoria) el equipo será descalificado del torneo ya sea liga o copa. <br /><br />
            Nota: Es necesario realizar la denuncia ya teniendo las pruebas con videos con buena definicion y pasar la evidencia a un administrador no maximo de 24 horas.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.8 - Jugadores castigados</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Si algún DT o asistente alinea a un jugador baneado de la liga, el equipo será sancionado con 6 puntos, si vuelve a incurrir, el DT o asistente será baneado completamente de la Liga. 
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.9 - Reportar partidos </Typography>
            <Typography sx={{ marginTop: 1 }}>
            Si algún DT o asistente alinea a un jugador baneado de la liga, el equipo será sancionado con 6 puntos, si vuelve a incurrir, el DT o asistente será baneado completamente de la Liga.  <br /><br />
            Los resultados se envían al sitio web de Liga Futbol Virtual. <br /><br />
            Los asistentes también pueden reportar los resultados. <br /><br />
            En caso de no reportar a tiempo los partidos en el tiempo indicado se penalizará con sancion con los siguientes puntos: <br /><br />

            Dado caso que Ningun equipo reporte, se les pondra marcador de empate. <br /><br />
            Dado caso que algun equipo no reporte, se alinearan 11 jugadores al azar para que cada club tenga un reporte y no se les contara estadisticas dentro del torneo del dicho partido. <br /><br />
            Al termino del torneo regular se verificaran resultados y se dara un lapso para que managers verifiquen que los resultados sean correctos y proceder hacer liguilla. <br /><br />
            Partidos que no reportaron en su debido tiempo, no se podra reportar de nuevo. <br /><br />
            seran sancionados los managers con un juego, si esque no se reporta un partido.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.9.1 - Capturas de pantalla</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Capturas obligatorias para reportar partidos,las capturas deberán ser legibles o de lo contrario no contarán para las estadísticas. <br /><br />

            -Plantilla del equipo ( antes de iniciar el partido de liga ) <br /><br />
            -Resultado del partido <br /><br />
            -Jugador del partido <br /><br />
            Dado caso que se salgan a medio tiempo, deben tomar captura del marcador como minimo

            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.10 - Conexiones del juego</Typography>
            <Typography sx={{ marginTop: 1 }}>
            En caso de desconexión de algún jugador durante los primeros 5 minutos, puede reiniciarse el partido. ( si se anota un gol será válido )<br /><br />
            Cada equipo puede salirse 2 veces por desconexión de algún jugador / error de uniformes / etc. En caso de salirse 3 veces ya será contado como Default
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.11 - Reinicio de partido </Typography>
            <Typography sx={{ marginTop: 1 }}>
            Si el juego se ha reiniciado por alguna razón legítima o fallo de servidores, todas las estadísticas continuarán para el segundo juego así como goles y asistencias. <br /><br />
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.12 - Desconexión de ANY | Portero</Typography>
            <Typography sx={{ marginTop: 1 }}>
            En dado de desconexion del ANY o PORTERO o mas de 3 jugadores despues de los 10 minutos se pueden salir solo hasta que acabe el medio tiempo y reanudar los 45 minutos restantes que falten para completar los 90 minutos.<br /><br />
            En dado caso que nadie se salga después de los 90 minutos, se entiende que ambos estuvieron de acuerdo en terminar el juego, ya que cualquiera de los dos equipos se puede salir en el medio tiempo
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.13 - TARJETAS AMARIILAS O ROJAS</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Al acumular 4 tarjetas amarillas se procedera a sancionar con una partido de suspension.<br /><br />
            Al recibir tarjeta roja, se sancionara con un partido de suspencion, pero las tarjetas amarillas que hayan tenido, se borraran.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.14 - Nombres oficiales de equipo</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Ningún equipo podrá cambiarse el nombre despues de haber ya un calendario, de ser así deberán cambiarse el nombre anterior.<br /><br />
            El nombre de equipo debe tener el mismo nombre o reconocible tanto en "www.ligafutbolvirtuallatam.com" y el juego "FIFA" ya que sino es asi sera sancionado el dt con una sanción de un juego sin jugar. 
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>6.14 Límite de estatura</Typography>
            <Typography sx={{ marginTop: 1 }}>
            No hay límite con la estatura, podrán utilizar la estatura al gusto de cada jugador.
            </Typography>

            <Typography component='h1' sx={{ fontWeight: 'bold', color: '#002968', marginTop: 5, fontSize: 20 }}>Premios</Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>7.1 - Ganar premios</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Los premios por partido y torneo dependen de la posición del jugador: <br /><br />

            Portero: Jugador del partido, porterías imbatidas, asistencias, apariciones goles. <br /><br /> 
            Defensas: Jugador del partido, portería imbatida, goles, apariciones asistencias. <br /><br />
            Medios defensivos: Asistencias, goles, porterías imbatidas,apariciones, jugador del partido. <br /><br />
            Medios ofensivos: Asistencias, goles, apariciones, jugador del partido. <br /><br />
            Delanteros: Goles, asistencias, jugador del partido, apariciones
            </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 4, justifyContent: 'center', alignContent: 'center', display: 'flex' }}>7.2 - Ganar premios reales</Typography>
            <Typography sx={{ marginTop: 1 }}>
            Los premios son entregados por parte del comité de la LFV ya sea por transferencias electrónicas.
            </Typography>

        </Box>

      </Box>
    </LeagueLayout>
  )
}

export default NoticiasPage