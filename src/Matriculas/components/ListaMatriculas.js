import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listarMatriculas } from '../actions'
import { 
    Card, CardHeader, CardContent, 
    List, ListItem, ListItemText, 
    CircularProgress
} from 'material-ui'
import { Link } from 'react-router-dom'

class ListaMatriculas extends Component {
    
    componentDidMount() {
        this.props.listarMatriculas()
    }

    listItems() {
        const matriculas = this.props.matriculas
        if (!_.isEmpty(matriculas)) {
            return (
                <List>
                    {_.map(matriculas, m => (
                    <Link to={`/matriculas/${m.id}/enturmacoes`} key={m.id}>
                        <ListItem dense button>
                            <ListItemText 
                                primary={`${m.codigo} - ${m.curso}`} 
                                secondary={m.status} 
                            />
                        </ListItem>
                    </Link>
                    ))}
                </List>
            )
        } else {
            return (
                <div>
                    <i className="material-icons">grid_off</i>
                    <br />Nenhuma matrícula encontrada.
                </div>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardHeader title="Minhas Matrículas" />
                <CardContent>
                    {this.props.pending ? <CircularProgress size={50} /> : this.listItems()}
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return { 
        matriculas: state.matriculas,
        pending: state.pending 
    }
}

export default connect(mapStateToProps, { listarMatriculas })(ListaMatriculas)