import axios from "axios";
const api_url = "https://covid19.mathdro.id/api";

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${api_url}/daily`);
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        console.log(error)
    }
}