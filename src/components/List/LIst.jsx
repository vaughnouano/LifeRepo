import { Image, Pressable, Text, View } from "react-native";
import { layout } from "./listStyle";

const uncheckedImage = require("../../../assets/images/unchecked_circle.png");
const checkedImage = require("../../../assets/images/checked_circle.png");
const moreVertImage = require("../../../assets/images/more_vert.png");

export default function List({ Task, Time }) {
  return (
    <View style={layout.container}>
      <View style={layout.checkList}>
        <Pressable style={layout.checkImage}>
          <Image source={uncheckedImage} />
        </Pressable>

        <View style={layout.checkListText}>
          <Text>{Task}</Text>
          <Text>{Time}</Text>
        </View>
      </View>

      <View style={layout.listOption}>
        <Pressable>
          <Image source={moreVertImage} />
        </Pressable>
      </View>
    </View>
  );
}
