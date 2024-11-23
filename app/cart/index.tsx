import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";
import { useRouter } from "expo-router";
import data from '@/categories.json'

export default function CartScreen() {
  const router = useRouter();

  return (
    <View className="bg-[#171717] h-screen " >
    <View className="mt-20 flex flex-row items-center pl-" >  
      <Text className="color-white text-4xl font-extrabold pl-2" >
        YOUR CART 
      </Text>
    </View>
    </View>
  );
}
