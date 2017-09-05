import _ from 'lodash'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { login } from '../actions'
import { 
    Card, CardHeader, CardContent, TextField, Button
} from 'material-ui'

class FormLogin extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field) {
        return (
            <TextField label={field.label} type={field.type || 'text'} {...field.input} />
        )
    }

    onSubmit(values) {
        this.props.login(values.username, values.password, () => {
            //this.props.history.push('/')
            alert(this.props.history)
        })
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field label="Usuário" name="username" component={this.renderField} />
                <Field label="Senha" name="password" type="password" component={this.renderField} />
                <Button type="submit">Entrar</Button>
            </form>
        )
    }

}

function validate(values) {
    const errors = {}
    if (!values.username) {
        errors.username = 'Informe seu nome de usuário'
    }
    if (!values.password) {
        errors.password = 'Informe sua senha'
    }
    return errors
}

export default reduxForm({
    form: 'Login', validate
})
(
    connect(null, {login})(FormLogin)
)