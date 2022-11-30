import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "./components/LoginView";
import MainView from "./components/MainView";
import MenuModal from './components/MenuModal';
import {
  Text,
  View,
  Button
} from "react-native";

const Stack = createNativeStackNavigator();



export default function App() {
  function ModalScreen({ navigation }) {
    return (
      <View style={{ alignItems: 'left', justifyContent: 'left' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen name="Main" component={MainView} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'hannes' }}>
          <Stack.Screen name="menu" component={MenuModal} />

        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  );
}