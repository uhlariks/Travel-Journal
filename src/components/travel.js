import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import { travelCollection } from "../data/firebase";
import "./travel.css";

function Travel(props) {
  const { id, data } = props;
  const { country, city, rating, review, monthVisited, yearVisited, visits } = data;

  const ratingString = "★".repeat(rating) + "☆".repeat(5 - rating);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteTravel = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = travelCollection.doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="travel">
      <div className="travel__contents">
        <div className="travel__title">
          {city}, {country}
        </div>
        <div className="travel__date">
          Date: {monthVisited}, {yearVisited}
        </div>
        <div className="travel__rating">{ratingString}</div>
        <div className="travel__review">Review: {review ? review : "not listed"}</div>
        <div className="travel__rating">Number of Visits: {visits}</div>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="travel__button" disabled={isDeleting} onClick={deleteTravel}>
          <Delete />
        </button>
        <button className="travel__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Travel;
