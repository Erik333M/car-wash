function categorisReducer (state = [],action) {
    switch(action.type){
        case 'addCategoris':
            return state = action.payload
        default:
            return state
    }
}

export default categorisReducer