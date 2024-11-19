import { Label } from "../ui/label";
import { Input } from "../ui/input";

const name = "image";

const ImageInput = () => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize">
        image
      </Label>
      <Input type="file" accept="image/*" id={name} name={name} required />
    </div>
  );
};
export default ImageInput;
