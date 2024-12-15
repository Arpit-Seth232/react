import { useState } from 'react'
import {InputBox} from './components'
import useCurrency_info from './hooks/useCurrency_info'


import './App.css'

function App() {
  const [amount, setamount] = useState(0);
  const [from , setfrom] = useState("usd");
  const [to , setto] = useState("inr");
  const [converted,setconverted] =useState(0);

  const CurrencyInfo = useCurrency_info(from);


  const swap = (()=>{
    setfrom(to);
    setto(from);
    setamount(converted);
    setconverted(amount);
  });

  const Options = Object.keys(CurrencyInfo);

  function convert(){
    setconverted(amount * CurrencyInfo[to]);
  }




  return (
    <>
      <div className='flex justify-center items-center w-screen h-screen font-mono '>
        <div className='backdrop-blur-xl p-10 rounded-xl'>
          <h1 className='text-blue-200 text-5xl font-extrabold mb-10'>Currency Convertor</h1>

         <InputBox label="From :" amount={amount} selectedCurrency={from} currencyOption={Options} onAmountChange={setamount} onCurrencyChange={setfrom}/>

          <div className='text-center -m-4'>
            <button className='bg-blue-600 p-3 text-blue-100 rounded-xl text-lg' onClick={swap}>Swap</button>
          </div>

          <InputBox label="To :" amount={converted} selectedCurrency={to} currencyOption={Options} onAmountChange={setconverted} onCurrencyChange={setto}/>

        <div className='text-center mt-5'>
          <button className='w-full bg-blue-600 p-3 text-blue-100 text-lg font-bold rounded-xl' onClick={convert}>Convert {from.toUpperCase()} To {to.toUpperCase()} </button>
        </div>
        </div>


      </div>
    </>
  )
}

export default App
