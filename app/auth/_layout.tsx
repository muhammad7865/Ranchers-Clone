import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgba(48, 50, 66, 0.95)",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "LOGIN",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "SIGNUP",
        }}
      />
    </Stack>
  );
}