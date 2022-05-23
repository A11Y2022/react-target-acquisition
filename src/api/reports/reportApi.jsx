import axios from "axios";
import React, { useState } from "react";

function GetTrials() {

    return axios.get("/trial/data")
        .then((res) => res.data.data)
        .catch((e) => console.error(e))

}

export default GetTrials;