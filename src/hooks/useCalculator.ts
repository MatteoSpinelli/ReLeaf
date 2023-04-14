import useSWR from "swr";

export default function useCalculator(body: TestInputData) {
  const fetcher = async (uri: string) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    };

    return await fetch(process.env.REACT_APP_SERVER_URI + uri, options).then(
      (res) => res.json()
    );
  };

  const { data, isLoading, error } = useSWR("/api/v1/calculator", fetcher);

  return { data, isLoading, error } as {
    data: { data: TestData; status: any };
    isLoading: boolean;
    error: any;
  };
}
