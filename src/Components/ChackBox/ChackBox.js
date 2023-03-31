import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ChackBox = () => {
const [names,setNames]=useState([])

useEffect(()=>{
    fetch("http://localhost:5000/categoryName")
    .then(res => res.json())
    .then(data=> setNames(data))
},[])

  return (
    <div className='w-full p-10 bg-sky-100 min-h-screen mt-24' >
            {
                names?.data?.map(name=>{
                    return <div className=" my-4 border-2 border-indigo-600 hover:border-gray-500">
                   <Link to={`/categoryName/${name.category_name}`}>  <h2 className="text-2xl font-bold text-center  hover:bg-sky-700 hover:text-white">{name.category_name}</h2></Link>
                   </div> 
                })
            }
    </div>
  )
}

export default ChackBox
