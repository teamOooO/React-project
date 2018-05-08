export default (state=[],action) => {
	switch (action.type) {
		case 'find':
			return action.findList
		case 'remove':
			return state.filter((item) => {
				console.log(item)
				return item.key != action.id
			});
		default:
			return state
	}
}