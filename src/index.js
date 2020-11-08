import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { moviesCollection } from "./data/firebase";
import loadSampleData from "./data/load-sample-data";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// loadSampleData();

// async function addMovie() {
//   try {
//     await moviesCollection.add({
//       title: "Movie Title",
//       releaseYear: 2020,
//       rating: 4,
//     });
//     console.log("saved");
//   } catch (error) {
//     console.error(error);
//   }
// }

// addMovie();
