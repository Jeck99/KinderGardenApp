import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const NavbarComponent = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1, backgroundColor: 'primary.dark', '&:hover': { backgroundColor: 'primary.light' } }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
                        </Typography>
                        <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'white' }} to="/child">Child Page</Link></Button>
                        <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'white' }} to="/teacher">Teacher Page</Link></Button>
                        <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'white' }} to="/parent">Parent Page</Link></Button>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
export default NavbarComponent;