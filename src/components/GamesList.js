import React from 'react';
import PropTypes from 'prop-types';

export default function GamesList({ games }){
  const emptyMessage = (
    <p>There are currently no games in your collection</p>
  );

  const gamesList = (
    <p>My games list</p>
  )

  return (
    <div>
      {games.length === 0 ? emptyMessage : gamesList}
    </div>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
}