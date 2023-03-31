import React from 'react'
import { useLoaderData } from 'react-router-dom'

const IndividualData = () => {
const data = useLoaderData()
console.log(data.data)
  return (
    <div>
       <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
    <tr>
        <th></th>
        <th>Course Name</th>
        <th>Instructor</th>
        <th>Category</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        data?.data?.map((d,i)=>{
            return <tr>
            <th>{i+1}</th>
            <td>{d?.name}</td>
            <td>{d?.instructor}</td>
            <td>{d?.category_name}</td>
            <td>{d?.price}</td>
          </tr>
        })
      }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default IndividualData