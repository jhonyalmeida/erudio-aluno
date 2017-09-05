import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListaMatriculas from './../../Matriculas/components/ListaMatriculas'
import ListaEnturmacoes from './../../Enturmacoes/components/ListaEnturmacoes'
import ListaDisciplinas from './../../Disciplinas/components/ListaDisciplinas'

export default (props) => (
    <Switch>
        <Route exact path="/" component={ListaMatriculas} />
        <Route exact path="/matriculas" component={ListaMatriculas} />
        <Route path="/matriculas/:id/enturmacoes" component={ListaEnturmacoes} />
        <Route path="/enturmacoes/:id/disciplinas" component={ListaDisciplinas} />
    </Switch>
)