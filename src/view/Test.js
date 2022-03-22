import React, { useState } from "react";
import FittsModal from "../components/testing/FittsModal.js"
import UpdateNode from '../components/testing/fitts_nodes';
import { initialElements } from '../components/testing/initialElements';

export const Test = () => {
  const [showTest, setTest] = useState(false);
  const [numTrials, setTrials] = useState(0);
  const [countTrials, setCount] = useState(1);

  function addTrial() { setCount(countTrials + 1); }

  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>Test Page</h1>
      {showTest && (countTrials <= numTrials) ? <p>You are on trial {countTrials} of {numTrials}</p> : null}
      <FittsModal setShow={setTest} setTrial={setTrials} />
      {showTest && (countTrials <= numTrials) ? <UpdateNode initialElements={initialElements} countTrial={addTrial} /> : null}
    </div> //show test only when test configuration is saved
  );
};
