import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import clases from './Dialogs.module.css';
import {DialogsPageType} from './DialogsContainer';
import {AddMessageFormTypes, ReduxAddMessageForm} from './AddMessageForm';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import avatar from '../../assets/images/user.jpg'
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';



const Dialogs = (props: DialogsPageType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addNewMessage = (values: AddMessageFormTypes) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={clases.dialogs}>
            <div className={clases.dialogs_items}>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {dialogsElements.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                <ListItem
                    sx ={{height:70,}}
                    key={value.key}
                    disablePadding
                >
                    <ListItemButton>
                    <ListItemAvatar>
                        <Avatar
                        src={avatar}
                        />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={value} />
                    </ListItemButton>
                </ListItem>
                );
            })}
            </List>
            </div>
            <div className={clases.messages}>
                <div className={clases.wrapper}>
                <div className={clases.person}>
                    <Avatar
                        src={avatar}
                    />{dialogsElements[0]}
                </div>
                <Divider />
                <div>{messageElements}</div>
                <div>
                    <ReduxAddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
            </div>
        </div>

    )
}







export default Dialogs




