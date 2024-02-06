import { RateSelect } from "./rates-select";

const RatesHeader = () => {
  return (
    <div className="border-b pb-8 border-custom-border-grey">
      <div className="flex items-center gap-x-3">
        <RateSelect type="size" />
        <RateSelect type="type" />
      </div>
    </div>
  );
};

export default RatesHeader;
