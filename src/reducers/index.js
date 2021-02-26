import { combineReducers } from "redux"

const initialState = {
    artistas: []
}

function artistasReducer(state = initialState, action) {
    if (action.type === "ADICIONAR") {
        return { artistas: [...state.artistas, { ...action.value }] }
    } else {
        return state
    }
}

function artistasTitulo(state = { titulo: "Artistas" }, action) {
    if(action.type === "ALTERAR"){
        return { titulo: action.value}
    } else {
        return state
    }
    
}

const reducers = combineReducers({ artistasReducer, artistasTitulo })

export default reducers
