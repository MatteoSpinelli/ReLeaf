import React from "react";
import useSWR from "swr";

import { AiFillApi } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";
import useTheme from "../../hooks/useTheme";

export default function ServerTest() {
  // SERVER API TEST: It will be removed when we start the project
  const { data, error, isLoading, mutate } = useSWR(`/api/v1`);
  const { isDark } = useTheme();

  return (
    <div className="relative group" onClick={mutate}>
      {isLoading && (
        <div className="m-1 border border-transparent rounded-md cursor-pointer flex justify-center items-center">
          <ImSpinner2
            size={24}
            className={`animate-spin p-1 ${
              !isDark ? "fill-white" : "fill-black"
            }`}
          />
        </div>
      )}
      {error && !isLoading && (
        <div className="m-1 border rounded-md bg-red-600 cursor-pointer flex justify-center items-center">
          <AiFillApi className="fill-red-100 p-1" size={24} />
        </div>
      )}
      {data && !error && !isLoading && (
        <div className="m-1 border rounded-md bg-green-600 cursor-pointer flex justify-center items-center">
          <AiFillApi className="fill-green-100 p-1" size={24} />
        </div>
      )}
      <div
        className={`invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 opacity-0 tooltip flex justify-center min-w-max p-1 absolute w-fit h-6 -top-7 backdrop-blur-sm rounded-md text-[10px] ${
          data && !error
            ? "bg-green-50/80 text-green-600 border border-green-300"
            : "bg-red-50/80 text-red-600 border border-red-300"
        }`}
      >
        {data && !error && !isLoading
          ? "Server is online"
          : "Couldn't connect to the server"}
      </div>
    </div>
  );
}
