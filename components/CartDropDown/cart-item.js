import Image from 'next/image';
import { CartItemWrapper } from './styles';

function CartItem() {
    return (
        <CartItemWrapper>
            <div className="item-info">
                <h4>Testimg</h4>
                <p>$10000</p>
            </div>
            <div className="item-image">
                <Image className="image" src="/images/fashion4.jpg" layout="fill" alt="cart-item" />
            </div>
        </CartItemWrapper>
    )
}

export default CartItem
