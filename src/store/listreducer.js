export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_STOREHOUSE':
      return [...state,...action.list]

    case 'DELETE_ITEM':
      return state.filter((item) => (
        action.payload !==  item.key
      ))

    case 'SEARCH_GOODNAME':
      return [...action.list]

      default:
      return state
  }
}
