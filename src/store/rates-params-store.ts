import { create } from "zustand";

interface RatesParamsStoreProps {
  currentRateFilter: string;
  rateFilters: string[];
  containerSize: string;
  containerType: string;
  setRateFilters: (filters: string[]) => void;
  setContainerSize: (containerSize: string) => void;
  setContainerType: (containerType: string) => void;
}

export const useRatesParamsStore = create<RatesParamsStoreProps>((set) => ({
  rateFilters: [],
  currentRateFilter: "",
  containerSize: "20FT",
  containerType: "dry",
  setRateFilters: (newRateFilters) =>
    set(() => ({ rateFilters: [...newRateFilters] })),
  setContainerSize: (newContainerSize) =>
    set(() => ({ containerSize: newContainerSize })),
  setContainerType: (newContainerType) =>
    set(() => ({ containerType: newContainerType })),
}));
