import Button from "@components/Button";
import { CloseIcon } from "@utils/icons";
import CartItem from "./cart-item";
import { CartDropDownWrapper } from "./styles";

function CartDropDown() {
  return (
    <CartDropDownWrapper>
      <div className="close-icon">
        <CloseIcon />
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <div>
        <Button>Clear Items</Button>
      </div>
    </CartDropDownWrapper>
  );
}

export default CartDropDown;
