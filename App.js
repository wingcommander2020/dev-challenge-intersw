import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

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
      <View style={styles.bodyContainer}>
        <View style={styles.caption}>
          {clientName !== "" ? (
            <Text>
              Welcome back, <Text style={styles.boldText}>{clientName}</Text>
            </Text>
          ) : (
            ""
          )}
        </View>
        <Text>Username</Text>
        <TextInput style={styles.nameInput} />
        <Text>Password</Text>
        <TextInput style={styles.nameInput} secureTextEntry={true}/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 64,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  logo: {
    width: 128,
    height: 128,
  },
  logoContainer: {
    alignItems: "center",
  },
  caption: {
    paddingBottom: 32,
  },
  boldText: {
    fontWeight: "bold",
  },
  nameInput: {
    borderColor: "gray",
    width: "100%",
    borderRadius: 4,
    flex: 1,
    width: "50%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  bodyContainer: {
    paddingTop:64,
    paddingLeft: 46
  },
});
