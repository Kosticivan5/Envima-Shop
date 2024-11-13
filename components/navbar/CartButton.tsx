import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../ui/button";
import Link from "next/link";

const CartButton = () => {
  return (
    <Button
      variant={"ghost"}
      asChild
      size={"icon"}
      className="flex items-center justify-center relative"
    >
      <Link href={"/cart"}>
        <FiShoppingCart />
        <span className="absolute top-0.5 right-0 bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center text-xs">
          0
        </span>
      </Link>
    </Button>
  );
};
export default CartButton;
