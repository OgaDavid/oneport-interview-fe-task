import { create } from "zustand";

interface RatesParamsStoreProps {
  containerSize: string;
  containerType: string;
  setContainerSize: (containerSize: string) => void;
  setContainerType: (containerType: string) => void;
}

export const useRatesParamsStore = create<RatesParamsStoreProps>((set) => ({
  containerSize: "20FT",
  containerType: "dry",
  setContainerSize: (newContainerSize) =>
    set(() => ({ containerSize: newContainerSize })),
  setContainerType: (newContainerType) =>
    set(() => ({ containerType: newContainerType })),
}));
