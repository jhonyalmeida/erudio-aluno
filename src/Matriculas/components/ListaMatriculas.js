import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listarMatriculas } from '../actions'
import { 
    Card, CardHeader, CardContent, List, ListItem, ListItemText
} from 'material-ui'

class ListaMatriculas extends Component {
    
    componentDidMount() {
        this.props.listarMatriculas()
        console.log(this.props.matriculas)
    }

    onClickItem(event) {
        
    }

    listItems() {
        if (this.props.matriculas) {
            return (
                <List>
                    {_.map(this.props.matriculas, m => (
                    <ListItem dense button key={m.id}>
                        <ListItemText 
                            primary={`${m.codigo} - ${m.curso}`} 
                            secondary={m.status} 
                        />
                    </ListItem>
                    ))}
                </List>
            )
        } else {
            return (
                <div className="row col s12 error-page no-margin z-depth-1 ng-hide">
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
                    {this.listItems()}
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return { matriculas: state.matriculas }
}

export default connect(mapStateToProps, { listarMatriculas })(ListaMatriculas)