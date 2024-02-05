export interface Rate {
  freightify_request_id: string;
  freightify_offer_id: string;
  carrier_name: string;
  carrier_image: string;
  carrier_scac: string;
  offer_type: string;
  route_schedule: [];
  service_type: string;
  sailing_date: string;
  demurrage_days: number;
  detention_days: number;
  valid_to: string;
  valid_from: string;
  commodity: string;
  total_amount_usd: number;
  total_amount_ngn: number;
  charge_breakdown: {
    ocean_charges: [
      [
        {
          amount: number;
          amountUsd: number;
          description: string;
          qty: 1;
          rate: number;
          rateCurrency: string;
          rateUsd: number;
          rateBasis: string;
          rateTypeCode: string;
          paymentMethod: string;
          containerType: string;
          amountNgn: number;
          rateNgn: number;
        },
      ],
    ];
  };
  origin_port_code: string;
  destination_port_code: string;
  special_rate_id: string;
}

export enum ContainerSize {
  "20FT",
  "40FT",
  "40FT HC",
}

export enum ContainerType {
  DRY = "dry",
  REFEER = "REEFER",
}
