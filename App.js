import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "./components/LoginView";
import MainView from "./components/MainView";
import MenuModal from './components/MenuModal';

const Stack = createNativeStackNavigator();

export default function App() {

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