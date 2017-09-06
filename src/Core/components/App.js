import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CircularProgress } from 'material-ui/Progress'
import BarraSuperior from './BarraSuperior'
import Routes from './Routes'
import FormLogin from './../../Auth/components/FormLogin'

class App extends Component {
    render() {
        const pending = this.props.pending
        const content = this.props.autenticado ? <Routes /> : <FormLogin />
        return (
            <BrowserRouter>
                <div>
                    <BarraSuperior />
                    {content}
                    {pending && <CircularProgress size="50" />}
                </div>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {
        autenticado: state.auth.autenticado,
        pending: state.pending,
        error: state.auth.error
    }
}

export default connect(mapStateToProps)(App)