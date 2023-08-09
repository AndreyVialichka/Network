import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/forms controls/FormsControls';
import {required} from '../../utils/validators/validators';
import styles from '../common/forms controls/FormsControls.module.css'
import styles1 from './Login.module.css'
import { Button, Checkbox, FormLabel, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


export type FormDataType = {
    email:string
    password:string
    rememberMe: boolean
}

const LoginForm = (props:InjectedFormProps<FormDataType> ) => {
    return (
        <div className={styles1.loginForm}>
            <form onSubmit={props.handleSubmit} className={styles.formControl}>
                    <FormLabel>
                        <p>
                            To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                                        target={'_blank'}>here</a>
                        </p>
                        <p>
                            or use common test account credentials:
                        </p>
                        <p> Email: free@samuraijs.com
                        </p>
                        <p>
                            Password: free
                        </p>
                    </FormLabel>
                <h1>LOGIN</h1>
                <div >
                    <Field placeholder={'Email'} name={'email'}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder={'Password'}   name={'password'} type={'password'}
                           validate={[required]}
                           component={Input}/>
                </div>
                {props.error &&
                    <div className={styles.formSummaryError}>{props.error}</div>}
                <div className={styles1.rememberMe}>
                    
                    <Checkbox  name={'rememberMe'}  /> <Typography
                        variant="h6"
                        sx={{
                        minWidth:30,
                        fontFamily: 'monospace',
                        fontWeight: 100,
                        letterSpacing: '.1rem',
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    > remember me </Typography>
                </div>
                <div>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />} > Login</Button>
                </div>
            </form>
        </div>
    );
};

export const ReduxLoginForm = reduxForm<FormDataType>({form:'login'})(LoginForm)
