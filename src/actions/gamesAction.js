import axios from "axios";
import { popularGamesURL } from "../api";

// Action creator

export const loadGames = () => async (dispatch) => {
    //FETCH Axios

    const popularGames = await axios.get(popularGamesURL());
    console.log(popularGames)
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGames.data.results
        }
    })
}