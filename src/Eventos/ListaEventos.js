import React, { Component } from 'react';
import axios from 'axios';
import './ListaEventos.css';

const server = axios.create({
    baseURL: 'http://localhost/erudio/erudio-server/web/app_dev.php/api/',
    timeout: 3000
});

class ListaEventos extends Component {
    
    state = {
        eventos: []
    }
    
    componentDidMount() {
        server.get('eventos')
            .then(response => this.setState({eventos: response.data}))
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="mdc-card">
                <section className="mdc-card__primary">
                    <h1 className="mdc-card__title mdc-card__title--large">Eventos do mês</h1>
                    {this.state.eventos.length > 0 &&
                        this.state.eventos.map((x) => { return (
                            <ul className="collapsible no-margin" data-collapsible="accordion">
                                <li className="no-margin ng-scope">
                                    <div className="collapsible-header waves-effect blue lighten-5 ng-binding">
                                        {x.dataInicio} - {x.nome}
                                    </div>
                                    <div className="collapsible-body">
                                        <div className="content ng-binding">
                                            {x.descricao}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        );})
                    }
                    {this.state.eventos.length === 0 &&
                        <div className="row col s12 error-page no-margin z-depth-1 ng-hide">
                            <i className="material-icons">grid_off</i>
                            <br />Este mês não possui nenhum evento.
                        </div>
                    }
                </section>
            </div>
        );
    }
};

export default ListaEventos;

