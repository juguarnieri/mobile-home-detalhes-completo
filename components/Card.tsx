import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


export default function Card({ item, type }) {
  return (
    <View style={type === "tech" ? styles.techCard : styles.factCard}>
      {type === "tech" ? (
        <>
          <FontAwesome5 name={item.icon} style={styles.icon} />
          <Text style={styles.text}>{item.name}</Text>
        </>
      ) : (
        <>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  techCard: {
    alignItems: "center",
    padding: 15,
    margin: 5,
    backgroundColor: "rgb(205 179 179)",
    borderRadius: 10,
    width: 100, 
  },
  factCard: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgb(205 179 179)",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  icon: {
    fontSize: 30,
    color: "#6F2739",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6F2739",
    marginTop: 5,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6F2739",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
});

