import { StyleSheet, Text, View } from "react-native";
import { Profile } from "./components/Profile/Profile.jsx";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor: "green", flex: 1}}>
        <Text style={style.title}>Anchor down.</Text>
        <View style={style.square}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
