export default function(state=[], action) {

    //serves the action payload or data as per the request types
    switch(action.type){
        case 'SEARCH_CARS':
            return action.payload
        default: 
            return state
    }
}