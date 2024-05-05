import { StyleSheet, Text, View } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard.jsx";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";
import { AgeCounter } from "./components/AgeCounter/AgeCounter.jsx";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <AgeCounter/>
        {/* <ProfileCard firstName={"Cool"} lastName={"Boy"} age={28} /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
