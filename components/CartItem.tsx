import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Minus, Plus } from "react-native-feather";
import { useItemContext } from "@/hooks/ItemContext";
import profile from "../app/more/profile";

export default function CartItem({ item }: any) {
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const { selectedItems, setSelectedItems } = useItemContext();

  useEffect(() => {
    const updateItemQuantity = () => {
      const updatedItems = selectedItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
      );
      setSelectedItems(updatedItems);
    };
    updateItemQuantity();
  }, [quantity]);


  //to remove the item from selectedItem
  const removeSelected = (item: any) => {
    const updatedItems = selectedItems.filter((cartItem) => cartItem.name !== item.name);
    setSelectedItems(updatedItems);
  };
  
  return (
    <View className="mt-4">
      <View
        className="flex-row p-2 justify-between mb-3"
        style={{
          borderWidth: 2,
          alignItems: "center",
          borderColor: "#F4BA45",
          borderRadius: 9,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 8,
          }}
        />
        <View className="flex">
        <Text className="text-white ">{item.name}</Text>
        <TouchableOpacity
        onPress={()=>{
            removeSelected(item)
        }}>
            <Text className="text-[#F4BA45]">Remove Item</Text>
        </TouchableOpacity>
        </View>

        <View style={{ width: 75 }}>
          <View className="flex-row">
            
            <TouchableOpacity onPress={() => setQuantity((prev:any) => Math.max(1, prev - 1))}>
              <Minus stroke="#F4BA45" width="20" height="20" />
            </TouchableOpacity>

            <Text className="mx-4 ml-2 text-white text-xl">{quantity}</Text>

            <TouchableOpacity onPress={() => setQuantity((prev:any) => prev + 1)}>
              <Plus stroke="#F4BA45" width="35" />
            </TouchableOpacity>

          </View>
          <Text className="text-white font-bold pt-4 pl-4 ">
            {item.price} x {quantity} = {item.price * quantity}
          </Text>
        </View>
      </View>
    </View>
  );
}
