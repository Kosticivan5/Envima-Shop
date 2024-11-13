import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Button } from "../ui/button";

const FavoriteToggleButton = () => {
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className="bg-white hover:bg-white"
    >
      <MdOutlineFavoriteBorder className="text-black" />
    </Button>
  );
};
export default FavoriteToggleButton;
