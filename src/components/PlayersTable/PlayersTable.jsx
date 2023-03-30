import React from "react";

const PlayersTable = (props) => {
  const { playerBoard } = props;
  let price = 0;

  for (let pr in playerBoard) {
    price = price + playerBoard[pr].price;
  }

  let serialNo = 1;
  return (
    <div>
      <span className="text-xl font-semibold capitalize py-2 inline-block">
        Total Cost : ${price}
      </span>
      <table className="w-full text-center border-2 border-b-0  ">
        <thead>
          <tr className="border-2 border-b-0">
            <th className="font-bold px-3">Sl.</th>
            <th className="px-2 text-center">Img</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {playerBoard?.map((pd) => (
            <tr className="border-2 ">
              <td className="font-bold px-3 ">{serialNo++}</td>
              <td className="text-center">
                <img
                  className="h-10 w-10 inline-block rounded-full"
                  src={pd.picture}
                  alt=""
                />
              </td>
              <td>{pd.name}</td>
              <td>${pd.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;
