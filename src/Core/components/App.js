import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CircularProgress } from 'material-ui/Progress'
import BarraSuperior from './BarraSuperior'
import Routes from './Routes'
import FormLogin from './../../Auth/components/FormLogin'

class App extends Component {
    render() {
        const content = this.props.autenticado ? <Routes /> : <FormLogin />
        return (
            <BrowserRouter>
                <div>
                    <BarraSuperior />
                    {content}
                </div>
            </BrowserRouter>
        )
    }

}

function mapStateToProps(state) {
    return {
        autenticado: state.auth.autenticado
    }
}

export default connect(mapStateToProps)(App)