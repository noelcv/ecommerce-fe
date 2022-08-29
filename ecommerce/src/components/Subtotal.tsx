import React, { FunctionComponent } from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";  


const Subtotal: FunctionComponent = () => {
 return (
  <div className="subtotal">
    <CurrencyFormat
    renderText={(value) => (
      <>
        <p>Subtotal(0 items): <strong>0</strong></p>
        <small className="subtotal-gift">
          <input type="checkbox" name="hasGift" id="hasGift" />
          This order contains a gift
        </small>
      </>
    )}
    decimalScale={2}
    value={0} //TODO: check how to pass the correct value
    displayType={"text"}
    thousandSeparator={true}
    prefix={"€"}
    />
    <button className="checkout-btn">Proceed to checkout</button>
  </div>
 )
}

export default Subtotal;