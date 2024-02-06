import RatesHeader from "@/components/rates/rates-header";
import { useRatesParamsStore } from "@/store/rates-params-store";
import { useEffect, useState } from "react";
import { useRatesStore } from "@/store/rates-store";
import axios from "axios";
import Loading from "@/components/ui/loading";
import RateCard from "./rate-card";
import RateContainer from "./rate-container";
import { getRateFilter } from "@/action/get-rate-filters";

const RatesComponent = () => {
  const rateStore = useRatesStore((state) => state.rates);
  const rateFilters = useRatesParamsStore((state) => state.rateFilters);
  const setRatesStore = useRatesStore((state) => state.setRates);
  const setRateFilters = useRatesParamsStore((state) => state.setRateFilters);
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
        const fetchedRates = await rates.data.rates;

        setRatesStore(fetchedRates);
        const rateFilters: string[] = [];

        const filters = getRateFilter(fetchedRates);

        filters.forEach((filter) => {
          rateFilters.push(filter as string);
          setRateFilters(rateFilters);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, [API_URL]);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div>
          <RatesHeader rateFilters={rateFilters} />
          <RateContainer>
            {rateStore.map((rate, i) => (
              <RateCard
                key={i}
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
    </>
  );
};

export default RatesComponent;
