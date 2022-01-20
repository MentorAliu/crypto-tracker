import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [coinData, setCoinData] = useState([]);
  const [coinSearch, setCoinSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=9")
      .then((response) => setCoinData(response.data.coins))
      .catch((err) => console.log(err));
  }, []);

  const filteredCoin = coinData.filter((coin) => {
    return coin.name.toLowerCase().includes(coinSearch);
  });

  const coinSearcher = (event) => {
    const search = event.target.value;

    setCoinSearch(search);
  };

  return (
    <div className="flex-col items-center content-center">
      <div className="bg-emerald-400">
        <input
          placeholder="Search a coin"
          className="p-4"
          onChange={coinSearcher}
        />
      </div>
      <Coin filteredCoin={filteredCoin} />
    </div>
  );
}

export default App;
