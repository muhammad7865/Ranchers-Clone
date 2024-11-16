import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LocationScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-gray-700">
      <Text className="text-white text-xl mb-4">Select Your Location!</Text>
      <TouchableOpacity
        className="px-4 py-2 bg-orange-500 rounded"
        onPress={() => router.push("/(home)")}
      >
        <Text className="text-white">Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
