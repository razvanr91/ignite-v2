// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting the date
const getCurrentMonth = () => {
    let month = new Date().getMonth() + 1;
    if (month < 10) return `0${month}`;
    else return month;
}

const getCurrentDay = () => {
    let day = new Date().getDate();
    if (day < 10) return `0${day}`;
    else return day;
}

const getCurrentYear = new Date().getFullYear();

const getCurrentDate = () => `${getCurrentYear}-${getCurrentMonth()}-${getCurrentDay()}`;

const getLastYear = () => `${getCurrentYear - 1}-${getCurrentMonth()}-${getCurrentDay()}`;

// Popular Games
const popular_games = `games?key=c1b8f9ec43bf4957a49c9d0eb733b678&dates=${getLastYear()},${getCurrentDate()}&ordering=-rating&page_size=12`;


export const popularGamesURL = () => `${base_url}${popular_games}`;