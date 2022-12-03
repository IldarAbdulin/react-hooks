import {DECREMENT, INCREMENT} from './boilerplate'

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + action.paylod,
      };
    case DECREMENT:
      return {
        counter: state.counter - action.paylod,
      };
  }
}

export default reducer;
