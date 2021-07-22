import PropTypes from "prop-types";
import { HeaderWrapper } from "./styles";
import Image from "next/image";
import { CartIcon } from "@utils/icons";
import CartDropDown from "@components/CartDropDown";

const propTypes = {};

const defaultProps = {};

function Header() {
  return (
    <HeaderWrapper>
      <Image src="/images/logo.jpg" alt="logo" width={156} height={26} />
      <div>
        <span>
          <CartIcon />
          <span className="cart-badge">1</span>
        </span>
        {/* <CartDropDown /> */}
      </div>
    </HeaderWrapper>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
