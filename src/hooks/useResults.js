//custom hook

import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "italy",
        },
      });
      setResults(response.data.businesses);
      // console.log(response.data.businesses)
    } catch (err) {
      alert("C'è stato un problema con la tua ricerca, riprova più tardi");
    }
  };

  useEffect(() => {
    searchApi("pizza");
  }, []);
  
  return [results, searchApi];
};
