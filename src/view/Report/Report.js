import "./Report.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import QueryBuilder from "../../components/reports/QueryBuilder.js";
import ReportTable from "../../components/reports/ReportTable.js"

export default function Report() {
 
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Reports Page</h1>
      <QueryBuilder />
      <ReportTable />
    </div>
  );
};
