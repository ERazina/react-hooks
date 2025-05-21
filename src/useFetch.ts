import { useEffect, useState } from "react";

const useFetch = (url: string, options: any | null) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error(e.name, e.message);
          setError(e);
        } else {
          setError(new Error("unknown error"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [options, url]);

  return { data, error, loading };
};

export default useFetch;
