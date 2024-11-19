import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

const TextAriaInput = ({ className }: { className?: string }) => {
  const name = "description";
  return (
    <div className={cn("mb-4", className)}>
      <Label htmlFor={name} className="capitalize">
        Product Description
      </Label>
      <Textarea id={name} name={name} rows={5} required />
    </div>
  );
};
export default TextAriaInput;
