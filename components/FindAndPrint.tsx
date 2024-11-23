import { View, Text } from "react-native";
import React, { useState } from "react";
import menuData from "@/categories.json";
import { RadioButton } from "react-native-paper";

const FindAndPrint = ({ items }: any) => {
  const [checked, setChecked] = useState("unchecked");

  switch (findCategory(items)) {

    case "Deals":
      return (
        <View
          style={{
            borderWidth: 1,
            marginTop: 13,
            marginBottom: 19,
            borderColor: "#F4BA45",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View className="flex flex-row justify-between">
            <Text className="text-white">{items.name}</Text>
            <Text className="text-white"> {items.price}</Text>
          </View>
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
          }}
        >
          <View>
            <View className="flex-row justify-between">
              <View className="flex-row items-center">
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                />
                <Text className="text-white  ">{items.name}</Text>
              </View>

              <View className="items-center flex-row">
                <Text className="text-white  ">{items.price}</Text>
              </View>
            </View>
          </View>
          {items.isCombo && (
            <View>
              <View className="flex-row justify-between">
                <View className="flex-row items-center">
                  <RadioButton
                    value="first"
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                  <Text className="text-white  ">COMBO {items.name}</Text>
                </View>

                <View className="items-center flex-row">
                  <Text className="text-white  ">{items.comboPrice}</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      );
    
      case "Pizza":
        return (
          <View
            style={{
              borderWidth: 1,
              marginTop: 13,
              marginBottom: 19,
              borderColor: "#F4BA45",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <View>
              <View className="flex-row justify-between">
                <View className="flex-row ">
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
              <View className="flex-row justify-between">
                <View className="flex-row">
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
              <View className="flex-row justify-between">
                <View className="flex-row">
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
          </View>
        );

    case "Fries":
      if (items.prices) {
        return (
          <View
            style={{
              borderWidth: 1,
              marginTop: 13,
              marginBottom: 19,
              borderColor: "#F4BA45",
              padding: 10,
            }}
          >
            {items.prices.small && (
              <View>
                <View className="flex-row justify-between">
                  <View className="flex-row ">
                    <RadioButton
                      value="first"
                      status={checked === "first" ? "checked" : "unchecked"}
                      onPress={() => setChecked("first")}
                    />
                    <Text className="text-white  pt-2">{items.name} SMALL</Text>
                  </View>

                  <View>
                    <Text className="text-white pt-2">
                      {items.prices.small}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            {items.prices.medium && (
              <View>
                <View className="flex-row justify-between">
                  <View className="flex-row">
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
            )}
            {items.prices.large && (
              <View>
                <View className="flex-row justify-between">
                  <View className="flex-row">
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
            }}
          >
            <View className="flex flex-row justify-between">
              <Text className="text-white">{items.name}</Text>
              <Text className="text-white"> {items.price}</Text>
            </View>
          </View>
        );
      }

    case "Quick Bites":
      if (items.prices) {
        return (
          <View
            style={{
              borderWidth: 1,
              marginTop: 13,
              marginBottom: 19,
              borderColor: "#F4BA45",
              padding: 10,
            }}
          >
            {items.prices["1pc"] && (
              <View>
                <View className="flex-row justify-between">
                  <View className="flex-row ">
                    <RadioButton
                      value="first"
                      status={checked === "first" ? "checked" : "unchecked"}
                      onPress={() => setChecked("first")}
                    />
                    <Text className="text-white  pt-2">1 {items.name}</Text>
                  </View>

                  <View>
                    <Text className="text-white">{items.prices["1pc"]}</Text>
                  </View>
                </View>
              </View>
            )}
            {items.prices["3pc"] && (
              <View>
                <View className="flex-row justify-between">
                  <View className="flex-row ">
                    <RadioButton
                      value="first"
                      status={checked === "first" ? "checked" : "unchecked"}
                      onPress={() => setChecked("first")}
                    />
                    <Text className="text-white  pt-2">3 {items.name}</Text>
                  </View>

                  <View>
                    <Text className="text-white">{items.prices["3pc"]}</Text>
                  </View>
                </View>
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
            }}
          >
            <View className="flex flex-row justify-between">
              <Text className="text-white">{items.name}</Text>
              <Text className="text-white"> {items.price}</Text>
            </View>
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
          }}
        >
          <View className="flex flex-row justify-between">
            <Text className="text-white">{items.name}</Text>
            <Text className="text-white"> {items.price}</Text>
          </View>
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