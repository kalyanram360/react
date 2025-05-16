import { useState, useEffect } from "react";

function useCurrencyInfo(baseCurrency) {
  const [rates, setRates] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    fetch(`https://api.exchangerate.host/latest?base=${baseCurrency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch currency data");
        }
        return res.json();
      })
      .then((data) => {
        setRates(data.rates || {});
      })
      .catch((error) => {
        console.error("Currency fetch error:", error);
        setRates({});
      });
  }, [baseCurrency]);
  console.log(rates);
  return rates;
}

export default useCurrencyInfo;
