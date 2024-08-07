/*
  Steps for redux setup
       1- configure Store
       2- Make reducers
       3- make intitla State
       4-
*/
import todoReducer from "../features/todo/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: todoReducer,
});
