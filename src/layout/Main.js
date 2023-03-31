import React from 'react'
import { Outlet } from 'react-router-dom'
import { Form } from '../Components/Form/Form'
import ChackBox from '../Components/ChackBox/ChackBox'


const Main = () => {
  return (
    <div>
        <Outlet> </Outlet>
        {/* <div className='grid lg:grid-cols-2 grid-cols-1'> 
        <ChackBox></ChackBox>
        <Form></Form>
        </div> */}
    </div>
  )
}

export default Main