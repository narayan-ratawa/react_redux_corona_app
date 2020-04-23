import {
    RECEIVE_DATA,
    RECEIVE_CLIST
} from '../constants/index.js';
import axios from "axios";
const api_url = "https://covid19.mathdro.id/api/"

export const getCountryData = (cName) => {
    return async (dispatch, getState) => {
        var url = api_url;
        if(cName){
            url = url + "countries/"+cName;
        }
        try {
            const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(`${url}`);
            dispatch({
                type: RECEIVE_DATA,
                payload:{data: {
                    confirmed,
                    deaths,
                    recovered,
                    lastUpdate
                },country:cName},
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getCountryList = () => {
    return async (dispatch, getState) => {
        try {
            const { data: { countries } } = await axios.get(`${api_url}countries`)
            dispatch({
                type: RECEIVE_CLIST,
                payload: countries,
            });
        } catch (error) {
            console.log(error);
        }
    };
};