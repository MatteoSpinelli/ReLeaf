import React, { useEffect, useState } from "react";

import "./Home.scss";

export default function Home() {
  // SERVER API TEST
  // It will be removed when we start the project
  const [data, setData] = useState(null);
  const getData = async () => {
    const res = await fetch("/api/v1");
    setData(await res.json());
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>{data && JSON.stringify(data)}</div>;
}
