import Image from "next/image";
import PropTypes from "prop-types";
import { currencyTransform } from "@utils/methods";
import { CartItemWrapper } from "./styles";

const defaultProps = {
  image: undefined,
  currency: undefined,
  price: undefined,
  name: undefined,
};

const propTypes = {
  image: PropTypes.object,
  currency: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
};

function CartItem(props) {
  const { image, currency, price, name } = props;
  return (
    <CartItemWrapper>
      <div className="item-info">
        <h4>{name}</h4>
        <p>
          {currencyTransform(currency)}
          {price}
        </p>
      </div>
      <div className="item-image">
        <div className="image-container">
          <Image
            className="image"
            src={image.src}
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
            alt={image.alt}
          />
        </div>
      </div>
    </CartItemWrapper>
  );
}

CartItem.defaultProps = defaultProps;
CartItem.propTypes = propTypes;

export default CartItem;
