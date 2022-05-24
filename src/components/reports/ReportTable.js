import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import GetTrials from "../../api/reports/reportApi";

async function getTrialData(tableData) {
  Object.values(tableData).forEach((test) => {
    let count = 0;
    Object.values(test.trial_data).forEach((click) => {
     count ++;
    })
    test.percent_accuracy = ((7 / count ) * 100).toFixed(2);
    
  })
  console.log(tableData)
  return tableData
}
const ReportTable = () => {
  const [tableData, setTableData] = useState({})


  useEffect(() => {
    GetTrials().then(data => getTrialData(data)).then(tableData => setTableData(tableData))
    
  }, [])



  const renderRow = (test, index) => {
    return (
      <tr key={index}>
        <td>{test.id}</td>
        <td>{test.difficulty}</td>
        <td>{test.trials}</td>
        <td>{test.percent_accuracy}</td>
        <td></td>
      </tr>
    );
  };

  return (
    <div className="ReportTable">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Trials</th>
            <th>Accuracy%</th>
          </tr>
        </thead>
        <tbody>{Object.values(tableData).map(renderRow)}</tbody>
      </Table>
    </div>
  );
};

export default ReportTable;
