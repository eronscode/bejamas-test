import Image from "next/image";
import { currencyTransform } from "@utils/methods";
import { CartItemWrapper } from "./styles";

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

export default CartItem;
