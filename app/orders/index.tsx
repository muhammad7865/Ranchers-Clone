import { View, Text,TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Orders() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-900">
      <Text className="text-white text-xl mb-4">Your Cart is Empty!</Text>
      <TouchableOpacity
        className="px-4 py-2 bg-orange-500 rounded"
        onPress={() => router.push("/(home)")}
      >
        <Text className="text-white">Go to Home Menu</Text>
      </TouchableOpacity>
    </View>
  );
}