import React from 'react'
import DashbordComponet from './EmployeeComponets/DashbordComponet'
import Admincomponent from './AdminComponets/Admincomponent'
import GivenTask from './AdminComponets/GivenTask'


function AdminDashboard(props) {
  return (
    <>
      
      <div className='h-[100vh] w-[100vw] flex fixed'>
      <DashbordComponet changeUser={props.changeUser}/>
     {/* < Admincomponent/> */}

        <GivenTask changeUser={props.changeUser}/>
      </div>
   </>
  )
}

export default AdminDashboard