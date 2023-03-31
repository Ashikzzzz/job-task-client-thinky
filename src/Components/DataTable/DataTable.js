import { useQuery } from '@tanstack/react-query'
import React from 'react'

const DataTable = () => {

const {data: datas=[],refetch}=useQuery({
    queryKey:["datas"],
    queryFn: async()=>{
        const uri ="http://localhost:5000/gettingData"
        const res = await fetch(uri)
        const data = res.json()
    
        return data
    }
})
console.log(datas)

  return (
    <div className='w-full  mt-24'>
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
        datas?.data?.map((data ,i)=>{
            return <tr className="active">
            <th>{i+1}</th>
            <td>{data?.name}</td>
            <td>{data?.instructor}</td>
            <td>{data?.category}</td>
            <td>{data?.price}</td>
          </tr>
        })
      }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default DataTable