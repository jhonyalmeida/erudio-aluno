import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listarDisciplinas } from '../actions'
import { 
    Card, CardHeader, CardContent, List, ListItem, ListItemText
} from 'material-ui'

class ListaDisciplinas extends Component {
    
    componentDidMount() {
        this.props.listarDisciplinas(this.props.match.params.id)
    }

    listItems() {
        const disciplinas = this.props.disciplinas
        if (!_.isEmpty(disciplinas)) {
            return (
                <List>
                    {_.map(disciplinas, d => (
                        <ListItem dense button key={d.id}>
                            <ListItemText 
                                primary={`${d.disciplina} - ${d.status}`} 
                                secondary={`Média Final: ${d.mediaFinal || 'ND'} | Frequência: ${d.frequenciaTotal || '__'}%`} 
                            />
                        </ListItem>
                    ))}
                </List>
            )
        } else {
            return (
                <div>
                    <i className="material-icons">grid_off</i>
                    <br />Nenhuma disciplina encontrada.
                </div>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardHeader title="Disciplinas" />
                <CardContent>
                    {this.listItems()}
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { disciplinas: state.disciplinas }
}

export default connect(mapStateToProps, { listarDisciplinas })(ListaDisciplinas)