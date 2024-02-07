import { useRatesStore } from "@/store/rates-store";

const RatesFilter = ({ filters }: { filters: string[] }) => {
  const rateStore = useRatesStore((state) => state.rates);
  const setRates = useRatesStore((state) => state.setRates);
  return (
    <div className="flex scrollbar items-center gap-x-3 max-w-[520px] lg:max-w-[750px] overflow-auto">
      {filters.map((filter, i) => (
        <div
          onClick={() => {
            setRates(
              rateStore.filter((rate) => {
                return rate.carrier_name === filter;
              })
            );
          }}
          key={i}
          className="flex items-center gap-x-2 px-4 py-3 border-solid border-[1px] rounded w-auto min-w-fit cursor-pointer border-[#9CA3AF] text-[#1F2937]"
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default RatesFilter;
