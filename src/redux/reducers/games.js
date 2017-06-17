import { SET_GAMES } from '../actions';
import { ADD_GAME } from '../actions';

export default function games(state = [], action = {}) {
  switch(action.type) {
    case SET_GAMES:
      return action.games;
    case ADD_GAME:
      return [
        ...state,
        action.game 
      ]
    default:
      return state;
  }
}