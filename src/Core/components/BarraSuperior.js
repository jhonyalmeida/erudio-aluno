import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import { carregarUsuario, logout } from './../../Auth/actions'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
}

class BarraSuperior extends Component {

  constructor(props) {
    super(props)
    this.onLogoutClick = this.onLogoutClick.bind(this)
  }

  componentWillMount() {
    if (!this.props.usuario && this.props.autenticado) {
      this.props.carregarUsuario()
    }
  }

  onLogoutClick() {
    this.props.logout(() => {
      this.props.history.push('/')
    })
  }

  renderUserPanel() {
    const usuario = this.props.usuario
    return (
      <div>
        <span>{usuario ? usuario.nomeExibicao.split(' ')[0] : ''}</span>
        <Button onClick={this.onLogoutClick} color="contrast">Sair</Button>
      </div>
    )
  }

  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar disableGutters>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Erudio
            </Typography>
            {this.props.autenticado && this.renderUserPanel()}
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    autenticado: state.auth.autenticado,
    usuario: state.auth.usuario,
    propTypes: {
      classes: PropTypes.object.isRequired
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ carregarUsuario, logout }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(BarraSuperior)
  )
)