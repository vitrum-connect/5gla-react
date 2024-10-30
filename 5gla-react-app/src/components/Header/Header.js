import {AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Menu, MenuItem } from '@mui/material'

export default function Header(){
    return(
        <header>
            <AppBar position='static'>
                <Container maxWidth="xl"/>

                <Typography variant='h1'component='div' sx={{flexGrow: 1}}>
                    5GLA-VISUALIZATION - REACT - Placeholder
                </Typography>
            </AppBar>
        </header>
    );
}

