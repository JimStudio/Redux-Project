import {createStore} from 'redux'

const reducerDerFn = (state = { counters:0 }, action) => {
   
   if(action.type === "INC"){
      return {counters: state.counters+1};
   }

   if(action.type === "DEC"){
    return {counters: state.counters-1};
   }

   if(action.type === "ADD"){
     return{counters: state.counters + action.payload};
   }
   return state;
};

const store = createStore(reducerDerFn);

export default store; 