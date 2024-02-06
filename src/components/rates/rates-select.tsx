import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRatesParamsStore } from "@/store/rates-params-store";

enum RateContainerSelect {
  TYPE = "type",
  SIZE = "size",
}

interface RateSelectProps {
  type: "size" | "type";
}

export function RateSelect({ type }: RateSelectProps) {
  const containerSize = useRatesParamsStore((state) => state.containerSize);
  const containerType = useRatesParamsStore((state) => state.containerType);
  const setContainerSize = useRatesParamsStore(
    (state) => state.setContainerSize
  );
  const setContainerType = useRatesParamsStore(
    (state) => state.setContainerType
  );

  return (
    <>
      {type === RateContainerSelect.SIZE ? (
        <Select
          onValueChange={(selectedSize) => {
            setContainerSize(selectedSize);
          }}
        >
          <SelectTrigger className="w-fit">
            <SelectValue defaultValue={containerSize} placeholder="20FT" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                ["20FT", "40FT", "40FT HC"].map((size, i) => (
                  <SelectItem key={i} value={size}>
                    {size}
                  </SelectItem>
                ))
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        <Select
          onValueChange={(selectedType) => {
            setContainerType(selectedType);
          }}
        >
          <SelectTrigger className="w-fit">
            <SelectValue defaultValue={containerType} placeholder="DRY" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                ["DRY", "REEFER"].map((type, i) => (
                  <SelectItem key={i} value={type.toLocaleLowerCase()}>
                    {type}
                  </SelectItem>
                ))
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </>
  );
}
