import React, { useEffect, useState } from "react";
import FittsModal from "../components/testing/FittsModal.js"
import UpdateNode from '../components/testing/fitts_nodes';
import { initialElements } from '../components/testing/initialElements';
import useMousePosition from "../components/testing/MouseCoordintes.jsx";

export const Test = () => {
  const [showTest, setTest] = useState(false);
  const [numTrials, setTrials] = useState(0);
  const [countTrials, setCount] = useState(1);
  const { x, y } = useMousePosition();
  function addTrial() {  setCount(countTrials + 1); }
  

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Test Page</h1>
      {showTest && (countTrials <= numTrials) ? <p>You are on trial {countTrials} of {numTrials}</p> : null}
      <FittsModal setShow={setTest} setTrial={setTrials} />
      {showTest && (countTrials <= numTrials) ? <UpdateNode initialElements={initialElements} countTrial={addTrial} coordinate={{x,y}} trial_num={countTrials.toString()}/> : null}
    </div> //show test only when test configuration is saved
  );
};


