import { Image, Pressable, Text, View } from "react-native";
import { color } from "../../constants/color";
import { Typography } from "../../constants/typography";
import { layout } from "./listStyle";

const uncheckedImage = require("../../../assets/images/unchecked_circle.png");
const checkedImage = require("../../../assets/images/checked_circle.png");
const moreVertImage = require("../../../assets/images/more_vert.png");

export default function List({ Task, Time }) {
  return (
    <View style={[layout.container, color.border_clr]}>
      <View style={layout.checkList}>
        <Pressable style={layout.checkImage}>
          <Image source={uncheckedImage} />
        </Pressable>

        <View style={layout.checkListText}>
          <Text style={Typography.listTitle}>{Task}</Text>
          <Text style={Typography.listSubtitle}>{Time}</Text>
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
