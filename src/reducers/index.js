// 全てのreducerを結合する
import { combineReducers } from "redux";
import events from "./events";

export default combineReducers({ events: events });
