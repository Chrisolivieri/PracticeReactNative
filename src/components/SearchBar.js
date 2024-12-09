import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none" // per rendere la prima lettera maiuscola
        autoCorrect={false} // autocorrettore
        placeholder="search"
        style={styles.input}
        value={term}
        onChangeText={onTermChange}
        onSubmitEditing={() => onTermSubmit(term)} // quando l'utente preme invio
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#E4E6E8",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    paddingHorizontal: 10, // aggiunge spazio interno ai lati
  },
  icon: {
    marginRight: 10, // spazio tra l'icona e il TextInput
    fontSize: 30,
    alignSelf: "center",
  },
  input: {
    flex: 1, // occupa tutto lo spazio rimanente
    fontSize: 18,
  },
});

export default SearchBar;
