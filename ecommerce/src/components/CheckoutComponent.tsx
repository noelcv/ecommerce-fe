import React, { FunctionComponent } from 'react';
import './CheckoutComponent.css';


const CheckoutComponent: FunctionComponent = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-img" src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout-image" />
        <div className="checkout-shopping-basket">
          <h2 className="checkout-title">Your shopping Basket</h2>
          {/*item1* */}
          {/*item2* */}
          {/*item3* */}
        </div>
      </div>
      <div className="checkout-right">
      <h2 className="checkout-subtotal-title">Subtotal goes here</h2>

      </div>
    </div>
  )
}

export default CheckoutComponent;