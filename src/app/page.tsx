"use client";

import { useState } from "react";
import { result } from ".";

export default function Home() {
  const [sides, setSides] = useState<number>(6);
  const [numOfDice, setNumOfDice] = useState<number>(1);
  const [eachRoll, setEachRoll] = useState<number[]>();
  const [totalResult, setTotalResult] = useState<number>();

  let roll = result(numOfDice, sides);

  const handleClick = () => {
    setEachRoll(roll?.eachDice);
    setTotalResult(roll?.total);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="p-10 text-2xl font-bold text-red-500">Dice Game</h1>

      <p className="text-yellow-500">How many sides per dice?</p>
      <input
        defaultValue="6"
        onChange={(e) => {
          setSides(parseInt(e.target.value));
        }}
        type="number"
        className="m-5 text-white border-pink-500 border-2 bg-black"
      ></input>

      <p className="text-green-500">How many dice?</p>
      <input
        defaultValue="1"
        onChange={(e) => {
          setNumOfDice(parseInt(e.target.value));
        }}
        type="number"
        className="m-5 text-white bg-black border-orange-500 border-2"
      ></input>

      <button onClick={handleClick} className="m-5 p-2 border-purple-500 border-2 text-white">
        Go!
      </button>

      <p className="m-5 text-blue-500">Individual rolls: {eachRoll?.join(", ")}</p>
      <p className="m-5 text-red-500">Total result: {totalResult}</p>
    </main>
  );
}
