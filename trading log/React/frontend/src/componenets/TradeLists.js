import React, { useEffect, useState } from "react";
import { getTrades, deleteTrade } from "../api/api";

const TradeList = () => {
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        fetchTrades();
    }, []);

    const fetchTrades = async () => {
        const response = await getTrades();
        setTrades(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTrade(id);
        fetchTrades();
    };

    return (
        <div>
            <h2>Trade Logs</h2>
            <ul>
                {trades.map((trade) => (
                    <li key={trade.id}>
                        {trade.symbol} - {trade.quantity} @ {trade.price} ({trade.type})
                        <button onClick={() => handleDelete(trade.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TradeList;
