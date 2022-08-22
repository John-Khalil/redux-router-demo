import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import {appReducer} from "./rootreducer.js";


const persistConfig = {

    key : 'root',
    storage:storage,
    whitelist:['authStudent','sidebar_status','student_personal_info'],
    blacklist:[]

}

const persistedReducer = persistReducer(persistConfig, appReducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export { persistor, store };