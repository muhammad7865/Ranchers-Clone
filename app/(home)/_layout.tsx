import { Link, Stack } from "expo-router";
import { Button, TouchableOpacity,Text,View } from "react-native";
import * as Icon from "react-native-feather";
import { LocationScreen } from '../location/index';
import Login from '../auth/login';

export default function HomeLayout() {
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
        name="index"  
        options={{
          headerLeft: () => 
            <TouchableOpacity className="flex-row " onPress={() => <Link href='/location'>Select location</Link>}>   
            <Icon.MapPin color='white' /> 
            <Text className="space-x-0 text-white text-pretty whitespace-break-spaces">Select location </Text>
            </TouchableOpacity>,

          headerRight: () => 
          <TouchableOpacity onPress={() => <Link href='/location'>Select location</Link>}>   
          <Icon.LogIn color='white' /> 
          </TouchableOpacity>,
          title: "Ranchers ",    
          headerTitleAlign: "center",
          }}
      />
    </Stack>
  );
}