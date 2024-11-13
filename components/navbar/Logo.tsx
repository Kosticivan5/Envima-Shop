import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2 className="font-plaster">
        <span className="text-main text-5xl">E</span>
        <span className="text-black dark:text-white">nvima</span>
      </h2>
    </Link>
  );
};
export default Logo;
