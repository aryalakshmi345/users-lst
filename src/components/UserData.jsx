import React, { useEffect, useState } from 'react'

function UserData() {
  const [userData, setUserData] = useState([])
  const [userContainer,setUserContainer] = useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/users").then((res)=>{
        res.json().then((result)=>
        {
            setUserData(result)
            setUserContainer(result)
        })
    })
  },[])

  const handleSearch = (fname)=>{
    setUserData(userContainer.filter(item=>item.name.firstname.includes(fname.toLowerCase())))
  }
  const handleFilter = ()=>{
    setUserData(userContainer.filter(item=>item.address.city=="kilcoole"))
  }
//   console.log(userData);
  return (
    <div className='container mt-5 '>
        <div className='d-flex align-items-center justify-content-between w-100 m-5'>
        <button onClick={handleFilter} className='btn btn-warning'>KILCOOLE</button>
            <input type="text" className='form-control w-25 border-dark' placeholder='Search Firstname...' onChange={(e)=>handleSearch(e.target.value)}/>
        </div>
        <div >
        </div>
        <table className='table'>
          <thead>
            <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Full Address</th>
            </tr>
          </thead>
          <tbody>
            {
                userData.length>0?
                userData.map((user,index)=>(
                    <tr>
                    <td>{user.name.firstname} {user.name.lastname}</td>
                    <td>{user.address.city},{user.address.street}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address.city},{user.address.street}<br/>Number: {user.address.number}, Zipcode:{user.address.zipcode}</td>
                </tr>
                )):<p className='m-5 text-danger'>Nothing To Display</p>
            }
           
          </tbody>
        </table>
    </div>
  )
}

export default UserData