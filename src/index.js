import React from "react"
import ReactDOM from "react-dom"
import { withStyles } from 'material-ui/styles'
import { Card, CardHeader, CardContent, CardActions, Button, Typography } from 'material-ui'
import 'typeface-roboto'

ReactDOM.render(
  <Card>
    <CardHeader title="Minhas Turmas" />
    <CardContent>
      <Typography component="p">
        Você não possui nenhuma turma ativa.
      </Typography>
    </CardContent>
    <CardActions>
      <Button dense>Learn More</Button>
    </CardActions>
  </Card>,
  document.getElementById("root")
)

//registerServiceWorker();
