import CartItem from "@/components/CartItem";
import { useItemContext } from "@/hooks/ItemContext";
import { router } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { ShoppingCart } from "react-native-feather";

export default function Cart() {
  const { selectedItems } = useItemContext();
  const { TotalAmount } = useItemContext();

  return (
    <View className="bg-[#171717]  flex-1 ">
      <View className="mt-20 flex flex-row items-center pl-3 ">
        <Text className="color-white text-4xl font-extrabold ">CART</Text>
      </View>
      {selectedItems.length == 0 ? (
        <View
          className="flex-1 justify-center"
          style={{ alignItems: "center", paddingBottom: 120 }}
        >
          <View className="flex-row">
            <ShoppingCart stroke="#F4BA45" width={30} height={20} />
            <Text className="text-white text-xl font-extrabold">
              {" "}
              Your Cart Is Empty
            </Text>
          </View>
        </View>
      ) : (
        <>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={selectedItems}
            renderItem={({ item }) => {
              return <CartItem item={item} />;
            }}
          />

          <TouchableOpacity
            onPress={() => {
              router.push("/orders");
            }}
            className="bg-[#F4BA45] px-4 py-3 rounded-full w-full"
            style={{ marginBottom: 120 }}
          >
            <View className="w-full">
              <Text className="text-black font-bold text-lg">Checkout</Text>
              <Text className="text-black font-bold text-lg">
                Sub Total:{TotalAmount}
              </Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
