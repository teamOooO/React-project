import { combineReducers } from 'redux'

import listreducer from './listreducer'
import visiblereducer from './visiblereducer'
import editreducer from './editreducer'

const reducer = combineReducers({
  listreducer,
  visiblereducer,
  editreducer
})

export default reducer

