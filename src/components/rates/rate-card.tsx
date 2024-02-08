interface RateCardProps {
  carrier_name: string;
  origin_port_code: string;
  destination_port_code: string;
  sailing_date: string;
  transit_time?: string;
  detention_days: number;
  demurrage_days: number;
  amountUsd: number;
}

const RateCard = ({
  carrier_name,
  origin_port_code,
  destination_port_code,
  sailing_date,
  transit_time,
  detention_days,
  demurrage_days,
  amountUsd,
}: RateCardProps) => {
  return (
    <div className="p-5 cursor-pointer border-[2px] rounded-[10px] border-custom-border-grey hover:border-custom-green">
      <div className="flex items-center justify-between">
        <p className="text-sm text-black font-medium">{carrier_name}</p>
        <div className="black-text-3 flex text-sm font-normal items-center gap-x-2">
          <p>{origin_port_code}</p>
          <span>
            <img src="images/dash.svg" alt="hyphen" />
          </span>
          <p>{destination_port_code}</p>
        </div>
      </div>
      <div className="mt-3 mb-6 flex items-center justify-between">
        <p className="text-xl font-normal text-custom-deep-green">
          {!amountUsd ? "N/A" : "$" + amountUsd}
        </p>
        <p className="flex justify-end mb-2"></p>
      </div>
      <div className="text-sm pt-6 grid grid-cols-3 border-t border-custom-border-grey">
        <div>
          <p className="text-custom-grey font-light mb-1.5">Sailing Date</p>
          <p className="text-custom-blue">
            {sailing_date ? sailing_date : "N/A"}
          </p>
        </div>
        <div>
          <p className="text-custom-grey font-light mb-1.5">Transit Time</p>
          <p className="text-custom-blue">
            {transit_time ? `${transit_time} days` : "N/A"}
          </p>
        </div>
        <div>
          <p className="text-custom-grey font-light mb-1.5">Free Days</p>
          <p className="text-custom-blue">
            {detention_days + demurrage_days} days
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
