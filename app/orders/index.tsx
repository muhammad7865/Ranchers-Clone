import { View, Text,TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Orders() {
  return (
    <View className="bg-[#171717] h-screen " >
    <View className="mt-20 flex flex-row items-center pl-" >
      <Text className="color-white text-4xl font-extrabold pl-2" >
        ORDERS
      </Text>
    </View>
    <View className="border border-[#F4BA45] h-14 rounded-lg mx-2 text-white mt-8">
      <TouchableOpacity>
        <Text  className="text-[#171717] font-extrabold text-4xl mt-20 ml-6">
          Please Login first
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}