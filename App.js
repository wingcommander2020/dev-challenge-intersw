import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "./components/LoginView";
import MainView from "./components/MainView";

const Stack = createNativeStackNavigator();

export default function App() {
  //<Stack.Screen name="Login" component={LoginView} />
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}