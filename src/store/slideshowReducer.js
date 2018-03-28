export default (state=[],action) => {
	switch (action.type) {
		case 'find':
			return action.findList
		default:
			return state
	}
}