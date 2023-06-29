import React from "react";
import { NavLink } from "react-router-dom";
import clases from './Nav.module.css'
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Divider } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';


const Navigation = () => {
    return (
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
            <NavLink to='/profile' className={clases.link}>  
                <MenuItem>
                        <ListItemIcon>
                            <AccountCircleIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                </MenuItem>
            </NavLink>  


            <NavLink to='/dialogs' className={clases.link}>
                <MenuItem>
                    <ListItemIcon>
                    <MessageIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Dialogs</ListItemText>
                </MenuItem>
            </NavLink>  
            

            <NavLink to='/users' className={clases.link}>
                <MenuItem>
                    <ListItemIcon>
                        <PeopleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Users</ListItemText>
                </MenuItem>
            </NavLink> 

            <Divider />
            <NavLink to='/settings' activeClassName={clases.active} className={clases.link}>  
                <MenuItem>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                </MenuItem>
            </NavLink>  
        </MenuList>
      </Paper>
    )
}

export default Navigation


{/* <nav className={clases.nav}>
<div className={`${clases.item} ${clases.active}`}>
    <NavLink to='/profile' activeClassName={clases.active}>Profile</NavLink>
</div>
<div className={clases.item}>
    <NavLink to='/dialogs' activeClassName={clases.active}>Messages</NavLink>
</div>
<div className={clases.item}>
    <NavLink to='/users' activeClassName={clases.active}>Users</NavLink>
</div>
<div className={clases.item}>
    <NavLink to='/news' activeClassName={clases.active}>News</NavLink>
</div>
<div className={clases.item}>
    <NavLink to='/music' activeClassName={clases.active}>Music</NavLink>
</div>
<div className={clases.item}>
    <NavLink to='/settings' activeClassName={clases.active}>Settings</NavLink>
</div>
</nav> */}