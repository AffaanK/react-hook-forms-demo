import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      data
    }).then((response) =>{
      console.log(data,response);
      <Redirect to='/dashboard'/>
    });
  }
  return (
    <section className="vh-100" style={{backgroundColor: 'rgb(0,0,0)'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25,backgroundColor:'darkgray'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login in</p>
                <form className="row g-3  needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                  
                 
                      <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="email" {...register('email', {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address"
                            }
                            })} id="email" className="form-control" />
                      </div>
                            <br/>
                           {errors.email && errors.email.message}
                    
                 
                  
                      
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">passwd</span>
                      <input type="password" {...register('password',{required:true})} id="password" className="form-control" />
                      {errors.password && errors.password.message}
                    </div>
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt={'adfd'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
