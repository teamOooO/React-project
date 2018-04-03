import {combineReducers} from 'redux';

const list = (state = [], action) => {
  switch (action.type) {
    case 'LOAD':
      return [
        ...state,
        ...action.payload
      ];
    case 'ADD':
      return [
        ...state,
        action.payload
      ];
    case 'DELETE':
      return state.filter((item) => {
        return item._id != action.payload
      });
    case 'UPDATE':
      return state.map((item) => {
        return item._id == action.payload.id
          ? Object.assign({}, item, action.payload)
          : item;
      })
    case 'SEARCH':
      return action.payload;
    default:
      return state;
  }
}

const curItem = (state = {}, action) => {
  switch (action.type) {
    case 'GETCUR':
      return action.payload;
    case 'CLEAR':
      return {};
    default:
      return state;
  }
}

export default combineReducers({list, curItem})
