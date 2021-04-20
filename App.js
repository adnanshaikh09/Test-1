import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "#fffe95",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default function App() {
    return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text>Squarre 1</Text>
        </View>

        <View style={[styles.box, {backgroundColor: "#2f7ed8"}]}>
            <Text>Square 2</Text>
        </View>

        <View style={[styles.box, {backgroundColor: "#ff637c"}]}>
            <Text>Square 3</Text>
        </View>
    </View>

    );
};

