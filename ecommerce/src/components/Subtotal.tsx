import { FunctionComponent } from 'react';
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
      <button className="bg-zinc-800">Proceed to checkout</button>
    </div>
  )
};

export default Subtotal;
