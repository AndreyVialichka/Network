import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import {Textarea} from '../common/forms controls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
export type AddMessageFormTypes = {
    newMessageBody:string
}

let maxLenght50 = maxLengthCreator(50)

const AddMessageForm = (props:InjectedFormProps<AddMessageFormTypes>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'newMessageBody'} component={Textarea} validate={[required, maxLenght50]} placeholder={'Enter your message'}/>
                    <div>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />} > Send</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};


export const ReduxAddMessageForm = reduxForm<AddMessageFormTypes>({form: 'dialogAddMessageForm'})(AddMessageForm)