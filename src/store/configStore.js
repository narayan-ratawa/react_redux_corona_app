import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "../reducer";

// Create new store with middlewares. This store is then used at RootContainer
const configureStore = initialState => {

    //use this statement while release app
    const middleware = applyMiddleware(thunk);

    const createStoreWithMiddleware = compose(middleware);

    const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

    return store;
};

export default configureStore;