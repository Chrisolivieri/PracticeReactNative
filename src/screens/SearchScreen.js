import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, searchApi] = useResults();

  // per rendere l'api più leggibile
  // const apiResponse = { results };
  // console.log(JSON.stringify(apiResponse, null, 2));

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  // Parametro price:
  // È il prezzo da utilizzare come filtro

  // results.filter:
  // Usa il metodo .filter per iterare sull'array results e restituire un nuovo array contenente solo gli elementi che soddisfano la condizione specificata

  // Condizione:
  // result.price === price controlla se il prezzo di ogni oggetto (result.price) è uguale al valore specificato nel parametro price

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>Trovati {results.length}</Text>
      <ResultsList results={filterResultsByPrice("€")} title="Convenienti" />
      <ResultsList
        results={filterResultsByPrice("€€")}
        title="Un po' più caro"
      />
      <ResultsList
        results={filterResultsByPrice("€€€")}
        title="I più costosi"
      />
      <ResultsList
        results={filterResultsByPrice("€€€€")}
        title="Costosissimi"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
