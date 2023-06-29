import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import { UsersType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Pagination, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export type UsersFunctionalComponentType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}


const UsersFunctionalComponent = (props: UsersFunctionalComponentType) => {
    const [page, setPage] = React.useState(1);
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        props.onPageChanged(value)
      };

    return <div className={s.main}>
        <div>
            <Pagination count = {pagesCount} 
                page={page} 
                onChange={handleChange} /> 
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <Card sx={{ minWidth: 275, margin:5 }}>
                        <CardContent>
                            <NavLink to={'/profile/' + u.id}>
                                <img alt="not defined" className={s.image} src={
                                    //@ts-ignore
                                    u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                            <Typography variant="body2">
                                {u.name}
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                            </CardContent>
                            <CardActions>
                                {u.followed
                                    ? <Button 
                                        size="small"
                                        endIcon={<AddIcon />} 
                                        disabled={props.followingInProgress.some(id=>id === u.id)}  
                                        onClick={() => {
                                        props.unfollow(u.id)}}>
                                            UNFOLLOW
                                    </Button>
                                    : <Button 
                                        size="small"
                                        endIcon={<AddIcon />} 
                                        disabled={props.followingInProgress.some(id=>id === u.id)} 
                                        onClick={() => {
                                        props.follow(u.id)}}>
                                            FOLLOW
                                    </Button>
                                }   
                            </CardActions>
                    </Card>
                </div>
            )
        }
    </div>
}


export default UsersFunctionalComponent;

{/* <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img alt="not defined" className={s.image} src={
                                //@ts-ignore
                                u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id=>id === u.id)}  onClick={() => {
                                    props.unfollow(u.id)}}>
                                    Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                                    props.follow(u.id)}}>
                                    Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                        </span>
                    </span> */}


