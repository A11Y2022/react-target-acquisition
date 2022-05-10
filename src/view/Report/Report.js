import "./Report.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import QueryBuilder from "../../components/reports/QueryBuilder.js";
import ReportTable from "../../components/reports/ReportTable.js"


export const Report = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Reports Page</h1>
      <QueryBuilder />
      <Routes>
        <Route exact path="/" element={<ReportTable />}></Route>
        {/* <Route exact path="/graphs" element={<ReportTable/>}> */}
      </Routes>

    </div>
  );
};
