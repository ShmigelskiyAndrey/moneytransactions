import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetch(url, {
      headers: {
        host: "koronapay.com",
        referer: "https://koronapay.com/transfers/online/",
        origin: null,
      },
    })
      .then((response) => response.json())
      .then(setData)
      .finally(() => {
        setPending(false);
      });
  }, [url]);

  return { data, pending };
}
