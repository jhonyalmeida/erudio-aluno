import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
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
            {this.props.autenticado && <Button color="contrast">Sair</Button>}
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    autenticado: state.auth.autenticado,
    propTypes: {
      classes: PropTypes.object.isRequired
    }
  }
}

export default connect(mapStateToProps)(withStyles(styles)(BarraSuperior))