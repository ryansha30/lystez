import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveGame, fetchGame, updateGame } from '../redux/actions';
import GameForm from './GameForm';

class GameFormPage extends Component {

  state = {
    redirect: false
  }

  /*
  componentDidMount = (props) => {
    if(this.props.match.params.id) {
      this.props.fetchGame(this.props.match.params.id)
    }
  }
  */
  componentDidMount = () => {
    const { match } = this.props;
    if (match.params._id) {
      this.props.fetchGame(match.params._id);
    }
  }

  saveGame = ({ _id, title, cover }) => {
    if(_id) {
      return this.props.updateGame({ _id, title, cover }).then(
        () => { this.setState({ redirect: true })},
      );
    } else {
      return this.props.saveGame({ title, cover }).then(
        () => { this.setState({ redirect: true })},
      );
    }
  }

  render() {
    return(
      <div>
        {
          this.state.redirect ?
          <Redirect to="/get" /> :
          <GameForm
            game={this.props.game}
            saveGame={this.saveGame}
          />
        }
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  if(props.match.params._id) {
    return {
      game: state.games.find(item => item._id === props.match.params._id)
    }
  }

  return { game: null };
}

export default connect(mapStateToProps, { saveGame, fetchGame, updateGame })(GameFormPage);