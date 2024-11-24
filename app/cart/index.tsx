import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Cart({ items }: any) {



  return (
    <View className="bg-[#ab2f2f] h-screen ">
      <View className="mt-20 flex flex-row items-center pl-">
        <Text className="color-white text-4xl font-extrabold pl-2">CART</Text>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
