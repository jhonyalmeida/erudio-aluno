import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import { 
    Card, CardHeader, CardContent
} from 'material-ui'

class FormLogin extends Component {

    renderAlert() {
        if (this.props.error) {
            return (
                <div>{this.props.error}</div>
            )
        }
    }

    onSubmit() {
        this.props.history.push('/')
    }

    render() {
        const { handleSubmit, fields: { username, password }} = this.props
        return (
            <form>
                <input type="text" />
            </form>
        )
    }

}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(FormLogin)