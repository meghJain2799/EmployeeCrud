import axios from "axios";
import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";




const Edit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { id } = useParams()

  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  let navigate = useNavigate()
 
  const handleChange =(e) => {
    setEmployee({...employee,[e.target.name]:e.target.value})
  }
  const onSubmit = (data) => {
    axios.put(`http://localhost:3003/users/${id}`, employee).then(res => console.log(res))
    reset()
    navigate('/')
  }

  const loadEmployee = () => {
    axios.get(`http://localhost:3003/users/${id}` ).then(res => setEmployee(res.data))
  }

  useEffect(() => {
    loadEmployee()
  }, [])
  

  return (
    <div className="form_container">
      <div className="form_main mt-5">
        <h1 className="form_head">Employee Details</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form_label">First Name</label>
            <input
              type="text"
              className="form_input"
              value={employee.firstname}
              name="firstname"
              {...register("firstname", { required: "First Name is required",   minLength:{
                value:4,
                message:"Minimum length should be 4"
              } })}
             
              onChange={e => handleChange(e)}
              
            ></input>
            {errors.firstname && (
              <small className="text-danger">{errors.firstname.message}</small>
            )}
          </div>
          <div>
            <label className="form_label">Last Name</label>
            <input
              type="text"
              className="form_input"
              value={employee.lastname}
              name="lastname"
              {...register("lastname", { required: "Last Name is required", minLength:{
                value:4,
                message:"Minimum length should be 4"
              } })}
              
              
              onChange={e => handleChange(e)}
            ></input>
            {errors.lastName && (
              <small className="text-danger">{errors.lastname.message}</small>
            )}
          </div>

          <div>
            <label className="form_label">Email Id</label>
            <input
              type="email"
              className="form_input"
              value={employee.email}
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              
             
              onChange={e => handleChange(e)}
            ></input>
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
          <div className="text-center">
            <button type="submit" className="form_add my-3 px-3 py-2">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
