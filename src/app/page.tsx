"use client";

import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState<number>();
  const [num2, setNum2] = useState<number>();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="p-10 text-2xl font-bold">Dice Game</h1>

      <p>How many sides per dice?</p>
      <input
        onChange={(e) => {
          setNum1(parseInt(e.target.value));
        }}
        type="number"
        className="m-5 text-black"
      ></input>
      <p>How many dice?</p>
      <input
        onChange={(e) => {
          setNum2(parseInt(e.target.value));
        }}
        type="number"
        className="m-5 text-black"
      ></input>
      <button className="m-5 p-2 bg-white text-black">Go!</button>

      <p className="m-5">Num1: {num1}</p>
      <p className="m-5">Num2: {num2}</p>
    </main>
  );
}
