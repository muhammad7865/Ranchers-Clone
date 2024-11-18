import { Stack } from "expo-router";
import * as Icon from "react-native-feather";
import BlurTabBarBackground from '../../components/ui/TabBarBackground.ios';

export default function MoreLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Account",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="orderHistory"
        options={{
          title: "PAST ORDERS",
          presentation: "modal", // Modal-like presentation
            headerShown: false, // Explicitly hide header for this screen
          // headerStyle: {
          //   backgroundColor: "#171717",
          // },
          // headerTintColor: "white",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
        }}
      />
      <Stack.Screen
        name="Terms_conditions"
        options={{
          title: "TERMS AND CONDITIONS",
          presentation: "modal", // Modal-like presentation
          headerShown: false, // Explicitly hide header for this screen
          // headerStyle: {
          //   backgroundColor: "#171717",
          // },
          // headerTintColor: "white",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
        }}
      />
      <Stack.Screen
        name="Privacy"
        options={{
          title: "PRIVACY",
          presentation: "modal", // Modal-like presentation
          headerShown: false, // Explicitly hide header for this screen
          // headerStyle: {
          //   backgroundColor: "#171717",
          // },
          // headerTintColor: "white",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
         
        }}
      />
      <Stack.Screen
        name="feedback"
        options={{
          title: "FEEDBACK",
          headerStyle: {
            backgroundColor: "#171717",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "PROFILE",
          headerStyle: {
            backgroundColor: "#171717",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="changepassword"
        options={{
          title: "CHANGE PASSWORD",
          headerStyle: {
            backgroundColor: "#171717",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="contactus"
        options={{
          title: "CONTACT US",
          presentation: "modal", // Modal-like presentation
            headerShown: false, // Explicitly hide header for this screen
          // headerStyle: {
          //   backgroundColor: "#171717",
          // },
          // headerTintColor: "white",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
        }}
      />
      <Stack.Screen
        name="aboutus"
        options={{
          title: "ABOUT US",
          presentation: "modal", // Modal-like presentation
          headerShown: false, // Explicitly hide header for this screen
          // headerStyle: {
          //   backgroundColor: "#171717",
          // },
          // headerTintColor: "white",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
        }}
      />
    </Stack>
  );
}
