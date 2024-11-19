import { View, Text,TouchableOpacity } from "react-native";
import { router } from "expo-router";
import {useState} from 'react'

export default function Orders() {

  const [quantity,setquantity]= useState();
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