import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
  type: string;
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = ({
  type,
  name,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};
export default FormInput;
