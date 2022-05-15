import './Start.css'
import React, { useState } from 'react';
import { TextField  } from '@mui/material';
import { useNavigate } from "react-router-dom";

function GoalFlowStart() {
    let navigate = useNavigate(); 
    const addGoal = () =>{ 
        let path = '/deadline'; 
        navigate(path, {
            state: { goal: goal }
        });
    }

    const [goal, setGoal] = useState("");

    return (
    <div className="GoalFlowStart">
      <header className="GoalFlowStart-header">
        <p>
          Start By Introducing A Goal
        </p>
      </header>
      <div className="GoalFlowStart-user">
      <TextField 
        fullWidth 
        id="goal-input" 
        inputProps={{
            style: {
                fontSize: 28,
                margin: "auto",
                textAlign: "center",
            }

        }} 
        InputProps={{
            disableUnderline: true,
            shrink: "true",
            onKeyDown: (e) => {
                if (e.key === "Enter") {
                    addGoal()
                }
            },
            onChange: (e) => {
                setGoal(e.target.value)
            }
        }}
        variant="standard" 
        placeholder="Type Something..."/>
      </div>
    </div>
  );
}

export default GoalFlowStart;
