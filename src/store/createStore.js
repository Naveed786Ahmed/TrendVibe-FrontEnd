import { createStore } from "redux";
import { ProductReducers } from "../reducers/productReducer.js";

export const createStores = createStore(ProductReducers);