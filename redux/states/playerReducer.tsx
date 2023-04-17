import {createSlice} from "@reduxjs/toolkit";
//import {IAgencia} from "../../api-client/agencia/interface/agencia.interface";

export const PlayerEmptyState = {
    descripcion: "", empresa: [], id: 0, nombre: ""
}

export const playerSlice = createSlice({
    name: 'player',
    initialState: PlayerEmptyState,
    reducers: {
        savePlayer: (state, action) => action.payload,
    }
})

export const { savePlayer } = playerSlice.actions
export default playerSlice.reducer