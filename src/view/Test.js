import React from "react";
import FittsModal from "../components/testing/Modal.js"
import UpdateNode from '../components/testing/fitts_nodes';
import { initialElements } from '../components/testing/initialElements';

export const Test = () => {
  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>Test Page</h1>
      <FittsModal/>
      <UpdateNode initialElements={initialElements}/>
    </div>
  );
};
