import { AccountCircleOutlined, AddModeratorOutlined, ArticleOutlined, ClassOutlined, Diversity3Outlined, EmojiEventsOutlined, HomeOutlined, LocalAtmOutlined, MenuBookOutlined, MilitaryTechOutlined, NewspaperOutlined, SportsSoccerOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useContext, useState } from 'react'
import { UIContext } from '../../context/UI/UIContext';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useRouter } from 'next/router';

export const SideMenu = () => {

    const { isMenuOpen, toggleSideMenu } = useContext( UIContext );

    const [ClubesProMenu, setClubesProMenu] = useState(false);
    const [TorneosMenu, setTorneosMenu] = useState(false);

    const router = useRouter();

    const navigateTo = ( url ) => {
        toggleSideMenu();
        router.push( url );
    };

  return (
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={ toggleSideMenu }
    >

    <Box sx={{ width: 250, paddingTop: 3 }}>

        <List>
            <ListItem onClick={ () => navigateTo('/') } sx={{ display: { xs: '', sm: 'none' } }}>
                <ListItemIcon>
                    <HomeOutlined/>
                </ListItemIcon>
                <ListItemText primary={'Inicio'} />
            </ListItem>

            <ListItem onClick={ () => navigateTo('/noticias') } sx={{ display: { xs: '', sm: 'none' } }}>
                <ListItemIcon>
                    <ArticleOutlined/>
                </ListItemIcon>
                <ListItemText primary={'Noticias'} />
            </ListItem>

            <ListItem onClick={ () => navigateTo('/reglamento') } sx={{ display: { xs: '', sm: 'none' } }}>
                <ListItemIcon>
                    <MenuBookOutlined/>
                    </ListItemIcon>
                <ListItemText primary={'Reglamento'} />
            </ListItem>

            <Divider sx={{ display: { xs: '', sm: 'none' }, marginTop: 3, marginBottom: 3 }}/>

            {/* <ListItem button>
                <ListItemIcon>
                    <NewspaperOutlined/>
                    </ListItemIcon>
                <ListItemText primary={'Sobre nosotros'} />
            </ListItem> */}
        </List>

        {/* <ListItemButton onClick={ () => setClubesProMenu(!ClubesProMenu) }>
            <ListItemIcon>
                <SportsSoccerOutlined />
            </ListItemIcon>
            <ListItemText primary="Clubes Pro" />
            {ClubesProMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={ClubesProMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>     
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <AddModeratorOutlined />
                    </ListItemIcon>
                     <ListItemText primary="Registrar club" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <Diversity3Outlined />
                    </ListItemIcon>
                    <ListItemText primary="Ver clubes" />
                </ListItemButton>
            </List>
        </Collapse>

        <List>
            <ListItem button>
                <ListItemIcon>
                    <LocalAtmOutlined/>
                    </ListItemIcon>
                <ListItemText primary={'Transferencias'} />
            </ListItem>
        </List>

        <ListItemButton onClick={ () => setTorneosMenu(!TorneosMenu) }>
            <ListItemIcon>
                <EmojiEventsOutlined />
            </ListItemIcon>
            <ListItemText primary="Torneos" />
            {TorneosMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={TorneosMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>     
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <MilitaryTechOutlined />
                    </ListItemIcon>
                     <ListItemText primary="Liga Latam" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <MilitaryTechOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Copa LFV" />
                </ListItemButton>
            </List>
        </Collapse> */}
    </Box>

    </Drawer>
  )
}
