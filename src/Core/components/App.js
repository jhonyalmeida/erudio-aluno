import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
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
                    <ToastContainer newestOnTop={true} hideProgressBar={true} />
                    <BarraSuperior />
                    {content}
                </div>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {
        autenticado: state.auth.autenticado,
        pending: state.pending,
        error: state.error
    }
}

export default connect(mapStateToProps)(App)