import React, { useState, useEffect } from "react";
import { travelCollection } from "../data/firebase";
import "./edit-travel.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import TravelForm from "./travel-form";

function EditTravel(props) {
  const { id } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [travelData, setTravelData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("Saved!");

  useEffect(() => {
    async function getTravel() {
      setIsLoading(true);
      try {
        const travelSnapshot = await travelCollection.doc(id).get();

        if (!travelSnapshot.exists) {
          throw new Error("Unexpected Error!");
        }

        const data = travelSnapshot.data();
        setTravelData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again!");
        console.error(error);
      }
      setIsLoading(false);
    }
    getTravel();
  }, [id]);

  const onTravelSubmit = async (
    country,
    city,
    monthVisited,
    yearVisited,
    rating,
    review,
    visits
  ) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      await travelCollection.doc(id).set({
        country,
        city,
        monthVisited,
        yearVisited,
        rating,
        review,
        visits,
      });
      setFormMessage("Saved Successfully!");
    } catch (error) {
      setFormMessage("Something went wrong. Please try again!");
      console.error(error);
    }
    setIsSaving(false);
  };

  return (
    <div className="edit-container">
      <h2>Edit Travel</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {travelData && (
        <TravelForm
          initialState={travelData}
          onSubmit={onTravelSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditTravel;
