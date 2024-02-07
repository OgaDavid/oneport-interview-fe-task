import axios from "axios";
import { useEffect, useState } from "react";

import Loading from "@/components/ui/loading";
import RatesHeader from "@/components/rates/rates-header";
import RateCard from "./rate-card";
import RateContainer from "./rate-container";

import { getRateFilter } from "@/action/get-rate-filters";
import { useRatesParamsStore } from "@/store/rates-params-store";
import { useRatesStore } from "@/store/rates-store";
import { useRatesFilterStore } from "@/store/rates-filters-store";

/**
 * RatesComponent displays a list of rates based on certain parameters.
 * It fetches rates from the API and allows the user to filter and paginate through the results.
 */

const RatesComponent = () => {
  // State variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noOfRates, setNoOfRates] = useState(9);

  // Custom hook variables
  const containerSize = useRatesParamsStore((state) => state.containerSize);
  const containerType = useRatesParamsStore((state) => state.containerType);
  const CurrentRateFilter = useRatesFilterStore(
    (state) => state.currentRateFilter
  );
  const rateStore = useRatesStore((state) => state.rates);
  const rateFilters = useRatesFilterStore((state) => state.rateFilters);

  // Custom hook functions
  const setCurrentRateFilter = useRatesFilterStore(
    (state) => state.setCurrentRateFilter
  );
  const setRatesStore = useRatesStore((state) => state.setRates);
  const setRateFilters = useRatesFilterStore((state) => state.setRateFilters);

  // API URL
  const API_URL = `${import.meta.env.VITE_BASE_URL}/container_size=${containerSize}&container_type=${containerType}`;

  useEffect(() => {
    /**
     * Fetches rates from the API and updates the state variables accordingly.
     */
    const fetchRates = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_URL);
        const rates = await response.data;
        const fetchedRates = await rates.data.rates;

        // set the rates store and rate filters
        setRatesStore(fetchedRates);

        const rateFilters: string[] = [];

        const filters = getRateFilter(fetchedRates);
        setCurrentRateFilter(filters[0] as string);

        filters.forEach((filter) => {
          rateFilters.push(filter as string);
          setRateFilters(rateFilters);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, [API_URL]);

  // Filter and paginate rates
  const filteredRates = rateStore.filter((rate) => {
    return rate.carrier_name === CurrentRateFilter;
  });

  const paginatedRates = filteredRates.slice(0, noOfRates);

  return (
    <>
      {/* Render the rates header */}
      <RatesHeader rateFilters={rateFilters} />

      {/* Render loading spinner or rates */}
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div>
          <RateContainer>
            {paginatedRates.map((rate, i) => (
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

          {/* Render show more/less button */}
          {paginatedRates.length >= 9 && (
            <div className="mt-10">
              <p className="text-center mb-4 text-sm text-custom-black">
                Viewing {paginatedRates.length} of {filteredRates.length}{" "}
                special rates
              </p>
              {paginatedRates.length <= 9 ? (
                <button
                  className="border-solid flex px-12 mx-auto border-[1px] border-[#374151] rounded py-3"
                  onClick={() => {
                    setNoOfRates(rateStore.length);
                  }}
                >
                  Show All
                </button>
              ) : (
                <button
                  className="border-solid flex px-12 mx-auto border-[1px] border-[#374151] rounded py-3"
                  onClick={() => {
                    setNoOfRates(9);
                  }}
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RatesComponent;
