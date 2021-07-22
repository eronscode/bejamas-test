import PropTypes from "prop-types";
import { HeaderWrapper } from "./styles";
import Image from "next/image";

const propTypes = {};

const defaultProps = {};

function Header() {
  return (
    <HeaderWrapper>
      <Image src="/images/logo.jpg" alt="logo" width={156} height={26} />
    </HeaderWrapper>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
