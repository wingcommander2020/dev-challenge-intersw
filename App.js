import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  let clientName = "siggy";
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./assets/cropped-favicon.png")}
        />
      </View>
      <View style={styles.caption}>
        {clientName !== "" ? (
          <Text>
            Welcome back, <Text style={styles.boldText}>{clientName}</Text>
          </Text>
        ) : (
          ""
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    //justifyContent: 'center',
    //padding: 5
  },
  logo: {
    width: 128,
    height: 128,
  },
  logoContainer: {
    margin: 10,
    flex: 1,
    marginTop: 40,
  },
  caption: {
    flex: 3,
  },
  boldText: {
    fontWeight: "bold",
  },
});
