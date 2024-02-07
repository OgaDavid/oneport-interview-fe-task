import { create } from "zustand";

interface RatesFilterStoreProps {
  rateFilters: string[];
  currentRateFilter: string;
  setRateFilters: (filters: string[]) => void;
  setCurrentRateFilter: (filter: string) => void;
}

export const useRatesFilterStore = create<RatesFilterStoreProps>((set) => ({
  rateFilters: [],
  currentRateFilter: "",
  setCurrentRateFilter: (filter) => set(() => ({ currentRateFilter: filter })),
  setRateFilters: (newRateFilters) =>
    set(() => ({ rateFilters: [...newRateFilters] })),
}));
