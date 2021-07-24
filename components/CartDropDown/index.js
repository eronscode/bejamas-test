import Button from "@components/Button";
import { CloseIcon } from "@utils/icons";
import CartItem from "./cart-item";
import { CartContent, CartDropDownWrapper } from "./styles";

function CartDropDown({close }) {
  return (
    <CartDropDownWrapper>
      <div className="close-icon">
        <span onClick={close}><CloseIcon /></span>
      </div>
      <CartContent>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      </CartContent>
      <div className="footer">
        <Button>Clear Items</Button>
      </div>
    </CartDropDownWrapper>
  );
}

export default CartDropDown;
