import React from 'react'
import { Outlet } from 'react-router-dom'
import { Form } from '../Components/Form/Form'
import ChackBox from '../Components/ChackBox/ChackBox'


const Main = () => {
  return (
    <div>
        <Outlet> </Outlet>
    </div>
  )
}

export default Main