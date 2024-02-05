import RatesHeader from "@/components/rates/rates-header";

const RatesComponent = () => {
  return (
    <div className="mt-10">
      <div className="card-rates grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <RatesHeader />
      </div>
    </div>
  );
};

export default RatesComponent;
