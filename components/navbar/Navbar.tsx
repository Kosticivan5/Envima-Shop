import Logo from "./Logo";
import NavSearch from "./NavSearch";
import DarkMode from "./DarkMode";
import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import Container from "../global/Container";
import { Separator } from "../ui/separator";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex items-center justify-between gap-8 py-2 ">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex items-center gap-2">
          <DarkMode />
          <Separator orientation="vertical" className="h-6" />
          <CartButton />
          <Separator orientation="vertical" className="h-6" />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
