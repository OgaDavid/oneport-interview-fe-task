/**
 * Represents a store for managing rates.
 * This store provides a way to store and update rates.
 */
import { Rate } from "types";
import { create } from "zustand";

// Props for the RatesStore.
interface RatesStoreProps {
  rates: Rate[];
  setRates: (rates: Rate[]) => void; // Function to set the rates to a new value.
}

// Create and initializes the RatesStore.
export const useRatesStore = create<RatesStoreProps>((set) => ({
  rates: [],
  setRates: (newRates) => set(() => ({ rates: newRates })),
}));
