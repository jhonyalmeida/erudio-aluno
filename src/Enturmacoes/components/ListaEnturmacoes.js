import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listarEnturmacoes } from '../actions'
import { 
    List, ListItem, ListItemText, CircularProgress
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
        return this.props.pending 
            ? (<div className="circular-progress"><CircularProgress size={30} /></div>)
            : this.listItems()
    }
}

function mapStateToProps(state, ownProps) {
    return { 
        enturmacoes: state.enturmacoes,
        pending: state.pending
    }
}

export default connect(mapStateToProps, { listarEnturmacoes })(ListaEnturmacoes)