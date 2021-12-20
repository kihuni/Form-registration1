import React from 'react'

import useForm from './useForm'
import validate from './ValidateInfor'

const Form = ({submitform}) => {
const{handleChange, values, handleSubmit, errors} = useForm(submitform,validate)

    return (
        <div className='container'>
           <form action="" onSubmit={handleSubmit}>
                 <h2>Registraction Form</h2>
              <div className='form-input'>
                <label htmlFor="name" >Name</label>
                <input type="text"
                 id='name' 
                name='name'
                value={values.name}
                onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div className='form-input'>
                 <label htmlFor="email" >Email Address</label>
                 <input type="email" 
                 id='email' 
                 name='email'
                 value={values.email}
                 onChange={handleChange}
                 />
                   {errors.email && <p>{errors.email}</p>}
              </div>
              <div className='form-input'>
                 <label htmlFor="Country" >Country</label>
                 <input type="text"
                 id='Country' 
                 name='country'
                 value={values.country}
                 onChange={handleChange}
                 />
                   {errors.country && <p>{errors.country}</p>}
              </div>
              <div className='form-input'>
                 <label htmlFor="phone" >Phone</label>
                 <input type="tel" 
                 id='phone' 
                 name='phone'
                 value={values.phone}
                 onChange={handleChange}
                 />
                   {errors.phone && <p>{errors.phone}</p>}
              </div>
              <div className='form-input'>
                 <label htmlFor="password" >Password</label>
                 <input type="pwd" 
                 id='password' 
                 name='password'
                 value={values.password}
                 onChange={handleChange}
                 />
                   {errors.password && <p>{errors.password}</p>}
              </div>
              <div className='form-check'>
                 <input className='check' 
                 type="checkbox" 
                 name='checkbox'
                 value={values.checkbox}
                 onChange={handleChange}
                 />
                 <span>I accept terms & Condition</span>
              </div>
              <div className='form-submit'>
                <button type='submit'>Submit</button>
              </div>
            </form> 
        </div>
    )
}

export default Form
