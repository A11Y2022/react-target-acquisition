import React from "react";
import { Button } from "react-bootstrap";

function Timer({ minutes, seconds, centiseconds }) {
  return (
    <div className="timer" style={{ paddingTop: "50px" }}>
      <Button variant="dark" size="lg">
        {minutes}
      </Button>
      {" : "}
      <Button variant="dark" size="lg">
        {seconds}
      </Button>
      {" : "}
      <Button variant="dark" size="lg">
        {centiseconds}
      </Button>
    </div>
  );
}

export default Timer;
