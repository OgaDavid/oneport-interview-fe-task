import { create } from "zustand";

interface RatesStoreProps {
  containerSize: string;
  containerType: string;
  setContainerSize: (containerSize: string) => void;
  setContainerType: (containerType: string) => void;
}

export const useRatesStore = create<RatesStoreProps>((set) => ({
  containerSize: "20FT",
  containerType: "dry",
  setContainerSize: (newContainerSize) =>
    set(() => ({ containerSize: newContainerSize })),
  setContainerType: (newContainerType) =>
    set(() => ({ containerType: newContainerType })),
}));
