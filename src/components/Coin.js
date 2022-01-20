import React from "react";
const Coin = ({ filteredCoin }) => {
  return (
    <>
      {filteredCoin.map((coin) => {
        return (
          <div
            key={coin.rank}
            className="max-w-sm rounded overflow-hidden shadow-lg flex justify-center"
          >
            <img src={coin.icon} alt="coin.name" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2">{coin.name}</h1>
              <p className="text-gray-700 text-base">{coin.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Coin;
