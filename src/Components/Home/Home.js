import React from 'react'
import { Form } from '../Form/Form'
import ChackBox from '../ChackBox/ChackBox'
import DataTable from '../DataTable/DataTable'

const Home = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-10 grid-cols-1 '>
        <ChackBox></ChackBox>
        <Form></Form>
        <DataTable></DataTable>
    </div>
  )
}

export default Home