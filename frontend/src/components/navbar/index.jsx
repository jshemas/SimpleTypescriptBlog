import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavButton,
    NavButtonLink,
} from "./navbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" >
            Home
          </NavLink>
          <NavLink to="/about" >
            About
          </NavLink>
          <NavLink to="/faq" activeStyle>
            FAQ
          </NavLink>
          <NavLink to="/blog" activeStyle>
            Blog
          </NavLink>
        </NavMenu>
        <NavButton>
          <NavButtonLink to="/login">
            Log In
          </NavButtonLink>
        </NavButton>
      </Nav>
    </>
  );
};

export default Navbar;