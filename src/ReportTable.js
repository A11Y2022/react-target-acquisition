import React from "react";
import Table from "react-bootstrap/Table";

const ReportTable = () => {

  const date = new Date();

  const reportInfo = [
    { name: "Andres", trials: "3", date: date },
    { name: "Peter Griffin", trials: "3", date: date },
    { name: "Larry the Bird", trials: "4", date: date },
  ];

  const renderUser = (user, index) => {
    <tr key={index}>
      <td>{user.name}</td>
      <td>{user.trials}</td>
      <td>{user.date}</td>
    </tr>
  };

  return (
    <div className="ReportTable">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Trials</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reportInfo.map(renderUser)}
        </tbody>
      </Table>
    </div>
  );
};

export default ReportTable;
