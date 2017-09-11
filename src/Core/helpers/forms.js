import React from 'react'
import { TextField } from 'material-ui'

export function renderField(field) {
    const hasError = field.meta.touched && field.meta.error ? true : false
    return (
        <TextField
            label={field.label}
            type={field.type || 'text'} 
            error={hasError}
            helperText={hasError ? field.meta.error : ''}
            {...field.input}
        />
    )
}