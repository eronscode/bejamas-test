import Button from "@components/Button";
import Image from "next/image";
import { ProductCardContainer } from "./styles";

function ProductCard() {
  return (
    <ProductCardContainer>
      <div className="">
        <div className="image-container">
          <Image
            className="image"
            src="/images/fashion4.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
            alt="cart-item"
          />
          <span className="tag-label">Best Seller</span>
          <Button className="cart-button">add to cart</Button>
        </div>
        <div className="product-info">
          <span>People</span>
          <h4>Red Bench</h4>
          <p>$3.89 </p>
        </div>
      </div>
    </ProductCardContainer>
  );
}

export default ProductCard;
