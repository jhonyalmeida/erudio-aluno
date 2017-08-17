import React, { Component } from 'react';
import axios from 'axios';
import { 
    Card, 
    CardHeader, 
    CardContent, 
    CardActions, 
    Button,
    List,
    ListItem,
    ListItemText
} from 'material-ui'

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
                console.error(error)
            });
    }

    listItems() {
        if (this.state.eventos.length > 0) {
            return (
                <List>
                    {this.state.eventos.map(x => (
                    <ListItem dense button key={x.id}>
                        <ListItemText primary={x.nome} secondary={x.descricao} />
                    </ListItem>
                    ))}
                </List>
            )
        } else {
            return (
                <div className="row col s12 error-page no-margin z-depth-1 ng-hide">
                    <i className="material-icons">grid_off</i>
                    <br />Este mês não possui nenhum evento.
                </div>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardHeader title="Eventos do mês" />
                <CardContent>
                    {this.listItems()}
                </CardContent>
            </Card>
        );
    }
};

export default ListaEventos;

