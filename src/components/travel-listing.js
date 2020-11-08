import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { travelCollection } from "../data/firebase";
import Travel from "./travel";
import "./travel-listing.css";

function TravelListing() {
  const [travel, setTravel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setTravel(docs);
    };
    const onError = (error) => {
      setErrorMessage("There was a problem loading your movie ratings. Please try again.");
      console.error(error);
    };
    const unsubscribe = travelCollection.orderBy("date", "desc").onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return (
    <div className="movies-container">
      <h1>My Travel Journal</h1>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="movie-list">
        {travel.map((travelDoc) => {
          const travelId = travelDoc.id;
          const travelData = travelDoc.data();
          return (
            <li key={travelId}>
              <Travel id={travelId} data={travelData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TravelListing;
