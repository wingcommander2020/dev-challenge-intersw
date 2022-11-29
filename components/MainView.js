import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { users } from "../Users";

export default function MainView() {
    let clientName = "siggy";
    let text = "";
    let name = users[0].name;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/cropped-favicon.png")}
          />
        </View>

  
          <StatusBar style="auto" />
        </View>
    );
}

//const styles = StyleSheet.create({});

const styles = StyleSheet.create({
    container: {
      flex: 2,
      paddingTop: 64,
      backgroundColor: "#fff",
      flexDirection: "column",
    },
    logo: {
      width: 36,
      height: 36,
    },
    logoContainer: {
      alignItems: "center",
    }
  });