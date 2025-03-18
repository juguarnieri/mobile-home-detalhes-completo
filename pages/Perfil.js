import React from "react";
import { FlatList, SafeAreaView, View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SkillCard = ({ name, icon }) => {
    return (
        <View style={styles.skillCard}>
            <FontAwesome5 name={icon} style={styles.skillIcon} />
            <Text style={styles.skillText}>{name}</Text>
        </View>
    );
};

export default function Card() {
    const skills = [
        { id: "1", name: "HTML", icon: "html5" },
        { id: "2", name: "CSS", icon: "css3-alt" },
        { id: "3", name: "PostgreSQL", icon: "database" },
        { id: "4", name: "React", icon: "react" },
        { id: "5", name: "React Native", icon: "mobile-alt" },
        { id: "6", name: "JavaScript", icon: "js" }
    ];

    const facts = [
        { id: "1", title: "Minha Jornada", description: "Comecei a programar há 1 ano  e desde então venho aprimorando minhas habilidades." },
        { id: "2", title: "Projetos", description: "Já desenvolvi diversos projetos, incluindo o HTML e CSS de um portal educacional do conteúdo de inglês." },
        { id: "3", title: "Objetivos", description: "Meu objetivo é sempre aprender e crescer profissionalmente no desenvolvimento de software." },
        { id: "4", title: "Curiosidade", description: "Além da programação, gosto de brincar com as minhas cachorras e assistir jogos de futebol." },
        { id: "5", title: "Visão", description: "Acredito que tecnologia pode transformar vidas e estou comprometida em fazer parte dessa mudança." }
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView 
                contentContainerStyle={styles.container} 
                keyboardShouldPersistTaps="handled"
                style={{ flex: 1 }}
            >

                <FlatList
                    data={skills}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <SkillCard name={item.name} icon={item.icon} />}
                    nestedScrollEnabled={true}
                    style={styles.skillsList}
                />

<Image source={require('../assets/eu.jpg')} style={styles.profileImage} />
                <Text style={styles.name}>Júlia Andrade Guarnieri</Text>
                <Text style={styles.role}>Desenvolvedora</Text>


                {facts.map((item) => (
                    <View key={item.id} style={styles.cardContainer}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardDescription}>{item.description}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#EFEBE0",
    },
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
        marginBottom: 5,
        color: "#6F2739",
    },
    role: {
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
    },
    skillCard: {
        alignItems: "center",
        padding: 15,
        margin: 5,
        backgroundColor: "rgb(205 179 179)",
        borderRadius: 10,
        width: Dimensions.get("window").width / 3.5,
    },
    skillIcon: {
        fontSize: 30,
        color: "#6F2739",
    },
    skillText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#6F2739",
        marginTop: 5,
    },
    cardContainer: {
        width: "100%",
        maxWidth: 400,
        backgroundColor: "rgb(205 179 179)",
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#6F2739",
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 16,
        color: "#555",
    },
    skillsList: {
        marginBottom: 20,
    },
});

