import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({ employeeData }) {


  return (
    <div id='tasklist' className='h-[330px] flex gap-2 overflow-x-auto'>
      {employeeData.tasks.map((elem, i) => {
        if (elem.newtask) {
          return <NewTask key={i} employeeData={elem} />;
        }
        if (elem.accept) {
          return <AcceptTask key={i} employeeData={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={i} employeeData={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={i} employeeData={elem} />;
        }
      //  return null; // If no matching condition
      })}
    </div>
  );
}


export default TaskList