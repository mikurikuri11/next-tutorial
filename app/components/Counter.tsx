"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="flex flex-col items-center w-[100px]">
        <p className="text-5xl font-bold">{count}</p>
        <button
          onClick={() => setCount((previousCount) => previousCount + 1)}
          className="bg-blue-500 rounded text-white px-4 py-2 mt-4"
        >
          increment
        </button>
      </h1>
    </div>
  );
};
