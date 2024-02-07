import { create } from "zustand";

/**
 * Represents the store for managing rate params.
 */
interface RatesParamsStoreProps {
  containerSize: string;
  containerType: string;

  /**
   * Sets the container size.
   * @param containerSize - The new container size.
   */
  setContainerSize: (containerSize: string) => void;

  /**
   * Sets the container type.s
   * @param containerType - The new container type.
   */
  setContainerType: (containerType: string) => void;
}

// Creates and initializes the RatesParamsStore.
export const useRatesParamsStore = create<RatesParamsStoreProps>((set) => ({
  containerSize: "20FT",
  containerType: "dry",
  setContainerSize: (newContainerSize) =>
    set(() => ({ containerSize: newContainerSize })),
  setContainerType: (newContainerType) =>
    set(() => ({ containerType: newContainerType })),
}));
