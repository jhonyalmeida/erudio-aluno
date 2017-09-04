import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listarDisciplinas } from '../actions'
import { Card, CardHeader, CardContent } from 'material-ui'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'

class ListaDisciplinas extends Component {
    
    componentDidMount() {
        this.props.listarDisciplinas(this.props.match.params.id)
    }

    listItems() {
        const disciplinas = this.props.disciplinas
        const first = disciplinas[Object.keys(disciplinas)[0]]
        if (!_.isEmpty(disciplinas)) {
            return (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            {first.medias.map(m => (
                                <TableCell key={m.nome}>{m.nome}</TableCell>
                            ))}
                            <TableCell>MF</TableCell>
                            <TableCell>Freq. (%)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {_.map(disciplinas, d => (
                        <TableRow key={d.id}>
                            <TableCell>{d.disciplina}</TableCell>
                            {d.medias.map((m) => (
                                <TableCell>{m.nota || '-'}</TableCell>
                            ))}
                            <TableCell>{d.mediaFinal || 'ND'}</TableCell>
                            <TableCell>{d.frequenciaTotal || 'ND'}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
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