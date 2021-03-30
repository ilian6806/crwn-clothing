import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.componenet';
import CustomButton from '../custom-button/custom-button.componenet';
import { selectCartitems } from '../../redux/cart/cart.seelctors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem =>
                <CartItem key={cartItem.id} item={cartItem} />
            )}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartitems(state)
});

export default connect(mapStateToProps)(CartDropdown);