import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Planets from "./screens/Planets";
import Starships from "./screens/Starships";
import Films from "./screens/Films";
import Details from "./screens/Details";
import { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform, Text, StyleSheet, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Planets" component={Planets} />
      <Tab.Screen name="Starships" component={Starships} />
      <Tab.Screen name="Films" component={Films} />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Planets" component={Planets} />
      <Drawer.Screen name="Starships" component={Starships} />
      <Drawer.Screen name="Films" component={Films} />
      <Drawer.Screen
        name="Details"
        component={Details}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const connectedMap = {
    none: "Not available offline",
    unknown: "Connected",
    wifi: "Connected",
    cellular: "Connected",
    ethernet: "Connected",
  };

  const [connected, setConnected] = useState("");
  useEffect(() => {
    if (Platform.OS === "web") {
      setConnected("Connected");
      return;
    }
    function onNetworkChange(connection) {
      setConnected(connectedMap[connection.type]);
    }
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);
    return () => {
      unsubscribe();
    };
  }, []);
  return connected !== "Connected" ? (
    <View style={styles.center}>
      <Text style={styles.connectedText}>
        {connected || "Checking connection..."}
      </Text>
    </View>
  ) : (
    <NavigationContainer>
      {Platform.OS === "ios" ? <TabNavigator /> : <DrawerNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  connectedText: {
    textAlign: "center",
    fontSize: 25,
    width: "100%",
  },
});
