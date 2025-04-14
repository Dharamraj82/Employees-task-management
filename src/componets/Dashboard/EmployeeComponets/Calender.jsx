import React, { useState } from 'react'
import Calendar from 'react-calendar';


function Calender() {
    
  const [date, setDate] = useState(new Date());

  return (
   <>  
    <div className="h-[270px] w-[300px] shrink-0 text-zinc-950 p-3 gap-3 bg-sky-300 flex flex-col items-center rounded-xl">
              <Calendar
                onChange={setDate}
                value={date}
               className="rounded-lg text-lg"/>
               <p className="text-lg">
                <span className="font-semibold text-zinc-600">{date.toDateString()}</span>
              </p>
    </div>
   </>
  )
}

export default Calender