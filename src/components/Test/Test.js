import React from "react";
import useSWR from "swr";

export default function Test() {
  // SERVER API TEST: It will be removed when we start the project
  const { data, error, isLoading } = useSWR(`/api/v1`);
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && JSON.stringify(error)}
      {data && !error && JSON.stringify(data)}
    </div>
  );
}
