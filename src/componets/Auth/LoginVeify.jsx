import React, { useContext, useEffect, useState } from 'react'
import Login from './Login'
import EmployeeDashboard from "../Dashboard/EmployeeDashboard";
import AdminDashboard from "../Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "../../storage/LocalStorage";
import { AuthContext } from '../../context/AuthProvider';


function LoginVeify() {

    
  const [user, setUser] = useState(null)
  
  const [loggedInUser, setLoggedInUser] = useState(null)
 
  // const [authdata, setauthdata] = useContext(AuthContext)

    const [userData, setUserData] = useContext(AuthContext);



  useEffect(() => {
      // const loggedInUser = localStorage.setItem('loggedInUser', '')
      const loggedInUser = localStorage.getItem('loggedInUser')


      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser)
       
        setUser(userData.role)
        setLoggedInUser(userData.data)
      }
     
  }, [])
      
  

  const handleLogin = (email,password)=>{
      if(email == "admin@1.com" && password == "123"){
          setUser('admin')
          localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
          // setLoggedInUser({ role: 'admin' })
        }
      
      else if(userData){
         const employee = userData.find((e)=> email === e.email && e.password === password)
         if(employee){

          setUser('employees')
          setLoggedInUser(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role: 'employees', data: employee}))
          // setLoggedInUser({ role: 'employee'})
         }
         else {
          alert("Result Not Available");
        }
        } 
        else {
          alert("Result Not Available");
        }
      }

  
  return (
    <>
    
    {user ? '' : <Login getLoginData = {handleLogin}/>}
    
    {/* {user == 'admin' && <AdminDashboard changeUser={setUser}/>} */}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employees' ? <EmployeeDashboard changeUser={setUser} employeeData={loggedInUser} /> : null) }
    {/* {user == 'employees' && <EmployeeDashboard employeeData = {loggedInUser} changeUser={setUser}/>} */}
   
  
    </>
  )
}

export default LoginVeify