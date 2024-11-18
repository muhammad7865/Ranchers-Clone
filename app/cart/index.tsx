import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function CartScreen() {
  const router = useRouter();

  return (
    <View className="bg-[#171717] h-screen " >
    <View className="mt-20 flex flex-row items-center pl-" >
      <Text className="color-white text-4xl font-extrabold pl-2" >
        ORDERS
      </Text>
    </View>
    </View>
  );
}
