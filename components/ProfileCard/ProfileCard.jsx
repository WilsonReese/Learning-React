import { style } from "./ProfileCard.style";
import { View, Text, Image } from "react-native";

export function ProfileCard() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View>
          <Image
            style={style.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={style.texts}>
          <Text style={style.name}>Reese Wilson</Text>
          <Text>#thegrindneverstops</Text>
        </View>
      </View>
      <View>{/* social icons */}</View>
    </View>
  );
}
