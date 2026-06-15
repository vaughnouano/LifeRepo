import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { layout } from "./navigationStyle";

export default function NavButton({ href, title, style, onPress }) {
  return (
    <Link href={href} style={[layout.navButton, style]} asChild>
      <Pressable onPress={onPress}>
        <Text>{title}</Text>
      </Pressable>
    </Link>
  );
}
