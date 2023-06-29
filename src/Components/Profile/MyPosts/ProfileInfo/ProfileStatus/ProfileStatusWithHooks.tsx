import { TextField, Typography } from '@mui/material';
import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props:ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
                <div>
                    <Typography
                            onDoubleClick={activateEditMode} 
                            variant="h6"
                            noWrap
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}>Status: {props.status || '-----'} </Typography>
                </div>
            }

            {editMode &&
                <div>
                    <TextField 
                        id="standard-basic" 
                        label="Standard" 
                        variant="standard" 
                        onBlur={deactivateEditMode} 
                        value={status} 
                        onChange={onStatusChange} 
                        autoFocus={true}
                    />
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;

