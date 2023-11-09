const initial_state = {
    compteur:20
}

const CompteurReducer = (state=initial_state, action) => {
    let newState = {...state}

    switch(action.type) {
        case 'INCREMENT' : 
            newState.compteur = newState.compteur + action.payload; 
            break;
        case 'DECREMENT' : 
            newState.compteur = newState.compteur - action.payload; 
            break;
        case 'INIT' : 
            newState.compteur = action.payload; 
            break;
    }

    return newState;
}

export default CompteurReducer;