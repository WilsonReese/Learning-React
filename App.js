import { Linking, StyleSheet, Text, View } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard.jsx";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";
import { AgeCounter } from "./components/AgeCounter/AgeCounter.jsx";

export default function App() {
  function goToSocialMedia(socialMedia) {
    let url;
    switch (socialMedia) {
      case "twitter":
        url = "https://twitter.com";
        break;
      case "linkedin":
        url = "https://linkedin.com";
        break;
      case "instagram":
        url = "https://instagram.com";
        break;
    }
    Linking.openURL(url);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <ProfileCard
          firstName={"Cool"}
          lastName={"Boy"}
          age={28}
          onPressSocialMedia={goToSocialMedia}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
