import { Rate } from "types";
import { create } from "zustand";

interface RatesStoreProps {
  rates: Rate[];
  setRates: (rates: Rate[]) => void;
}

export const useRatesStore = create<RatesStoreProps>((set) => ({
  rates: [],
  setRates: (newRates) => set(() => ({ rates: newRates })),
}));
