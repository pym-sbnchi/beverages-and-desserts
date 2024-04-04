import React,{useContext} from "react";
import useFormField from "../../../Utils/useFormFields";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/AuthSlice";
export default function Login({ handlePage }) {
  const [fields, handleChange] = useFormField();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
        const res=await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(fields)
        })
        const data= await res.json()
        dispatch(login(data))
        navigate('/')
    }catch(err){
        alert(err)
    }
  }
  return (
    <form>
      <caption>Login Form</caption>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
            Username
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button onClick={handleSubmit} type="submit" className="btn btn-primary">
        Submit
      </button>
      <h2 onClick={handlePage}>go to Register page</h2>
    </form>
  );
}
