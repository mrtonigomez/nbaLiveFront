
import { configureStore } from "@reduxjs/toolkit";
import { playerSlice } from "./states/playerReducer";

export interface AppStore {
    
}


export default configureStore<AppStore>({
    reducer: {
        player: playerSlice.reducer
    }
})