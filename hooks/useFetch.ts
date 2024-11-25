import { useEffect, useState } from "react";

export const useFetch = <T>(url: string): [T | null, boolean] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data: T) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return [data, loading];
};
