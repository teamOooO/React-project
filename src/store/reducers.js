export default (state = [], action) => {
  switch (action.type) {
    case 'expression':
      return action.name
    default:
      return state;
  }
}
