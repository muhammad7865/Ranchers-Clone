  import { Stack } from "expo-router";

  export default function AuthLayout() {
    return (
      <Stack
        screenOptions={{
          headerShown: false, // Global default: hide headers for all screens
        }}
      >
        {/* Login Screen */}
        <Stack.Screen
          name="login"
          options={{
            presentation: "card", // Regular stack transition
          }}
        />

        {/* Signup Screen */}
        <Stack.Screen
          name="signup"
          options={{
            presentation: "modal", // Modal-like presentation
            headerShown: false, // Explicitly hide header for this screen
          }}
        />
      </Stack>
    );
  }
