
function selectedReducer (state = [],action) {
    switch(action.type){
        case 'changeCategori':
            return state = action.payload
        default:
            return state
    }
}


export default selectedReducer