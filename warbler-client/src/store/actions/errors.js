import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

export const addError = err => ({
  type: ADD_ERROR,
  error: err
});

export const removeError = () => ({
  type: REMOVE_ERROR
});
