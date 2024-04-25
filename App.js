import { StyleSheet, Text, View } from "react-native";
import { Profile } from "./components/Profile/Profile.jsx";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
        <View style={style.box1}/>
        <View style={style.box2}/>
        <View style={style.box3}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
