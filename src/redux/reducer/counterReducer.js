import {DEC_COUNTER, INC_COUNTER_ASYNC} from '../action/counterAction';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER_ASYNC: {
      return {
        ...state,
        counter: state.counter + action.value,
      };
    }
    case DEC_COUNTER: {
      return {
        ...state,
        counter: state.counter - action.value,
      };
    }
    default: {
      return state;
    }
  }
};
export default counterReducer;
