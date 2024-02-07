import { useRatesFilterStore } from "@/store/rates-filters-store";

/**
 * Renders a filter component for rates.
 * @param filters - An array of filter options.
 * @returns The RatesFilter component.
 */
const RatesFilter = ({ filters }: { filters: string[] }) => {
  const currentRateFilter = useRatesFilterStore(
    (state) => state.currentRateFilter
  );
  const setCurrentRateFilter = useRatesFilterStore(
    (state) => state.setCurrentRateFilter
  );

  return (
    <div className="flex scrollbar items-center gap-x-3 max-w-[520px] lg:max-w-[750px] overflow-auto">
      {filters.map((filter, i) => (
        <div
          onClick={() => {
            setCurrentRateFilter(filter);
          }}
          key={i}
          className={`${currentRateFilter === filter ? "bg-custom-blue text-white" : ""} flex items-center gap-x-2 px-4 py-3 border-solid border-[1px] rounded w-auto min-w-fit cursor-pointer border-[#9CA3AF] text-[#1F2937]`}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default RatesFilter;
