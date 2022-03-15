import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

  const [employees, setEmployees] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
   getEmployees()
  }, [employees])
  
  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3003/users/${id}`)
    getEmployees()
  }
   
  const getEmployees = () => {
    axios.get("http://localhost:3003/users").then(res => {setEmployees(res.data.reverse())})
  }
  return (
    <div className='mt-5'>
        <div className='text-center my-3'>
            <input type="search" placeholder='search employee...' className='input_search' onChange={e => {setSearch(e.target.value)}}></input>
        </div>
      <div className='m-5'>
      <table className="table table-warning table-striped">
        <thead>
          <tr>
            <th> Sr. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.filter((val) =>{
              if(search == ""){
                return val
              }else if(val.firstname.toLowerCase().includes(search.toLowerCase()) || val.lastname.toLowerCase().includes(search.toLowerCase())){
                return val
              }
            }).map((ele, i) => {
              return <tr key={i}>
                <td>{i+1}</td>
                <td>{ele.firstname}</td>
                <td>{ele.lastname}</td>
                <td>{ele.email}</td>
                <td>
                  <Link className='btn btn-primary' to={`edit/${ele.id}`}>Edit</Link>
                  <button className='btn btn-danger mx-2'onClick={() => deleteEmployee(ele.id)}>Delete</button>
                </td>
                
              </tr>
            })
          }
        </tbody>
</table>
      </div>
    </div>
  )
}

export default Home