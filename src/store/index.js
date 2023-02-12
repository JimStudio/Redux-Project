import {createStore} from 'redux'

const reducerDerFn = (state = { counter:0 }, action) => {

};

const store = createStore(reducerDerFn);

export default store;