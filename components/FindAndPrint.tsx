import { View, Text } from "react-native";
import React, { useState } from "react";
import menuData from "@/categories.json";
import { RadioButton } from "react-native-paper";

const FindAndPrint = ({ items }: any) => {
  const [checked, setChecked] = useState("unchecked");

  switch (findCategory(items)) {
    case "Pizza":
      return (
        <View
          style={{
            borderWidth: 2,
            marginTop: 13,
            marginBottom: 19,
            borderColor: "#F4BA45",
            padding: 10,
            justifyContent: "space-between",
            borderRadius:10
          }}
        >
          <View>
            <View className="flex-row justify-between items-center ">
              <View className="flex-row items-center">
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}

                />
                <Text className="text-white  pt-2">{items.name} SMALL</Text>
              </View>

              <View>
                <Text className="text-white pt-2">{items.prices.small}</Text>
              </View>
            </View>
          </View>

          <View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                />
                <Text className="text-white  ">{items.name} MEDIUM</Text>
              </View>

              <View>
                <Text className="text-white  ">{items.prices.medium}</Text>
              </View>
            </View>
          </View>

          <View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                />
                <Text className="text-white  ">{items.name} LARGE</Text>
              </View>

              <View>
                <Text className="text-white  ">{items.prices.large}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    case "Deals":
      return (
        <View
          style={{
            borderWidth: 2,
            marginTop: 13,
            marginBottom: 19,
            borderColor: "#F4BA45",
            padding: 10,
            borderRadius:10
          }}
        >
          <Text className="text-white">{items.name}</Text>
          <Text className="text-white">Price: {items.price}</Text>
        </View>
      );

    case "Chicken Burger":
    case "Beef Burger":
      return (
        <View
          style={{
            borderWidth: 1,
            marginTop: 13,
            marginBottom: 19,
            borderColor: "#F4BA45",
            padding: 10,
            borderRadius:10
          }}
        >
          <Text className="text-white">{items.name}</Text>
          <Text className="text-white">Price: {items.price}</Text>
          {items.isCombo && (
            <Text className="text-white">Combo Price: {items.comboPrice}</Text>
          )}
        </View>
      );

    case "Fries":
      if (items.prices) {
        return (
          <View
            style={{
              borderWidth: 2,
              marginTop: 13,
              marginBottom: 19,
              borderColor: "#F4BA45",
              padding: 10,
              borderRadius:10
            }}
          >
            <Text className="text-white">{items.name}</Text>
            {items.prices.small && (
              <View className="flex-row justify-between">
                <Text className="text-white" style={{paddingVertical:20}}>Small</Text>
                <Text className="text-white"  style={{paddingVertical:20}}>{items.prices.small}</Text>
              </View>
            )}
            {items.prices.medium && (
              <View className="flex-row justify-between">
                <Text className="text-white">Medium</Text>
                <Text className="text-white">{items.prices.medium}</Text>
              </View>
            )}
            {items.prices.large && (
              <View className="flex-row justify-between">
                <Text className="text-white">Large</Text>
                <Text className="text-white">{items.prices.large}</Text>
              </View>
            )}
          </View>
        );
      } else {
        return (
          <View
            style={{
              borderWidth: 1,
              marginTop: 13,
              marginBottom: 19,
              borderColor: "#F4BA45",
              padding: 10,
              borderRadius:10
            }}
          >
            <Text className="text-white">{items.name}</Text>
            <Text className="text-white">Price: {items.price}</Text>
          </View>
        );
      }

    case "Quick Bites":
      if (items.prices) {
        return (
          <View
            style={{
              borderWidth: 2,
              marginTop: 13,
              marginBottom: 19,
              borderColor: "#F4BA45",
              padding: 10,
              borderRadius:10,
              display:"flex",
              flexDirection:"row"
            }}
          >
            <Text className="text-white">{items.name}</Text>
            {items.prices["1pc"] && (
              <View className="flex-row justify-between">
                <Text className="text-white">1 Piece</Text>
                <Text className="text-white">{items.prices["1pc"]}</Text>
              </View>
            )}
            {items.prices["3pc"] && (
              <View className="flex-row justify-between">
                <Text className="text-white">3 Pieces</Text>
                <Text className="text-white">{items.prices["3pc"]}</Text>
              </View>
            )}
          </View>
        );
      } else {
        return (
          <View
            style={{
              borderWidth: 1,
              marginTop: 13,
              marginBottom: 19,
              borderColor: "#F4BA45",
              padding: 10,
              borderRadius:10
            }}
          >
            <Text className="text-white">{items.name}</Text>
            <Text className="text-white">Price: {items.price}</Text>
          </View>
        );
      }

    case "Drinks":
      return (
        <View
          style={{
            borderWidth: 1,
            marginTop: 13,
            marginBottom: 19,
            borderColor: "#F4BA45",
            padding: 10,
            borderRadius:10
          }}
        >
          <Text className="text-white">{items.name}</Text>
          <Text className="text-white">Price: {items.price}</Text>
        </View>
      );

    default:
      return (
        <View className="flex-row justify-between">
          <Text className="text-white">{items.name}</Text>
          <Text className="text-white">{items.price}</Text>
        </View>
      );
  }
};

function findCategory(items: any) {
  for (const category of menuData.products) {
    const foundItem = category.items.find((item) => item.name == items.name);
    if (foundItem) {
      return category.category;
    }
  }
  return "Category not found";
}

export default FindAndPrint;
