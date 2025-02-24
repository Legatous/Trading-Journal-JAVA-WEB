import React, { useState } from "react";
import { addTrade } from "../api/api";

const TradeForm = ({ onTradeAdded }) => {
    const [symbol, setSymbol] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [type, setType] = useState("BUY");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTrade({ symbol, price, quantity, type });
        onTradeAdded();
        setSymbol("");
        setPrice("");
        setQuantity("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={symbol} onChange={(e) => setSymbol(e.target.value)} placeholder="Symbol (e.g., AAPL)" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" type="number" />
            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" type="number" />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="BUY">BUY</option>
                <option value="SELL">SELL</option>
            </select>
            <button type="submit">Add Trade</button>
        </form>
    );
};

export default TradeForm;
