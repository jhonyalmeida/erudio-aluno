import _ from 'lodash'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login } from '../actions'
import { renderField } from '../../Core/helpers/forms'
import { 
    Card, CardHeader, CardContent, TextField, Button
} from 'material-ui'
import styles from './FormLogin.css'

class FormLogin extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        this.props.login(values.username, values.password, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="divLogin">
                <img src="images/erudio-logo.png" width="200px" />
                <form className="formLogin" onSubmit={handleSubmit(this.onSubmit)}>
                    <Field label="Usuário" name="username" component={renderField} />
                    <Field label="Senha" name="password" type="password" component={renderField} />
                    <Button type="submit">Entrar</Button>
                </form>
            </div>
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
    withRouter(connect(null, {login})(FormLogin))
)