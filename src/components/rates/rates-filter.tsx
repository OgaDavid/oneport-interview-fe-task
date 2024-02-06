// const filter = [
//   "COSCO",
//   "CMA CGM",
//   "MAERSK",
//   "PIL",
//   "ZIM",
//   "OOCL",
//   "MSC",
//   "ONE",
//   "ESL",
//   "OVERGREEN",
// ];

const RatesFilter = ({ filters }: { filters: string[] }) => {
  return (
    <div className="flex scrollbar items-center gap-x-3 max-w-[520px] lg:max-w-[750px] overflow-auto">
      {filters.map((filter, i) => (
        <div
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
