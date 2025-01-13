import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultsDetails = ({result}) =>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.location.city} </Text>
            <Text>{result.rating} Stelle, {result.review_count} Recensioni</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    image:{
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold",
    }
})

export default ResultsDetails