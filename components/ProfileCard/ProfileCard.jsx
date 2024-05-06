import { style } from "./ProfileCard.style";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export function ProfileCard({ firstName, lastName, age, children, onPressSocialMedia }) {
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
          <Text style={style.name}>
            {children} {firstName} {lastName}
          </Text>
          <Text>#thegrindneverstops | Age: {age}</Text>
        </View>
      </View>
      <View style={style.social}>
        <TouchableOpacity style={style.socialBtn} onPress={() => onPressSocialMedia("twitter")}>
          <FontAwesome6 name="x-twitter" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialBtn} onPress={()=> onPressSocialMedia("linkedin")} >
          <FontAwesome6 name="linkedin-in" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialBtn} onPress={() => onPressSocialMedia("instagram")} >
          <FontAwesome6 name="instagram" size={24} color="#c13584" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
