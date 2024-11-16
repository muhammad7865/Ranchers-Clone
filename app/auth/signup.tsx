import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useRouter ,Link} from "expo-router";


export default function Login() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black p-4">
      <Text className="text-white text-2xl font-bold mb-4">sign-up Screen is here</Text>
      
      <TouchableOpacity 
       onPress={() => Alert.alert("Signup screen")}
        className="bg-orange-500 p-4 rounded-lg mb-4"
      >
        <Text className="text-white text-center font-bold">sign-up</Text>
      </TouchableOpacity>


      <TouchableOpacity >
        <Text className="text-white text-center font-bold">Swipe left to go back</Text>
      </TouchableOpacity>
    </View>
  );
}