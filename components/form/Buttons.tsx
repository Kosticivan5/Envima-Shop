"use client";

import { Loader } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="bg-primary text-secondary"
      type="submit"
      disabled={pending}
      size={"lg"}
    >
      {pending ? (
        <>
          <Loader className="animate-spin w-4 h-4" />
          creating...
        </>
      ) : (
        "Create Product"
      )}
    </Button>
  );
};
