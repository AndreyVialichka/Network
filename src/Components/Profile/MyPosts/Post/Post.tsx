import clases from './Post.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

type NewPostType = {
    id: number
    message:string
    likesCount: number
}

const Post = (props: NewPostType) => {

    return (
        <Card sx={{ minWidth: 475, margin:5 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="body2">
                {props.message}
                <br />
                {'"a benevolent smile"'}
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" endIcon={<ThumbUpIcon />}>{props.likesCount}</Button>
            </CardActions>
        </Card>
    )


}
export default Post




{/* <div key={props.id} className={clases.item}>
            {props.message}
            <div><span>like {props.likesCount}</span></div>
        </div>
         */}
