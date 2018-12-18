
// const state = {
//     name: 'Tanesh',
//     lastName: 'Patel',
//     list: []

// }
export default function (state = {}, action) {
    //serves the action payload or data as per the request types
    switch (action.type) {
        case 'SEARCH_CARS':
            return {
                ...state,
                list: action.payload,
                color: false
            }
        case 'CAR_DETAIL':
            return {
                ...state,
                detail: action.payload,
                color: true
            }

        case 'CLEAR_DETAILS':
            return{
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}