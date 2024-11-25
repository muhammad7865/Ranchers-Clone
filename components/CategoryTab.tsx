import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CategoryTab = ({ name, isActive, onPress }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 mr-2 mx-2 rounded-full ${
        isActive ? "bg-[#F4BA45]" : "bg-[#F4BA45]"
      }`}
      style={{
        opacity: isActive ? 1 : 0.5,
        shadowColor:  isActive ?"red":undefined,
        shadowOffset: isActive ? { width: -2, height: 4 }:undefined,
        shadowOpacity: isActive ? 0.8:undefined,
        shadowRadius: isActive ?3:undefined,
      }}
    >
      <Text
        className={`font-semibold  ${isActive ? "text-white" : "text-black"}`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryTab;
