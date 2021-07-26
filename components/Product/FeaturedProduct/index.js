import Image from "next/image";
import { FeaturedDescription, FeaturedWrapper } from "./styles";
import Button from "@components/Button";
import { kilobytesToMegaBytes } from "@utils/methods";
import { useAppContext } from "context/app.context";

function FeaturedProduct() {
  const { products, addToCart } = useAppContext();
  const filtered = products.filter((item) => item.featured);
  const product = filtered[0];

  if (!product) return null;

  return (
    <FeaturedWrapper>
      <div className="header">
        <h4>{product.name}</h4>
        <div className="hidden-sm">
          <Button onClick={() => addToCart(product)} variant="primary">
            Add to cart
          </Button>
        </div>
      </div>
      <div className="image-wrapper">
        <div className="image-container">
          {product.image && (
            <Image
              className="image"
              src={product.image.src}
              // width={1500}
              // height={770}
              layout="fill"
              objectFit="cover"
              objectPosition="center left"
              alt={product.image.alt}
              placeholder="blur"
              blurDataURL="/images/blur.jpg"
              quality={25}
              priority
            />
          )}
        </div>
        <span className="tag-label">Photo of the day</span>
      </div>
      <div className="hidden-lg">
        <Button onClick={() => addToCart(product)} variant="primary">
          Add to cart
        </Button>
      </div>
      <FeaturedDescription>
        <div className="about">
          <h4>About the {product?.name}</h4>
          <h4>{product.category}</h4>
          <p>{product.details.description}</p>
        </div>
        <div className="related-info">
          <div className="suggestion-container">
            <h4>People also buy</h4>
            <div className="suggestion-item-wrapper">
              {product.details.recommendations.length !== 0 &&
                product.details.recommendations.map((image, index) => (
                  <div key={index} className="suggestion-item">
                    <Image
                      className="image"
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top center"
                      placeholder="blur"
                      blurDataURL="/images/blur.jpg"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="details">
            <h4>Details</h4>
            <p>
              Size: {product.details.dimmentions.height} x{" "}
              {product.details.dimmentions.width} pixel
            </p>
            <p>Size: {kilobytesToMegaBytes(product.details.size)} mb</p>
          </div>
        </div>
      </FeaturedDescription>
    </FeaturedWrapper>
  );
}

export default FeaturedProduct;
