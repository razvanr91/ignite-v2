const initialState = {
    popularGames: [],
    newGames: [],
    upcomingGames: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state, popularGames: action.payload.popularGames };

        default:
            return { ...state };
    }
}

export default gamesReducer; 