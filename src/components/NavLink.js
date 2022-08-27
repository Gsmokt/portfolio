import { Link } from "react-scroll";

const NavLink = ({ item, showMenu, setShowMenu }) => {
  return (
    <li>
      <Link
        to={item.name}
        onClick={
          window.innerWidth <= 1040 ? () => setShowMenu(!showMenu) : undefined
        }
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        offset={item.offset}
      >
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </Link>
    </li>
  );
};

export default NavLink;
