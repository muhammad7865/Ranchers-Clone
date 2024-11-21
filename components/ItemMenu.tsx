import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ShoppingCart } from "react-native-feather";
const MenuItem = ({ item, onAddToCart }: any) => {
  return (
    <View className="px-4 py-6 mb-4 border-b border-gray-800">
      <Text className="text-white text-2xl font-bold mb-2">{item.name}</Text>

      <Image
        source={{ uri: item.image }}
        style={{ width: 130, height: 150, borderRadius: 8 }}
      />
      <Text className="text-white text-base mb-4" numberOfLines={2}>
        {item.description}
      </Text>

      <View className="flex-row mb-3 justify-between items-center">
        <View>
          <Text className="text-[#F4BA45] text-xl font-bold">
            Rs {item.price || (item.prices && item.prices.small) || "N/A"}
          </Text>
          {item.comboPrice && (
            <Text className="text-[#F4BA45] text-sm mt-1">
              Combo: Rs {item.comboPrice}
            </Text>
          )}
          <View className="border-t border-[#F4BA45] border-1 w-full" />
        </View>
        <TouchableOpacity
          onPress={() => onAddToCart(item)}
          className="bg-[#F4BA45] p-3 rounded-full"
        >
          <ShoppingCart stroke="black" width={50} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MenuItem;
