import Logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <div id="main-header">
      <div id="title">
        <img src={Logo} alt="Logo" />
      </div>
      <button>Cart (0)</button>
    </div>
  );
};

export default Header;
