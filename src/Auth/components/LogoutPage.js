import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions'

class LogoutPage extends Component {

    componentWillMount() {
        this.props.logout()
    }

    render() {
        return <div>Encerrando sessão...</div>
    }

}

export default connect(null, actions)(LogoutPage)