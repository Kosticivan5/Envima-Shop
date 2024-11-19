import { Label } from "../ui/label";
import { Input } from "../ui/input";

const name = "price";

type PriceProps = {
  defaultValue?: number;
  label?: string;
};

const PriceInput = ({ defaultValue, label }: PriceProps) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        type="number"
        min={5}
        max={500}
        id={name}
        name={name}
        placeholder="100"
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};
export default PriceInput;
