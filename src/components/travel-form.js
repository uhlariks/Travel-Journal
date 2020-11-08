import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./travel-form.css";

function TravelForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.country === undefined) initialState.country = "";
  if (initialState.city === undefined) initialState.city = "";
  if (initialState.date === undefined) initialState.date = 2020;
  if (initialState.experiences === undefined) initialState.experiences = "";
  if (initialState.rating === undefined) initialState.rating = 5;
  if (initialState.review === undefined) initialState.review = "";
  if (initialState.visits === undefined) initialState.visits = "";

  const [country, setCountry] = useState(initialState.country);
  const [city, setCity] = useState(initialState.city);
  const [date, setDate] = useState(initialState.date);
  const [experiences, setExperiences] = useState(initialState.experiences);
  const [rating, setRating] = useState(initialState.rating);
  const [review, setReview] = useState(initialState.review);
  const [visits, setVisits] = useState(initialState.visits);
  const [errorMessage, setErrorMessage] = useState("");

  const onCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const onCityChange = (event) => {
    setCity(event.target.value);
  };
  const onDateChange = (event) => {
    setDate(event.target.value);
  };
  const onExperiencesChange = (event) => {
    setExperiences(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onReviewChange = (event) => {
    setReview(event.target.value);
  };
  const onVisitsChange = (event) => {
    setVisits(event.target.value);
  };

  const onTravelSumbit = async (event) => {
    event.preventDefault();
    onSubmit(country, city, date, experiences, rating, review, visits);
  };

  return (
    <form className="movie-form" onSubmit={onTravelSumbit}>
      <h2 className="movie-form__title">Travel Details</h2>
      {message && <p className="movie-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="movie-form__controls" disabled={isSaving}>
        <label className="movie-form__label">Country:</label>
        <input
          className="movie-form__input"
          type="text"
          value={country}
          onChange={onCountryChange}
        />
        <label className="movie-form__label">City:</label>
        <input className="movie-form__input" type="text" value={city} onChange={onCityChange} />
        <label className="movie-form__label">Date:</label>
        <input className="movie-form__input" type="text" value={date} onChange={onDateChange} />
        <label className="movie-form__label">Experiences:</label>
        <input
          className="movie-form__input"
          type="text"
          value={experiences}
          onChange={onExperiencesChange}
        />
        <label className="movie-form__label">Rating:</label>
        <input
          className="movie-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <label className="movie-form__label">Review:</label>
        <input className="movie-form__input" type="text" value={review} onChange={onReviewChange} />
        <label className="movie-form__label">Number of Visits:</label>
        <input className="movie-form__input" type="text" value={visits} onChange={onVisitsChange} />
        <input
          className="movie-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default TravelForm;
