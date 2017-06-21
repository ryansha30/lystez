import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function GameCard({ game }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={game.cover} alt="game cover" />
      </div>
      <div className="content">
        <div className="header">{game.title}</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <NavLink to={`/get/${game._id}`} className="ui basic button green">Edit</NavLink>
          <div className="ui basic button red">Delete</div>
        </div>
      </div>
    </div>
  )
}

GameCard.propTypes = {
  game: PropTypes.object.isRequired
}