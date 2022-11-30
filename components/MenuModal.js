import {
    StyleSheet,
    Text,
    View,
    Pressable
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

export default function MenuModal({ navigation }) {

    return (


        <View style={styles.view}>
            <View style={styles.container}>

                <Pressable style={styles.item} onPress={() => navigation.navigate('Main')}>
                    <Feather name="home" size={36} color="white" />
                    <Text style={styles.text}>Dashboard</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <Feather name="settings" size={36} color="white" />
                    <Text style={styles.text}>Settings</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <Feather name="help-circle" size={36} color="white" />
                    <Text style={styles.text}>Help</Text>
                </Pressable>
            </View>
            <Pressable style={styles.returnButton} onPress={() => navigation.navigate('Main')}>
                <Feather name="arrow-left" size={36} color="white" />
            </Pressable>
        </View>);
}

const styles = StyleSheet.create({
    returnButton: { marginTop: 46, },

    view: {
        height: '100%',
        width: '65%',
        backgroundColor: "#b02424",
        flexDirection: "row"
    },
    container: {
        marginTop: 86,
        marginLeft: 46
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16
    },
    text: {
        marginLeft: 8,
        color: "white"
    }

});