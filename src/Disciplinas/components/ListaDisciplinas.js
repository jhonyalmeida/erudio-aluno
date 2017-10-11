import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listarDisciplinas } from '../actions'
import { 
    Card, CardHeader, CardContent,
    Table, TableHead, TableBody, TableRow, TableCell

} from 'material-ui'
import { CircularProgress } from 'material-ui/Progress'

class ListaDisciplinas extends Component {
    
    componentDidMount() {
        this.props.listarDisciplinas(this.props.match.params.id)
    }

    renderDisciplinas() {
        const disciplinas = this.props.disciplinas
        const first = disciplinas[Object.keys(disciplinas)[0]]
        if (!_.isEmpty(disciplinas)) {
            return (
                _.map(disciplinas, d => (
                    <Card key={d.id} style={{margin: "1em"}}>
                        <CardHeader title={d.disciplina} />
                        <CardContent>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell><strong>Nota</strong></TableCell>
                                        <TableCell><strong>Faltas</strong></TableCell>
                                    </TableRow>
                                    {d.medias.map(m => (
                                        <TableRow key={m.id}>
                                            <TableCell><strong>{m.nome}</strong></TableCell>
                                            <TableCell>{m.nota || '-'}</TableCell>
                                            <TableCell>{m.faltas}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell><strong>MF</strong></TableCell>
                                        <TableCell>{d.mediaFinal || 'ND'}</TableCell>
                                        <TableCell>{d.frequenciaTotal || 'ND'}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                ))
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
        return this.props.pending 
            ? (<div className="circular-progress"><CircularProgress size={30} /></div>)
            : this.renderDisciplinas()
    }
}

function mapStateToProps(state, ownProps) {
    return { 
        disciplinas: state.disciplinas,
        pending: state.pending 
    }
}

export default connect(mapStateToProps, { listarDisciplinas })(ListaDisciplinas)