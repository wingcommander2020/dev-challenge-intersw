import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { users } from "../Users";
import AccountCard from './AccountCard';

export default function MainView({ navigation }) {
  let userAccounts = users[0].accounts;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.navigate('menu')}>
          <Ionicons name="menu" size={36} color="#b02424" />
        </Pressable>
        <Image
          style={styles.logo}
          source={require("../assets/cropped-favicon.png")}
        />
      </View>
      <View style={styles.bodyContainer}>
      </View>

      <View style={styles.carouselContainer}>
        <Text style={{ fontSize: 18, paddingBottom: 16 }}>My Accounts</Text>
        <AccountCard userAccounts={userAccounts}></AccountCard>
      </View>

      <View style={styles.servicesContainer}>
        <View style={styles.servicesRowContainer}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity title="service1" style={styles.serviceButton}>
              <Image
                style={styles.serviceIcon}
                source={require("../assets/service_icon1.png")}
              />
            </TouchableOpacity>
            <Text style={styles.pressableTitle}>Transfer</Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity title="service2" style={styles.serviceButton}>
              <Image
                style={styles.serviceIcon}
                source={require("../assets/service_icon2.png")}
              />
            </TouchableOpacity>
            <Text style={styles.pressableTitle}>Pay Bills</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity title="service3" style={styles.serviceButton}>
              <Image
                style={styles.serviceIcon}
                source={require("../assets/service_icon3.png")}
              />
            </TouchableOpacity>
            <Text style={styles.pressableTitle}>Buy Airtime</Text>
          </View>
        </View>
        <View style={styles.servicesRowContainer}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity title="service4" style={styles.serviceButton}>
              <Image
                style={styles.serviceIcon}
                source={require("../assets/service_icon4.png")}
              />
            </TouchableOpacity>
            <Text style={styles.pressableTitle}>QR Payment</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity title="service5" style={styles.serviceButton}>
              <Image
                style={styles.serviceIcon}
                source={require("../assets/service_icon5.png")}
              />
            </TouchableOpacity>
            <Text style={styles.pressableTitle}>Loans</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity title="service6" style={styles.serviceButton}>
              <Image
                style={styles.serviceIcon}
                source={require("../assets/service_icon6.png")}
              />
            </TouchableOpacity>
            <Text style={styles.pressableTitle}>Virtual Card</Text>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerContent}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Feather name="home" size={36} color="white" />
            <Text style={{ color: "white" }}>Dashboard</Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Feather name="settings" size={36} color="white" />
            <Text style={{ color: "white" }}>Settings</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    backgroundColor: "#fff",
    paddingLeft: 24,
    paddingRight: 24,
  },
  logo: {
    width: 36,
    height: 36,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "base-line",
    justifyContent: "space-between",
    paddingBottom: 48,
  },
  carouselContainer: {
    paddingRight: 0,
    paddingTop: 16,
    height: '25%',
    minWidth: 256
  },

  servicesContainer: {},
  serviceButton: {
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#b7b7b7",
    borderColor: "blue",
    borderRadius: 100,
    height: 64,
    width: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceIcon: {
    alignItems: "center",
  },
  footerContainer: {
    position: "absolute",
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: "#b02424",
    height: "16%",
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "base-line",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingLeft: 24,
    paddingRight: 24,
  },
  servicesRowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 32,
  },

});
