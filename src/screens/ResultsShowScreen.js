import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    response.data;
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  //se non ci sono risultati non restituisce niente
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image:{
    height:200,
    width: 300
  }
});

export default ResultsShowScreen;
