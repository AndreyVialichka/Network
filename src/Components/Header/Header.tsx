import { NavLink } from "react-router-dom";
import clases from './Header.module.css'
import { Button, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';


type HeaderTypes = {
    isAuth:boolean,
    login: string | null
    logout: ()=>void
}


const Header = (props:HeaderTypes) => {
    return (
    <header className={clases.header}>
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters className={clases.toolbar}>
                    <div>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                </div>
                {props.isAuth
                    ? <div className={clases.nameContainer}> 
                        <Typography variant="h6"
                            noWrap
                            component="a"
                            href="/profile"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>{props.login}</Typography>
                        <Button variant = "contained" onClick={props.logout} >
                            Log out
                        </Button>
                    </div>
                    : <NavLink to={'/login'}><Button variant = "contained"  >Login</Button></NavLink>}
             </Toolbar>
            </Container>
    </AppBar>
    </header>
    )
}

export default Header



{/* <img
src={logo}
alt=""/>

<div className={clases.loginBlock}>
{props.isAuth
    ? <div className={clases.nameContainer}> 
        <Typography variant="h6">{props.login}</Typography>
        <Button variant = "contained" onClick={props.logout} >
            Log out
        </Button>
    </div>
    : <NavLink to={'/login'}>Login</NavLink>}

</div> */}

