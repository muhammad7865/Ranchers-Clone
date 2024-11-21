import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ShoppingCart } from "react-native-feather";
const MenuItem = ({ item, onAddToCart }: any) => {
  return (
    <View
      style={{ width: 200 }}
      className="flex px-4 py-6 mb-4 border-b border-gray-800 gap-y-2"
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 130, height: 150, borderRadius: 8 }}
      />
      <Text className="text-white text-lg font-bold mb-2">{item.name}</Text>
      <Text className="text-white text-sm mb-4" numberOfLines={2}>
        {item.description}
      </Text>

      <View className="flex-row my-4 justify-between items-center">
        <Text className="text-[#F4BA45] text-xl font-bold">
          Rs {item.price || (item.prices && item.prices.small) || "N/A"}
        </Text>
        <TouchableOpacity
          onPress={() => onAddToCart(item)}
          className="bg-[#F4BA45] rounded-xl"
          style={{"padding":2}}
        >
          <ShoppingCart stroke="black" width={30} height={20}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MenuItem;
