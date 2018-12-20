// 全てのreducerを結合する
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import events from "./events";

export default combineReducers({ events: events, form: formReducer });
