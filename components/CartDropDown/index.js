import Button from "@components/Button";
import { CloseIcon } from "@utils/icons";
import { NoCartItem } from "@utils/placeholders";
import CartItem from "./cart-item";
import { CartContent, CartDropDownWrapper } from "./styles";

function CartDropDown({ close, resetCart, cart }) {
  return (
    <CartDropDownWrapper>
      <div className="close-icon">
        <span onClick={close}>
          <CloseIcon />
        </span>
      </div>
      {cart.length === 0 ? (
        <NoCartItem />
      ) : (
        <>
          <CartContent>
            {cart.length !== 0 &&
              cart.map((item, index) => <CartItem key={index} {...item} />)}
          </CartContent>
          <div className="footer">
            <Button onClick={resetCart}>Clear Items</Button>
          </div>
        </>
      )}
    </CartDropDownWrapper>
  );
}

export default CartDropDown;
