
import React from 'react'

export const Form = () => {

const handleSubmit=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name= form.course.value;
    const instructor = form.instructor.value;
    const category= form.category.value;
    const price = form.price.value;
    const bookings = {
        name: name,
        instructor: instructor,
        category: category,
        price: price,
    }
    console.log(bookings)
    
    fetch("http://localhost:5000/bookings",{
        method:"POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(bookings)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data?.data.insertedId){

        }
    })


}

  return (
    <div className='w-1/2'> 
        <div className='mt-10'>
        <h1 className='text-3xl font-bold '>Add Your Course</h1>
    <form onSubmit={handleSubmit}>
        <div className='mb-4'> 
            {/* course name  */}


        <div className="form-control w-full max-w-xs">
       <label className="label">
        <span className="label-text">Course Name</span> 
        </label>
       <input type="text" name='course' placeholder="Course Name" className="input input-bordered w-full max-w-xs" />
         </div>
         {/* instructor  */}


        <div className="form-control w-full max-w-xs">
       <label className="label">
        <span className="label-text">Instructor Name</span> 
        </label>
       <input type="text" name='instructor' placeholder="Instructor Name" className="input input-bordered w-full max-w-xs" />
         </div>
         {/* category */}


        <div className="form-control w-full max-w-xs mt-4">
       <select name='category' className="select select-bordered w-full max-w-xs">
        <option disabled selected>Select Your Catgery</option>
       <option>React</option>
       <option>Python</option>
       <option>Angular</option>
       <option>Flutter</option>
       <option>Java</option>       
       </select>
         </div>
         {/* price  */}


        <div className="form-control w-full max-w-xs">
       <label className="label">
        <span className="label-text">Price</span> 
        </label>
       <input type="text" name='price' placeholder="price" className="input input-bordered w-full max-w-xs" />
         </div>
        </div>
        
           <input className='btn color-lime-500	mt-2' value='Submit' type="submit" />
    </form>
    </div>
    </div>
  )
}
