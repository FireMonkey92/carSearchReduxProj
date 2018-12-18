const API_URL = 'http://localhost:3004'

export function getCars(keywords) {
    //do a network call
    const request = fetch(`${API_URL}/carsIndex?q=${keywords}`, {
        method: 'GET'
    }).then(res => res.json())

    //action creator creates an object and sends to each reducers   
    return {
        type: 'SEARCH_CARS',
        payload: request
    }
}


export function carDetail(id) {
    const request = fetch(`${API_URL}/carsIndex?id=${id}`, {
        method: 'GET'
    }).then(res => res.json())
    // console.log(request);
    return {
        type: 'CAR_DETAIL',
        payload: request
    }
}

export function clearDetails(){
    return {
        type: 'CLEAR_DETAILS',
        payload: []
    }
}