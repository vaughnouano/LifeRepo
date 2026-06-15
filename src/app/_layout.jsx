import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        animation: "none",
        headerShown: false,
        contentStyle: {
          paddingTop: 60,
          paddingBottom: 30,
          paddingHorizontal: 16,
          backgroundColor: "transparent",
        },
      }}
    />
  );
}
