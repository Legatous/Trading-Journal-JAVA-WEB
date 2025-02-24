import axios from "axios";

const API_URL = "http://localhost:8080/api/trades";

export const getTrades = async () => axios.get(API_URL);
export const addTrade = async (trade) => axios.post(API_URL, trade);
export const deleteTrade = async (id) => axios.delete(`${API_URL}/${id}`);
