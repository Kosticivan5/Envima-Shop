import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

type CheckboxProps = {
  name: string;
  label?: string;
  defaultChecked?: boolean;
};

const CheckboxInput = ({
  name,
  label,
  defaultChecked = false,
}: CheckboxProps) => {
  return (
    <div className="mb-4 flex items-center">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className="capitalize text-sm ml-1 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};
export default CheckboxInput;
