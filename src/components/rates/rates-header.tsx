import { RateSelect } from "./rates-select";

const RatesHeader = () => {
  return (
    <div>
      <div className="flex items-center gap-x-3">
        <RateSelect type="size" />
        <RateSelect type="type" />
      </div>
    </div>
  );
};

export default RatesHeader;
