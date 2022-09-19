import { FunctionComponent } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Subtotal: FunctionComponent = () => {
  const items = useSelector((state: RootState) => state.counter.value);
  const subtotal = useSelector((state: RootState) => state.subtotal.value);
  console.log(subtotal, 'subtotal');
  return (
    <div className="flex flex-col space-x-2 w-60 md:w-96 bg-slate-100 border-gray-200 shadow-lg border-solid p-2 rounded-sm">
      <p>Subtotal({items} items):</p>
      <strong>{subtotal} EUR</strong>
      <CurrencyFormat
        renderText={(subtotal) => (
          <>
            <strong>{subtotal}</strong>
            <small className="flex justify-center pb-2">
              <input type="checkbox" name="hasGift" id="hasGift" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subtotal}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'€'}
      />
      <button className="bg-zinc-800">Proceed to checkout</button>
    </div>
  )
};

export default Subtotal;
