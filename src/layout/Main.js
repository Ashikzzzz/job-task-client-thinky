import React from 'react'
import { Outlet } from 'react-router-dom'
import { Form } from '../Components/Form/Form'
import ChackBox from '../Components/ChackBox/ChackBox'
import DataTable from '../Components/DataTable/DataTable'


const Main = () => {
  return (
    <div>
        <Outlet></Outlet>
        <div className='grid lg:grid-cols-3 grid-cols-1'> 
        <ChackBox></ChackBox>
        <Form></Form>
        <DataTable></DataTable>
        </div>
    </div>
  )
}

export default Main