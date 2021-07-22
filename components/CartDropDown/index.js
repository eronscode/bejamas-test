import { CloseIcon } from "@utils/icons"
import CartItem from "./cart-item"
import { CartDropDownWrapper } from "./styles"

function CartDropDown() {
    return (
        <CartDropDownWrapper>
            <div className="close-icon">
                <CloseIcon />
            </div>
            <CartItem />
            
        </CartDropDownWrapper>
    )
}

export default CartDropDown
