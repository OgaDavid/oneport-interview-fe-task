import RatesHeader from "@/components/rates/rates-header";
import { useRatesParamsStore } from "@/store/rates-params-store";
import { useEffect, useState } from "react";
import { useRatesStore } from "@/store/rates-store";
import axios from "axios";
import Loading from "@/components/ui/loading";
import RateCard from "./rate-card";
import RateContainer from "./rate-container";

const RatesComponent = () => {
  const rateStore = useRatesStore((state) => state.rates);
  const setRatesStore = useRatesStore((state) => state.setRates);
  const containerSize = useRatesParamsStore((state) => state.containerSize);
  const containerType = useRatesParamsStore((state) => state.containerType);

  const [isLoading, setIsLoading] = useState<boolean>();

  const API_URL = `${import.meta.env.VITE_BASE_URL}/container_size=${containerSize}&container_type=${containerType}`;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_URL);
        const rates = await response.data;

        setRatesStore(rates.data.rates);
        console.log(rates);
        console.log(rateStore);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, [API_URL]);

  return (
    <div className="mt-10">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          <RatesHeader />
          <RateContainer>
            {rateStore.map((rate) => (
              <RateCard
                amountUsd={rate.total_amount_usd}
                carrier_name={rate.carrier_name}
                demurrage_days={rate.demurrage_days}
                destination_port_code={rate.destination_port_code}
                detention_days={rate.demurrage_days}
                origin_port_code={rate.origin_port_code}
                sailing_date={rate.sailing_date}
                transit_time={rate.transit_time}
              />
            ))}
          </RateContainer>
        </div>
      )}
    </div>
  );
};

export default RatesComponent;
