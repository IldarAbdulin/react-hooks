import {DECREMENT, INCREMENT} from './boilerplate'

export const decrement = (paylod) => ({
  type: DECREMENT,
  paylod,
});
export const increment = (paylod) => ({
  type: INCREMENT,
  paylod,
});
