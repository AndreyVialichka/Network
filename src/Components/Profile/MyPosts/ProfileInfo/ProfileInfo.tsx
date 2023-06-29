import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../../common/preloader/Preloader';
import {ProfileStatePropsType} from '../../ProfileContainer';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import avatar from '../../../../assets/images/avatar.png'
import { Typography } from '@mui/material';
type ProfileInfoPropsType = {
    profile:ProfileStatePropsType | null
    status:string
    updateStatus:(status:string)=>void
}

const ProfileInfo = (props:ProfileInfoPropsType) => {
    debugger
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.avatar}>
                <img src={props.profile.photos.large
                    ? props.profile.photos.large
                    : avatar}
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                <Typography 
                    variant="h6"
                    noWrap
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'sans-serif',
                    fontWeight: 500,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                }}>
                    Name: {props.profile.fullName || '-----'} 
                </Typography>
                <Typography 
                    variant="h6"
                    noWrap
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'sans-serif',
                    fontWeight: 500,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                }}>
                    contacts: {props.profile.contacts.github || '-----'} 
                </Typography>
                <Typography 
                    variant="h6"
                    noWrap
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'sans-serif',
                    fontWeight: 500,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                }}>
                    lookingForAJob: {props.profile.lookingForAJob || '-----'} 
                </Typography>
            </div>

        </div>
    )
}

export default ProfileInfo