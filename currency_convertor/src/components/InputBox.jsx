import React, { useState } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption =[],
  selectedCurrency ,
  amountDisable = false,
  currencyDisable = false
}) {


  return (
    <div className='bg-white p-5  rounded-xl'>
              <div className='flex justify-between'>
                <span className='text-gray-600 text-lg'>{label}</span>
                <span className='text-gray-600 text-lg'>Currency Type</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600 text-lg'><input type="number" name="" id=""  className='p-2 text-black' value={amount} disabled={amountDisable}
                onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}/></span>
                <span className='text-black'><select name="" id="" className='p-2' disabled={currencyDisable} value={selectedCurrency} onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}>

                  {currencyOption.map((c)=>{
                    return <option key ={c} value={c}>{c}</option>
                  })}
                   
                   
                  
                  
                  </select></span>
              </div>  
          </div>
  )
}

export default InputBox
