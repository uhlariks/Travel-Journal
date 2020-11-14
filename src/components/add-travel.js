import React, { useState } from "react";
import { travelCollection } from "../data/firebase";
import "./add-travel.css";
import TravelForm from "./travel-form";

function AddTravel() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const onTravelSumbit = async (
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
      await travelCollection.add({
        country,
        city,
        monthVisited,
        yearVisited,
        rating,
        review,
        visits,
      });
      setFormMessage("Saved Successfully!");
      console.log("saved");
    } catch (error) {
      setFormMessage("Something went wrong, please try again!");
      console.error(error);
    }
    setIsSaving(false);
  };

  return (
    <div className="add-container">
      <h1>Add Travel</h1>
      <TravelForm onSubmit={onTravelSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddTravel;
