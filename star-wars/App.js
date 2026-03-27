import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Planets from "./screens/Planets";
import Spaceships from "./screens/Spaceships";
import Films from "./screens/Films";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Planets" component={Planets} />
      <Tab.Screen name="Spaceships" component={Spaceships} />
      <Tab.Screen name="Films" component={Films} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Planets" component={Planets} />
      <Drawer.Screen name="Spaceships" component={Spaceships} />
      <Drawer.Screen name="Films" component={Films} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" ? <TabNavigator /> : <DrawerNavigator />}
    </NavigationContainer>
  );
}
