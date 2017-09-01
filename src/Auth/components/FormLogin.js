import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import { 
    Card, CardHeader, CardContent, List, ListItem, ListItemText
} from 'material-ui'

class FormLogin extends Component {

    renderAlert() {
        if (this.props.error) {
            return (
                <div>{this.props.error}</div>
            )
        }
    }

    render() {
        const { handleSubmit, fields: { username, password }} = this.props
        return (
            <form>

            </form>
        )
    }

}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(FormLogin)