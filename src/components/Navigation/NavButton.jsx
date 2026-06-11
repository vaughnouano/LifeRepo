import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

import { color } from "../../constants/color";
import { layout } from "./navigationStyle";

export default function NavButton({ href, title }) {
  return (
    <Link href={href} style={[layout.navButton, color.bg_clr_100]} asChild>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </Link>
  );
}
