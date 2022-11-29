import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { users } from "./Users";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function LoginView() {
  let clientName = "siggy";
  let text = "";
  let name = users[0].name;
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
              Welcome back, <Text style={styles.boldText}>{name}</Text>
            </Text>
          ) : (
            ""
          )}
        </View>
        <Text>Username</Text>

        <TextInput style={styles.nameInput} autoComplete="username" />
        <Text>Password</Text>
        <View style={styles.adjacent}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={true}
            autoComplete="password"
          />
          <Image
            style={{ width: 46, height: 46, marginLeft: "auto" }}
            source={require("./assets/eye_con.png")}
          />
        </View>
        <Pressable title="Login" style={styles.loginButton}>
          <Text style={styles.pressableTitle}>Login</Text>
        </Pressable>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={LoginView} />
      </Stack.Navigator>
    </NavigationContainer>
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
    borderRadius: 4,
    height: 40,
    margin: 0,
    marginBottom: 16,
    borderWidth: 1,
    color: "black",
    paddingLeft: 16,
  },
  passwordInput: {
    width: "75%",
    borderColor: "gray",
    borderRadius: 4,
    height: 40,
    margin: 0,
    marginBottom: 16,
    borderWidth: 1,
    color: "black",
    paddingLeft: 16,
  },
  bodyContainer: {
    paddingTop: 64,
    flex: 2,
    paddingLeft: 46,
    paddingRight: 46,
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#b02424",
    width: "75%",
  },
  pressableTitle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  adjacent: {
    flexDirection: "row",
  },
});
