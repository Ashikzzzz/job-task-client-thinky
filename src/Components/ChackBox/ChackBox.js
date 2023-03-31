import React from 'react'
import { Link } from 'react-router-dom'

const ChackBox = () => {
  return (
    <div className='w-1/4 bg-red-100 min-h-screen' >
       <div className=" border-dashed border-2 border-indigo-600 ">
                 <Link >  <h2 className="text-2xl font-bold text-center  hover:bg-sky-700 hover:text-white">Name</h2></Link>
                </div>
    </div>
  )
}

export default ChackBox