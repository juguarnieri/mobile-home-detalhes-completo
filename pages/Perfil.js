import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Card from "../components/Card";

export default function ProfileScreen() {
  const [nome, setNome] = useState("Júlia Andrade Guarnieri");
  const [dataNascimento, setDataNascimento] = useState("04/11/2007");
  const [telefone, setTelefone] = useState("(19) 98755-1593");
  const [email, setEmail] = useState("juliaguarnieri04@gmail.com");
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Image source={require("../assets/eu.jpg")} style={styles.profileImage} />
      <Text style={styles.name}>{nome}</Text>

      <View style={styles.contactInfo}>
        <View style={styles.contactItem}>
          <FontAwesome name="calendar" style={styles.icon} />
          <Text style={styles.contactText}>{dataNascimento}</Text>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome name="phone" style={styles.icon} />
          <Text style={styles.contactText}>{telefone}</Text>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome name="envelope" style={styles.icon} />
          <Text style={styles.contactText}>{email}</Text>
        </View>
      </View>

      <View style={styles.cardsContainer}>
        <Card
          title="Habilidades"
          text={
            <View style={styles.skillsContainer}>
              <FontAwesome name="html5" style={styles.skillIcon} />
              <FontAwesome name="css3" style={styles.skillIcon} />
              <FontAwesome name="react" style={styles.skillIcon} />
              <MaterialIcons name="developer-board" style={styles.skillIcon} />
            </View>
          }
        />

        <Card
          title="Experiência Profissional"
          text="Desenvolvedora Front-End com experiência em React, JavaScript e design responsivo."
        />

        <Card
          title="Educação"
          text="Cursando Análise e Desenvolvimento de Sistemas no SENAI Valinhos."
        />
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          navigation.navigate("Detalhes", {
            nome,
            dataNascimento,
            telefone,
            email,
          });
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.textoBotao}>Ver Detalhes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#EFEBE0",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#6F2739",
  },
  contactInfo: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgb(205 179 179)",
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    fontSize: 20,
    color: "#6F2739",
    marginRight: 10,
  },
  contactText: {
    fontSize: 16,
    color: "#555",
  },
  cardsContainer: {
    width: "100%",
    maxWidth: 400,
    marginBottom: 30,
  },
  skillsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  skillIcon: {
    fontSize: 30,
    color: "#6F2739",
  },
  botao: {
    marginTop: 20,
    backgroundColor: "#6F2739",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBotao: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
  },
});
