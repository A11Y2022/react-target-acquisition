import React, { useState } from "react";
import FittsModal from "../components/testing/Modal.js"
import UpdateNode from '../components/testing/fitts_nodes';
import { initialElements } from '../components/testing/initialElements';

export const Test = () => {
  const [showTest, setTest] = useState(false);
  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>Test Page</h1>
      <FittsModal setShow={setTest} />
      {showTest ? <UpdateNode initialElements={initialElements} /> : null}
    </div> //show test only when test configuration is saved
  );
};
