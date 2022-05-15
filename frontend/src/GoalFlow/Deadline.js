import './Start.css'
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Deadline.css'

// TODO: Back, Forward, and Skip Buttons

function GoalFlowStart() {
    const {state} = useLocation();
    const {goal} = state

    const [deadline, setDeadline] = useState("");


    return (
    <div className="GoalFlowStart">
      <header className="GoalFlowStart-header">
        <p>
          {deadline == "" ? "Set a Deadline" : deadline} -  {goal}
        </p>
      </header>
      <header className="DeadlineCalendar">
            <Calendar            
            onClickDay={(e) => {
              // important format MM DD YYYY
              setDeadline(e.getMonth()+1 + " " + e.getDate() + " " + e.getFullYear())
            }}/>
        </header>
    </div>
  );
}

export default GoalFlowStart;
