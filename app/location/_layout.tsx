import { Stack } from "expo-router";

export default function LocationLayout() {
  return (
    <Stack
    screenOptions={{
      headerShown:false,
    }}
  >
      <Stack.Screen
        name="index"
        options={{
          title: "BRANCHES",
        }}
      />
    </Stack>
  );
}