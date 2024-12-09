"use client"
import React, { useState } from 'react'

function BCard(props) {
  const image = "src/assets/book1.jpg";
  const name = props.book.name;
  const a_name = props.book.username;

  const price = Math.floor(Math.random() * (500 - 200 + 1) + 200);
  const n_price = Math.floor(Math.random() * (500 - 250 + 1) + 250);
  const disc = discount(n_price, price);

  function discount (n_price, price) {
    if(n_price > price){
        return (((n_price - price)/n_price)*100).toFixed(1);
    }else{
        return (((price - n_price)/price)*100).toFixed(1);
    }
  }

  function pricedisc(n_price, price){
    if(n_price > price){
        return (<><b id="price" className="px-1 py-2.5">{n_price}</b><del className="text-sm px-1 py-2.5">{price}</del><strong className="text-red-700 px-1 py-2.5">+{disc}%</strong></>);
    }else{
        return (<><b id="price" className="px-1 py-2.5">{n_price}</b><del className="text-sm px-1 py-2.5">{price}</del><strong className="text-green-700 px-1 py-2.5">-{disc}%</strong></>);
    }
  }


  return (
    <>
      <div className='bg-neutral-300 bg-gradient-to-b from-purple-400 to-blue-200 w-40 h-72 m-5 rounded-xl p-2.5 text-black shadow-2xl shadow-purple-700'>
        <div className='bg-none'>

          <div  className='h-32 h-min-28 w-min-28 flex content center bg-none'>
          <img src={image} alt=" no load" className='h-full w-full'/>
          </div>

          <div className='h-16 mt-2.5 items-baseline'>
            <p className='text-sm text-slate-900 h-max-10 h-min-6'>{name}</p>
            <p className='font-bold text-slate-600 h-4'>{a_name}</p>    
          </div>

          <div>
            {pricedisc(n_price, price)}
            <button className='bg-purple-400 items-center rounded-lg w-full text-black my-1.5 px-4 hover:bg-purple-600' id='download'>Download</button>          
          </div>

         </div>
      </div>
    </>
  )
}

export default BCard