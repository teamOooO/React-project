export default (state = false, action) => {
  switch (action.type) {
   
    case 'HIDDLE_ADD':
      return action.visible
      
    default:
      return state
  }
}
