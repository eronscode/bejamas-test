import { FeaturedDescription, FeaturedWrapper } from "./styles";
import Button from "@components/Button";
import Image from "next/image";

function FeaturedProduct() {
    var items = [
        { name: 'Edward A', value: 21 },
        { name: 'Sharpe I', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: 13 },
        { name: 'Zeros', value: 37 }
      ];
    function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
          }
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }
      const yrm = compareValues('name', 'asc')
      items.sort(function(b, a) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      
        console.log(items)
  return (
    <FeaturedWrapper>
      <div className="header">
        <h4>Some things about me</h4>
        <div className="hidden-sm">
          <Button variant="primary">Add to cart</Button>
        </div>
      </div>
      <div className="image-wrapper">
        <div className="image-container">
          <Image
            className="image"
            src="/images/fashion4.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
            alt="cart-item"
          />
        </div>
        <span className="tag-label">Photo of the day</span>
      </div>
      <div className="hidden-lg">
          <Button variant="primary">Add to cart</Button>
        </div>
      <FeaturedDescription>
        <div className="about">
          <h4>About the Samurai King Resting</h4>
          <h4>Pets</h4>
          <p>
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder text to mockup various fonts for a type specimen
            book.So how did the classical Latin become so incoherent? According
            to McClintock.
          </p>
        </div>
        <div className="related-info">
          <div className="suggestion-container">
            <h4>People also buy</h4>
            <div className="suggestion-item-wrapper">
              <div className="suggestion-item">
                <Image
                  className="image"
                  src="/images/fashion4.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center"
                  alt="cart-item"
                />
              </div>
              <div className="suggestion-item">
                <Image
                  className="image"
                  src="/images/fashion4.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center"
                  alt="cart-item"
                />
              </div>
              <div className="suggestion-item">
                <Image
                  className="image"
                  src="/images/fashion4.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center"
                  alt="cart-item"
                />
              </div>
            </div>
          </div>
          <div className="details">
            <h4>Details</h4>
            <p>Size: 1020 x 1020 pixel</p>
            <p>Size: 15 mb</p>
          </div>
        </div>
      </FeaturedDescription>
    </FeaturedWrapper>
  );
}

export default FeaturedProduct;
