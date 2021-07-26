import Button from "@components/Button";
import { currencyTransform } from "@utils/methods";
import Image from "next/image";
import { ProductCardContainer } from "./styles";

function ProductCard(props) {
  const { bestseller, price, currency, category, image, name, addToCart } =
    props;
  return (
    <ProductCardContainer>
      <div className="">
        <div className="image-container">
          <Image
            className="image"
            src={image.src}
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
            alt={image.alt}
          />
          {bestseller && <span className="tag-label">Best Seller</span>}
          <Button className="cart-button" onClick={addToCart}>
            add to cart
          </Button>
        </div>
        <div className="product-info">
          <span>{category}</span>
          <h4>{name}</h4>
          <p>
            {currencyTransform(currency)}
            {price}{" "}
          </p>
        </div>
      </div>
    </ProductCardContainer>
  );
}

export default ProductCard;
