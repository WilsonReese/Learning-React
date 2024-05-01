import { StyleSheet, Text, View } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard.jsx";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white", justifyContent: "center"}}>
        <ProfileCard />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
