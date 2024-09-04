import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <div className="flex flex-col m-20 pb-44 shadow rounded-3xl">
        <div className='flex place-content-center justify-center'>
        <img src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-basket-clipart-flat-vector-illustration-of-wicker-basket-with-a-red-png-image_6798879.png" alt="" className='h-50 w-60 '/>
        </div>
        <span className='text-[30px] text-amber-950 text-center'>YOUR BASKET FEELS LIGHT !</span>
        <div className='flex place-content-center mt-2'>
          <Link to={'/'} className='bg-amber-500  px-6 py-3 rounded-3xl hover:bg-amber-400  active:bg-amber-900  active:text-white'>SHOP NOW </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
