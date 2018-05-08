export default (state = {}, action) => {
    switch (action.type) {
     
      case 'EDIT_ADD':
        return action.payload
        
      default:
        return state
    }
  }
  