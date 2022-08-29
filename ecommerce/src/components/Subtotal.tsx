import React, { FunctionComponent } from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format"; 
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; 


const Subtotal: FunctionComponent = () => {
 const value = useSelector((state: RootState) => state.counter.value);
 return (
  <div className="subtotal">
    <p>Subtotal({value} items):</p>
    <CurrencyFormat
    renderText={(value) => (
      <>
        <strong>{value}</strong>
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