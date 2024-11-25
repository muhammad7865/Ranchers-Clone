import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ShoppingCart } from "react-native-feather";
const MenuItem = ({ item, onAddToCart }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <View
      style={{ width: 185 }}
      className="flex px-4 py-3 mb-4 border-b ml-2 border-gray-800 gap-y-2"
    >
       {
        isLoading &&
        (
          <ActivityIndicator 
          animating={true} size="small" color="#F4BA45" />
        )
      }
      
        <Image
        source={{ uri: item.image }}
        style={{ width: 130, height: 150, borderRadius: 8,
          opacity:isLoading?0:1
         }}
        onLoadStart={() => handleImageLoad(true)} 
        onLoadEnd={() => handleImageLoad(false)}
        
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
          style={{ padding: 2 }}
        >
          <ShoppingCart stroke="black" width={30} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MenuItem;
