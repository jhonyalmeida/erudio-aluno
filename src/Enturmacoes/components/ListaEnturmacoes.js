import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listarEnturmacoes } from '../actions'
import { 
    Card, CardHeader, CardContent, List, ListItem, ListItemText
} from 'material-ui'
import { Link } from 'react-router-dom'

class ListaEnturmacoes extends Component {
    
    componentDidMount() {
        this.props.listarEnturmacoes(this.props.match.params.id)
    }

    listItems() {
        const enturmacoes = this.props.enturmacoes
        if (!_.isEmpty(enturmacoes)) {
            return (
                <List>
                    {_.map(enturmacoes, e => (
                    <Link to={`/enturmacoes/${e.id}/disciplinas`} key={e.id}>
                        <ListItem dense button>
                            <ListItemText 
                                primary={`${e.turma} - ${e.etapa}`} 
                                secondary={e.concluido ? 'CONCLUÍDO' : 'CURSANDO'} 
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
                    <br />Nenhuma enturmação encontrada.
                </div>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardHeader title="Minhas Enturmações" />
                <CardContent>
                    {this.listItems()}
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { enturmacoes: state.enturmacoes }
}

export default connect(mapStateToProps, { listarEnturmacoes })(ListaEnturmacoes)