import {
    REQUEST_DATA, RECEIVE_DATA,RECEIVE_CLIST
  } from '../constants/index.js';
  
  export default (state = {
    isFetching: false,
    countryData: null,
    countryList:[],
    country:""
  }, action) => { 
    switch (action.type) {
      case REQUEST_DATA:
        return {
          ...state,
          isFetching: true,
        };
      case RECEIVE_DATA:
        return {
          ...state,
          isFetching: false,
          countryData: action.payload.data,
          country:action.payload.country
        };
        case RECEIVE_CLIST:
            return {
              ...state,
              isFetching: false,
              countryList: action.payload
            };
      default:
        return state;
    }
  };