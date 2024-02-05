import axios from "axios";
import { Rate } from "types";

const BASE_URL =
  "https://test-api.oneport365.com/api/live_rates/get_special_rates_no_auth?";

const getAllRates = async (
  containerSize: string,
  containerType: string
): Promise<Rate[]> => {
  const rates = await axios.get(
    `${BASE_URL}/container_size=${containerSize}&container_type=${containerType}`
  );
  return rates.data.rates;
};

export default getAllRates;
