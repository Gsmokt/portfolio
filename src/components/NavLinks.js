import { navItems } from "../utils/index";
import NavLink from "./NavLink";

const NavLinks = ({ showMenu, setShowMenu }) => {
  const links = navItems.map((item) => {
    return (
      <NavLink
        key={item.name}
        item={item}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    );
  });

  return links;
};

export default NavLinks;
