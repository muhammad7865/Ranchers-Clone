import { Link, router, Stack } from "expo-router";
import { TouchableOpacity,Text,View } from "react-native";
import * as Icon from "react-native-feather";


export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#171717",
          
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
            <TouchableOpacity className="flex-row " onPress={() => router.push('/location')}>   
            <Icon.MapPin color='white' /> 
            <Text className="space-x-0 p-1 text-white text-pretty text-balance">location </Text>
            </TouchableOpacity>,

          headerRight: () => 
          <TouchableOpacity onPress={() => router.push('/auth/login')}>   
          <Icon.LogIn color='white' /> 
          </TouchableOpacity>,

          title: "RANCHERS CAFE",    
          headerTitleAlign: "center",
          headerTintColor:'#F4BA45',
          }}
      />
    </Stack>
  );
}