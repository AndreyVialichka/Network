import { TextField } from '@mui/material'
import styles from './FormsControls.module.css'


const FormControl = ({input, meta, ...props}:any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError && styles.formControl + ' ' + styles.error}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props:any) => {
    const {input, meta, ...restProps} = props
    return <FormControl{...props}><TextField 
                                    id="outlined-multiline-flexible"
                                    label="Multiline"
                                    multiline
                                    maxRows={8}
                                    {...input} {...restProps}/>
            </FormControl>
}

export const Input = (props:any ) => {
    const {input, meta, ...restProps} = props
    return <FormControl{...props}><TextField 
                                    sx={{
                                        height: 20,
                                        minWidth: 300,
                                    }}
                                    id="outlined-basic" 
                                    labal = {props.label}
                                    variant="outlined" 
                                    {...input} {...restProps}/>
            </FormControl>
}

