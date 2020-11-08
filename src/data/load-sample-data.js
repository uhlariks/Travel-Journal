import db from "./firebase";
import sampleData from "./sample-data.json";

async function loadSampleData() {
  sampleData.map(addTravel);
}

async function addTravel({ country, city, date, rating, review, visits }) {
  try {
    const data = { country, city, date, rating, review, visits };

    const snapshot = await db
      .collection("travel")
      .where("country", "==", country)
      .where("city", "==", city)
      .where("date", "==", date)
      .where("rating", "==", rating)
      .where("review", "==", review)
      .where("visits", "==", visits)
      .get();

    let docRef;
    if (snapshot.empty) {
      docRef = db.collection("travel").doc();
    } else {
      docRef = snapshot.docs[0].ref;
    }

    await docRef.set(data);
  } catch (error) {
    console.log(error);
  }
}

export default loadSampleData;
