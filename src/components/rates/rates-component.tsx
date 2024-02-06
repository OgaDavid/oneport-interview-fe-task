import RatesHeader from "@/components/rates/rates-header";
import { useRatesParamsStore } from "@/store/use-rates-params-store";
import { useRatesStore } from "@/store/use-rates-store";
import axios from "axios";
import { useEffect } from "react";

const RatesComponent = () => {
  const rateStore = useRatesStore((state) => state.rates);
  const setRatesStore = useRatesStore((state) => state.setRates);
  const containerSize = useRatesParamsStore((state) => state.containerSize);
  const containerType = useRatesParamsStore((state) => state.containerType);

  useEffect(() => {
    const API_URL = `${import.meta.env.VITE_BASE_URL}/container_size=${containerSize}&container_type=${containerType}`;
    const fetchRates = async () => {
      try {
        const response = await axios.get(API_URL);
        const rates = response.data; // Extract the 'data' property from the AxiosResponse object
        setRatesStore(rates);
        console.log(rateStore);
        console.log(API_URL);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRates();
  }, [containerSize, containerType]);

  return (
    <div className="mt-10">
      <div className="card-rates grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <RatesHeader />
      </div>
    </div>
  );
};

export default RatesComponent;
