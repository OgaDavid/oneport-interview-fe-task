/**
 * Represents the store for managing rate filters.
 */
import { create } from "zustand";

// Props for the RatesFilterStore.
interface RatesFilterStoreProps {
  rateFilters: string[];
  currentRateFilter: string;

  /**
   * Sets the rate filters.
   * @param filters - The new rate filters.
   */
  setRateFilters: (filters: string[]) => void;

  /**
   * Sets the current rate filter.
   * @param filter - The new current rate filter.
   */
  setCurrentRateFilter: (filter: string) => void;
}

// Creates and initializes the RatesFilterStore.
export const useRatesFilterStore = create<RatesFilterStoreProps>((set) => ({
  rateFilters: [],
  currentRateFilter: "",
  setCurrentRateFilter: (filter) => set(() => ({ currentRateFilter: filter })),
  setRateFilters: (newRateFilters) =>
    set(() => ({ rateFilters: [...newRateFilters] })),
}));
