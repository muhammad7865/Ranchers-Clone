import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CategoryTab = ({ name, isActive, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    className={`px-4 py-2 mr-2 mx-2 rounded-full ${
      isActive ? "bg-[#8a2d2b]" : "bg-[#F4BA45]"
    }`}
  >
    <Text className={`font-semibold ${isActive ? "text-white" : "text-black"}`}>
      {name}
    </Text>
  </TouchableOpacity>
);

export default CategoryTab;
