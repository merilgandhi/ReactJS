import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res.rates || {});
      })
      .catch(() => setdata({}));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
