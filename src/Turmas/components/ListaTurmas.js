import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listarTurmas } from '../actions'
import { 
    Card, CardHeader, CardContent, CardActions,
    List, ListItem, ListItemText, Button
} from 'material-ui'
import servidor from './../../Core/services/ErudioServer'

class ListaTurmas extends Component {
    
    componentDidMount() {
        this.props.listarTurmas()
        console.log(this.props.turmas)
    }

    listItems() {
        if (this.props.turmas) {
            return (
                <List>
                    {_.map(this.props.turmas, t => (
                    <ListItem dense button key={t.id}>
                        <ListItemText primary={`${t.nome}`} secondary={`${t.etapa.nome}`} />
                    </ListItem>
                    ))}
                </List>
            )
        } else {
            return (
                <div className="row col s12 error-page no-margin z-depth-1 ng-hide">
                    <i className="material-icons">grid_off</i>
                    <br />Nenhuma turma encontrada.
                </div>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardHeader title="Minhas Turmas" />
                <CardContent>
                    {this.listItems()}
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return { turmas: state.turmas }
}

export default connect(mapStateToProps, { listarTurmas })(ListaTurmas)