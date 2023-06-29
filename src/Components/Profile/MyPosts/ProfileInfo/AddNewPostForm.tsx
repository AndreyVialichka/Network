import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';
import {Textarea} from '../../../common/forms controls/FormsControls';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
export type AddNewPostFormTypes = {
    newPostText:string
}

let maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props:InjectedFormProps<AddNewPostFormTypes>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={Textarea}
                       placeholder={'post message'}
                       validate={[required, maxLength10]} />
            </div>
            <div>
                <Button type="submit" variant="contained" endIcon={<SendIcon />} > Send</Button>
            </div>
        </form>
    );
};



export const ReduxAddPostForm = reduxForm<AddNewPostFormTypes>({form: 'dialogAddPostForm'})(AddNewPostForm)
