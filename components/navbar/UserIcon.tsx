import { FaCircleUser } from "react-icons/fa6";
import { currentUser } from "@clerk/nextjs/server";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="profile image"
        className="w-6 h-6 rounded-full"
      />
    );
  }

  return <FaCircleUser className="w-6 h-6 rounded-full" />;
};
export default UserIcon;
