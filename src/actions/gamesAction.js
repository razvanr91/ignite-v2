import axios from "axios";
import { newGamesURL, popularGamesURL, upcomingGamesURL } from "../api";

// Action creator

export const loadGames = () => async (dispatch) => {
    //FETCH Axios

    const popularGames = await axios.get(popularGamesURL());
    const upcomingGames = await axios.get(upcomingGamesURL());
    const newGames = await axios.get(newGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGames.data.results,
            upcomingGames: upcomingGames.data.results,
            newGames: newGames.data.results
        }
    })
}