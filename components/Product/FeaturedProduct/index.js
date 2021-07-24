import { FeaturedDescription, FeaturedWrapper } from "./styles";
import Button from "@components/Button";
import Image from "next/image";
import { kilobytesToMegaBytes } from "@utils/methods";
import { useAppContext } from "context/app.context";

function FeaturedProduct() {
  const { products, addToCart } = useAppContext();
  const filtered = products.filter((item) => item.featured);
  const product = filtered[0];
  // var items = [
  //     { name: 'Edward A', value: 21 },
  //     { name: 'Sharpe I', value: 37 },
  //     { name: 'And', value: 45 },
  //     { name: 'The', value: -12 },
  //     { name: 'Magnetic', value: 13 },
  //     { name: 'Zeros', value: 37 }
  //   ];
  // function compareValues(key, order = 'asc') {
  //     return function innerSort(a, b) {
  //       if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
  //         // property doesn't exist on either object
  //         return 0;
  //       }

  //       const varA = (typeof a[key] === 'string')
  //         ? a[key].toUpperCase() : a[key];
  //       const varB = (typeof b[key] === 'string')
  //         ? b[key].toUpperCase() : b[key];

  //       let comparison = 0;
  //       if (varA > varB) {
  //         comparison = 1;
  //       } else if (varA < varB) {
  //         comparison = -1;
  //       }
  //       return (
  //         (order === 'desc') ? (comparison * -1) : comparison
  //       );
  //     };
  //   }
  //   const yrm = compareValues('name', 'asc')
  //   items.sort(function(b, a) {
  //     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }

  //     // names must be equal
  //     return 0;
  //   });

  //     console.log(items)
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
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              alt={product.image.alt}
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
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top center"
                      alt={image.alt}
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
