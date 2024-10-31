import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Imagenes from "../../components/Imagenes/Imagenes";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text> Imagenes de Haloween </Text>
      <Imagenes />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "lightgray",
  },
});
