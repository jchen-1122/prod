import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GoalFlowStart from "./GoalFlow/Start";
import GoalFlowDeadline from "./GoalFlow/Deadline";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/start" element={<GoalFlowStart />} />
      <Route path="/deadline" element={<GoalFlowDeadline/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);