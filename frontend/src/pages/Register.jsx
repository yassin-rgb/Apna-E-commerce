import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../redux/slices/userSlice';

const Register = () => {
    const {isAuth} = useSelector((state)=> state.user)
    const navigate= useNavigate()
    useEffect(()=>{
        if(isAuth){
            navigate("/hero")
        }
    },[isAuth,navigate])
    const dispatch=useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => { dispatch(RegisterUser(data))};
    console.log(errors);

  return (
    <div>
<form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("name",{required:true})} />
      <input type="email" placeholder="Email" {...register("email", {required: true})} />
      <input type="password" placeholder="Password" {...register("password", {required: true})} />

      <input type="submit" />
    </form>
      
    </div>
  )
}

export default Register
