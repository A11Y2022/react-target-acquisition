import React from "react";
import Table from "react-bootstrap/Table";

const ReportTable = () => {
  const date = new Date().toString();

  const reportInfo = [
    { report: "Report1",  trials: 3, date: date },
    { report: "Report2",  trials: 3, date },
    { report: "Report3",  trials: 4, date },
  ];

  const renderUser = (user, index) => {
    return (
      <tr key={index}>
        <td>{user.report}</td>
        <td>{user.trials}</td>
        <td>{user.date}</td>
      </tr>
    );
  };

  return (
    <div className="ReportTable">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Report</th>
            <th>Trials</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{reportInfo.map(renderUser)}</tbody>
      </Table>
    </div>
  );
};

export default ReportTable;
