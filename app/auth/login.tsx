import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";


export default function Login() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black p-4">
      <Text className="text-white text-2xl font-bold mb-4">Login Screen is here</Text>
      
      <TouchableOpacity 
       onPress={() => Alert.alert("Login screen")}
        className="bg-orange-500 p-4 rounded-lg mb-4"
      >
        <Text className="text-white text-center font-bold">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
       onPress={() => router.push("/auth/signup")}
        className="bg-orange-500 p-4 rounded-lg mb-4"
      >
        <Text className="text-white text-center font-bold">Move to sign-up </Text>
      </TouchableOpacity>

    </View>
  );
}