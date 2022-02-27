function catsReducer (state = [],action) {
    switch(action.type){
        case 'addCats':
            return state = action.payload
        case 'addMore':
            console.log(action.payload,"payload")
            return state.concat(action.payload)
        default:
            return state
    }
}


export default catsReducer