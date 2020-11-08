import React from "react";
import { Helmet } from "react-helmet";
import TravelListing from "../components/travel-listing";

function TravelPage() {
  return (
    <main>
      <Helmet>
        <title>My Travel Journal</title>
      </Helmet>
      <TravelListing />
    </main>
  );
}

export default TravelPage;
