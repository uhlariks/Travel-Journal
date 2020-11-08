import React from "react";
import { Helmet } from "react-helmet";
import AddTravel from "../components/add-travel";

function AddTravelPage() {
  return (
    <main>
      <Helmet>
        <title>Add Travel</title>
      </Helmet>
      <AddTravel />
    </main>
  );
}

export default AddTravelPage;
