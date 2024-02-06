import RatesFilter from "./rates-filter";
import { RateSelect } from "./rates-select";

const RatesHeader = () => {
  return (
    <div className="border-b max-md:flex-col max-md:justify-start max-md:items-start gap-x-3 gap-y-5 flex items-center justify-between pb-8 border-custom-border-grey">
      <div className="flex items-center gap-x-3">
        <RateSelect type="size" />
        <RateSelect type="type" />
      </div>
      <RatesFilter />
    </div>
  );
};

export default RatesHeader;
